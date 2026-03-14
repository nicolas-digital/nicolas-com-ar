import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/insights");
const imagesDirectory = "/images/insights";

console.log("🔎 Buscando insights sin coverImage...\n");

const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith(".mdx"));

files.forEach((file) => {

  const fullPath = path.join(postsDirectory, file);
  const source = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(source);

  const slug = file.replace(".mdx", "");

  if (!data.coverImage) {

    const imagePath = `${imagesDirectory}/${slug}-cover.webp`;

    const newFrontmatter = {
      ...data,
      coverImage: imagePath
    };

    const newFile = matter.stringify(content, newFrontmatter);

    fs.writeFileSync(fullPath, newFile);

    console.log(`✔ coverImage agregado → ${slug}`);

  } else {

    console.log(`✓ ${slug} ya tiene coverImage`);

  }

});

console.log("\n🚀 Proceso terminado.");
