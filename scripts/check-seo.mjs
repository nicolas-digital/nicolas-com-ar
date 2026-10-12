import assert from 'node:assert/strict';
const base = process.env.TARGET_URL || 'http://localhost:3100';
const origin = 'https://www.nicolas.com.ar';
const get = async path => { const r = await fetch(`${base}${path}`); assert.equal(r.status,200,path); return r.text(); };
const robots = await get('/robots.txt');
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
assert.ok(!robots.includes('Disallow: /_next/'));
assert.equal((robots.match(/Sitemap:/g)||[]).length,1);
const sitemap = await get('/sitemap.xml');
assert.ok(!sitemap.includes('/thanks'));
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
assert.equal(urls.length,new Set(urls).size);
for (const url of urls) {
  assert.ok(url.startsWith(`${origin}/`) || url===origin,url);
  const path = new URL(url).pathname;
  const html = await get(path);
  assert.ok(html.includes(`rel="canonical" href="${url}"`),`canonical ${path}`);
  assert.ok(!/name="robots" content="[^"]*noindex/.test(html),`indexable ${path}`);
  for (const [,data] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(data);
}
const llms = await get('/llms.txt');
assert.ok(llms.startsWith('# Nicolás Valenzuela'));
for (const url of urls) {
  const expected = url === origin ? `${origin}/` : url;
  assert.ok(llms.includes(`](${expected})`), `llms inventory: ${url}`);
}
assert.ok(!llms.includes('/thanks'));
const home = await get('/');
assert.ok(home.includes('name="google-site-verification"'));
assert.ok(home.includes('name="msvalidate.01"'));
assert.match(await get("/thanks"), /name="robots" content="[^"]*noindex/);
assert.equal((await fetch(`${base}/insights/not-a-real-article`)).status,404);
console.log(`PASS: ${urls.length} canonical/indexable URLs, sitemap, robots, llms inventory, ownership metadata, JSON-LD, noindex and 404.`);
