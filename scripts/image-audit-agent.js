import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/insights");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const imageDir = path.join(process.cwd(), "public/images/insights");

const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".mdx"));

let missingImages = [];

files.forEach(file => {
  const full = path.join(postsDir, file);
  const raw = fs.readFileSync(full, "utf8");
  const { data } = matter(raw);

  if (!data.coverImage) {
    missingImages.push({ file, issue: "missing coverImage field" });
    return;
  }

  const imagePath = path.join(process.cwd(), "public", data.coverImage);

  if (!fs.existsSync(imagePath)) {
    missingImages.push({ file, issue: "image file not found" });
  }
});

console.log("🔎 Auditing insight images...\n");

if (missingImages.length === 0) {
  console.log("✅ All insights have valid images");
} else {
  missingImages.forEach(item => {
    console.log(`⚠ ${item.file} → ${item.issue}`);
  });
}

console.log(`\n📄 Checked ${files.length} insights`);
