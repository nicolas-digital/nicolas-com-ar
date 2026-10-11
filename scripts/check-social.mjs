import assert from 'node:assert/strict';
import { writeFile, mkdir } from 'node:fs/promises';
const base = process.env.TARGET_URL || 'http://localhost:3101';
const origin = 'https://www.nicolas.com.ar';
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
const titles = new Set();
const images = new Set();
let maxBytes = 0;
await mkdir('/private/tmp/nicolas-social-qa', { recursive: true });
for (const url of urls) {
  const pathname = new URL(url).pathname;
  const response = await fetch(base + pathname, { headers: { 'user-agent': 'Twitterbot/1.0' } });
  assert.equal(response.status, 200, pathname);
  const html = await response.text();
  const tags = [...html.matchAll(/<meta\s+(?:property|name)="([^"]+)"\s+content="([^"]*)"[^>]*>/g)];
  const meta = key => tags.filter(m => m[1] === key).map(m => m[2]);
  for (const key of ['og:title','og:description','og:url','og:image','og:image:width','og:image:height','og:image:alt','og:image:type','og:site_name','og:locale','twitter:card','twitter:title','twitter:description','twitter:image','twitter:image:alt']) {
    assert.equal(meta(key).length, 1, `${pathname}: ${key} once`);
    assert.ok(meta(key)[0], `${pathname}: ${key} nonempty`);
  }
  assert.equal(meta('og:url')[0], url);
  assert.equal(meta('og:locale')[0], 'es_AR');
  assert.equal(meta('twitter:card')[0], 'summary_large_image');
  assert.equal(meta('twitter:title')[0], meta('og:title')[0]);
  assert.equal(meta('twitter:image')[0], meta('og:image')[0]);
  assert.equal(meta('og:image:type')[0], 'image/png');
  assert.equal(meta('og:image:width')[0], '1200');
  assert.equal(meta('og:image:height')[0], '630');
  assert.ok(!titles.has(meta('og:title')[0]), `unique title ${pathname}`);
  titles.add(meta('og:title')[0]);
  const image = meta('og:image')[0];
  assert.ok(image.startsWith(origin + '/social/'));
  assert.ok(!images.has(image), `unique card ${pathname}`);
  images.add(image);
  const pngResponse = await fetch(base + new URL(image).pathname);
  assert.equal(pngResponse.status, 200, image);
  assert.ok(pngResponse.headers.get('content-type').startsWith('image/png'));
  const png = Buffer.from(await pngResponse.arrayBuffer());
  assert.equal(png.subarray(0,8).toString('hex'), '89504e470d0a1a0a');
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  assert.ok(png.length < 1_000_000, `image payload ${image}`);
  maxBytes = Math.max(maxBytes, png.length);
  await writeFile(`/private/tmp/nicolas-social-qa/${pathname.replaceAll('/','_') || 'home'}.png`,png);
  assert.equal((html.match(/<title>(.*?)<\/title>/)?.[1].match(/Nicolás Valenzuela/g) || []).length, 1);
  if (pathname.startsWith('/insights/')) {
    assert.equal(meta('og:type')[0], 'article');
    assert.ok(meta('article:published_time')[0]);
    assert.equal(meta('article:author')[0], origin + '/about');
  } else assert.equal(meta('og:type')[0], 'website');
}
for (const path of ['/social/unknown/card.png','/social/insights/not-a-real-article/card.png','/social/home/not-an-image.png']) {
  assert.equal((await fetch(base + path)).status, 404, path);
}
console.log(`PASS: ${urls.length} unique OG/Twitter cards, absolute URLs, article metadata, PNG 1200×630; largest ${Math.ceil(maxBytes/1024)} KB; unknown cards 404.`);
