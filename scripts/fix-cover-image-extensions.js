import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/insights");
const imagesDirectory = path.join(process.cwd(), "public/images/insights");

const imageFiles = fs.readdirSync(imagesDirectory);

console.log("🔎 Corrigiendo coverImage según archivos reales...\n");

const postFiles = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

postFiles.forEach((file) => {
  const fullPath = path.join(postsDirectory, file);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);

  const slug = file.replace(".mdx", "");

  const matchingImage = imageFiles.find((img) => img.startsWith(`${slug}-cover.`));

  if (!matchingImage) {
    console.log(`⚠ No se encontró imagen para ${slug}`);
    return;
  }

  const correctPath = `/images/insights/${matchingImage}`;

  if (data.coverImage !== correctPath) {
    const newFrontmatter = {
      ...data,
      coverImage: correctPath,
    };

    const newFile = matter.stringify(content, newFrontmatter);
    fs.writeFileSync(fullPath, newFile);

    console.log(`✔ ${slug} → ${correctPath}`);
  } else {
    console.log(`✓ ${slug} ya estaba correcto`);
  }
});

console.log("\n🚀 Corrección terminada.");
