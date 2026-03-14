import fs from "fs";
import path from "path";

const projectRoot = process.cwd();
const insightsDir = path.join(projectRoot, "content/insights");

console.log("🔎 Analizando insights...");

const files = fs.readdirSync(insightsDir).filter(f => f.endsWith(".mdx"));

let missingMeta = [];

files.forEach(file => {
  const full = path.join(insightsDir, file);
  const content = fs.readFileSync(full, "utf8");

  if (!content.includes("title:")) {
    missingMeta.push({ file, field: "title" });
  }

  if (!content.includes("description:")) {
    missingMeta.push({ file, field: "description" });
  }

  if (!content.includes("date:")) {
    missingMeta.push({ file, field: "date" });
  }

  if (!content.includes("topic:")) {
    missingMeta.push({ file, field: "topic" });
  }
});

if (missingMeta.length > 0) {
  console.log("⚠️ Frontmatter incompleto:");
  missingMeta.forEach(m => {
    console.log(`- ${m.file} falta ${m.field}`);
  });
} else {
  console.log("✅ Todos los insights tienen metadata básica");
}

console.log(`📄 Total insights: ${files.length}`);

console.log("✔ Refactor check finalizado");
