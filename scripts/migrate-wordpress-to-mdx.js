const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");

const xmlPath = path.join(process.cwd(), "nicolasvalenzuela.WordPress.2026-03-12.xml");
const outputDir = path.join(process.cwd(), "content", "insights");

function ensureArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function decodeHtml(str = "") {
  return str
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "—")
    .replace(/&#8230;/g, "...")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripWpBlocks(content = "") {
  return content
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\[\/?caption[^\]]*\]/g, "")
    .trim();
}

function cleanContent(html = "") {
  let content = decodeHtml(html);
  content = stripWpBlocks(content);

  content = content
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n\n")
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n\n")
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n\n")
    .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
    .replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*")
    .replace(/<ul[^>]*>/gi, "\n")
    .replace(/<\/ul>/gi, "\n")
    .replace(/<ol[^>]*>/gi, "\n")
    .replace(/<\/ol>/gi, "\n")
    .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
    .replace(/<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return content;
}

function mapTopic(categories = []) {
  const lower = categories.map((c) => c.toLowerCase());

  if (lower.includes("retail media")) return "retail-media";
  if (lower.includes("inteligencia artificial")) return "ai";
  return "general";
}

function buildFrontmatter(post) {
  const title = post.title?.[0] || "Sin título";
  const slug = post["wp:post_name"]?.[0] || "sin-slug";
  const dateRaw = post["wp:post_date"]?.[0] || "";
  const date = dateRaw ? dateRaw.split(" ")[0] : "";
  const excerpt =
    (post["excerpt:encoded"]?.[0] || "")
      .replace(/<[^>]+>/g, "")
      .trim();

  const categories = ensureArray(post.category)
    .map((c) => {
      if (typeof c === "string") return c;
      if (typeof c._ === "string") return c._;
      return "";
    })
    .filter(Boolean);

  const topic = mapTopic(categories);

  return {
    title,
    slug,
    description: excerpt || title,
    date,
    topic,
    tags: categories,
    featured: false,
  };
}

async function run() {
  if (!fs.existsSync(xmlPath)) {
    throw new Error(`No encuentro el XML en: ${xmlPath}`);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const xml = fs.readFileSync(xmlPath, "utf8");
  const parsed = await xml2js.parseStringPromise(xml, { explicitArray: true });

  const items = parsed.rss.channel[0].item || [];

  const posts = items.filter((item) => {
    const postType = item["wp:post_type"]?.[0];
    const status = item["wp:status"]?.[0];
    return postType === "post" && status === "publish";
  });

  for (const post of posts) {
    const meta = buildFrontmatter(post);
    const rawContent = post["content:encoded"]?.[0] || "";
    const content = cleanContent(rawContent);

    const mdx = `---
title: "${meta.title.replace(/"/g, '\\"')}"
slug: "${meta.slug}"
description: "${meta.description.replace(/"/g, '\\"')}"
date: "${meta.date}"
topic: "${meta.topic}"
tags: [${meta.tags.map((t) => `"${t.replace(/"/g, '\\"')}"`).join(", ")}]
featured: ${meta.featured}
---

${content}
`;

    const filePath = path.join(outputDir, `${meta.slug}.mdx`);
    fs.writeFileSync(filePath, mdx, "utf8");
    console.log(`OK -> ${filePath}`);
  }

  console.log(`\nMigración completada. Posts generados: ${posts.length}`);
}

run().catch((err) => {
  console.error("Error en migración:", err);
  process.exit(1);
});
