import { getAllPosts } from "@/lib/posts";
import { getAllTopics } from "@/lib/topics";
import { SITE_URL } from "@/lib/social";

export const dynamic = "force-static";

// Generated from the same published-content inventory as the sitemap.
const plain = (value: string) => value.replace(/[\r\n]+/g, " ").replace(/[\[\]]/g, "").trim();

export function GET() {
  const lines = [
    "# Nicolás Valenzuela",
    "",
    "> Sitio personal y editorial sobre estrategia, datos e inteligencia artificial aplicada a retail y comercio digital en Latinoamérica.",
    "",
    "Nicolás Valenzuela combina experiencia ejecutiva, consultoría y docencia. Completó el Programa en Alta Dirección: Chief Digital Officer de MIT Professional Education el 2 de octubre de 2026. Su trayectoria y credenciales se detallan en la página de perfil.",
    "",
    "Los artículos distinguen perspectivas profesionales, ejemplos ilustrativos y propuestas académicas. PIM-360X es un proyecto académico grupal; no representa una implementación comercial ni resultados de un piloto.",
    "",
    "## Páginas principales",
    "",
    `- [Inicio](${SITE_URL}/): Enfoque profesional, formación y últimas publicaciones.`,
    `- [Trayectoria](${SITE_URL}/about): Experiencia ejecutiva, docencia y formación.`,
    `- [Consultoría](${SITE_URL}/consulting): Acompañamiento en comercio digital, retail media e IA.`,
    `- [Insights](${SITE_URL}/insights): Artículos y análisis de Nicolás Valenzuela.`,
    `- [Temas](${SITE_URL}/topics): Organización temática de los contenidos.`,
    "",
    "## Artículos publicados",
    "",
    ...getAllPosts().map(post => `- [${plain(post.title)}](${SITE_URL}/insights/${post.slug}): ${plain(post.description)}`),
    "",
    "## Temas",
    "",
    ...getAllTopics().map(topic => `- [${plain(topic.title)}](${SITE_URL}/topics/${topic.slug}): ${plain(topic.description)}`),
    "",
    "## Referencias",
    "",
    `- [Sitemap](${SITE_URL}/sitemap.xml): URLs canónicas y fechas de los artículos.`,
    `- [Robots](${SITE_URL}/robots.txt): Reglas de rastreo.`,
    "- [LinkedIn](https://www.linkedin.com/in/nvalenzuela/): Perfil profesional.",
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
