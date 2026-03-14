import fs from 'fs';
import path from 'path';

const SITE_ORIGIN = 'https://www.nicolas.com.ar';
const POSTS_DIR = path.join(process.cwd(), 'content/insights');
const OUTPUT_DIR = path.join(process.cwd(), 'public/images/insights');

const USER_AGENT = 'Mozilla/5.0 (compatible; NicolasMigrationBot/1.0)';

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      'user-agent': USER_AGENT,
      'accept': 'text/html,application/xhtml+xml'
    }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return await res.text();
}

async function downloadBinary(url) {
  const res = await fetch(url, {
    headers: { 'user-agent': USER_AGENT }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function getMdxFiles(dir) {
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
}

function extractOgImage(html) {
  const patterns = [
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i,
  ];

  for (const regex of patterns) {
    const match = html.match(regex);
    if (match?.[1]) return decodeHtml(match[1]);
  }
  return null;
}

function extractFirstWpContentImage(html) {
  const matches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
  const candidates = matches
    .map((m) => decodeHtml(m[1]))
    .filter(Boolean)
    .filter((src) => /wp-content|uploads|\.jpg|\.jpeg|\.png|\.webp/i.test(src))
    .filter((src) => !/avatar|gravatar|emoji|icon|logo/i.test(src));

  return candidates[0] || null;
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&#038;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function normalizeUrl(url) {
  if (!url) return null;
  try {
    return new URL(url, SITE_ORIGIN).toString();
  } catch {
    return null;
  }
}

function getLocalExtension(remoteUrl, headersContentType = '') {
  const pathname = new URL(remoteUrl).pathname.toLowerCase();
  const ext = path.extname(pathname);
  if (ext && ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'].includes(ext)) return ext;
  if (/image\/png/i.test(headersContentType)) return '.png';
  if (/image\/webp/i.test(headersContentType)) return '.webp';
  if (/image\/avif/i.test(headersContentType)) return '.avif';
  return '.jpg';
}

async function resolveFeaturedImage(postUrl) {
  const html = await fetchText(postUrl);
  const og = normalizeUrl(extractOgImage(html));
  if (og) return { imageUrl: og, source: 'og:image' };

  const firstImg = normalizeUrl(extractFirstWpContentImage(html));
  if (firstImg) return { imageUrl: firstImg, source: 'first <img>' };

  return { imageUrl: null, source: 'none' };
}

async function writeImage(remoteUrl, localBasePath) {
  const res = await fetch(remoteUrl, { headers: { 'user-agent': USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for image ${remoteUrl}`);
  const contentType = res.headers.get('content-type') || '';
  const ext = getLocalExtension(remoteUrl, contentType);
  const outPath = `${localBasePath}${ext}`;
  const arrayBuffer = await res.arrayBuffer();
  fs.writeFileSync(outPath, Buffer.from(arrayBuffer));
  return outPath;
}

async function main() {
  ensureDir(OUTPUT_DIR);

  const files = getMdxFiles(POSTS_DIR);
  const report = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, '');
    const postUrl = `${SITE_ORIGIN}/${slug}/`;
    const localBasePath = path.join(OUTPUT_DIR, `${slug}-cover`);

    try {
      const { imageUrl, source } = await resolveFeaturedImage(postUrl);
      if (!imageUrl) {
        report.push({ slug, postUrl, status: 'not_found', source });
        console.log(`✖ No encontré imagen para ${slug}`);
        continue;
      }

      const savedPath = await writeImage(imageUrl, localBasePath);
      report.push({ slug, postUrl, status: 'downloaded', source, imageUrl, savedPath });
      console.log(`✔ ${slug} ← ${imageUrl}`);
    } catch (error) {
      report.push({ slug, postUrl, status: 'error', error: String(error) });
      console.log(`✖ Error en ${slug}: ${String(error)}`);
    }
  }

  const reportPath = path.join(process.cwd(), 'scripts', 'wordpress-image-migration-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  console.log(`\nReporte guardado en: ${reportPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
