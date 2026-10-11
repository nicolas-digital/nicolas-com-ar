import type { Metadata } from "next";

export const SITE_URL = "https://www.nicolas.com.ar";
export const SITE_NAME = "Nicolás Valenzuela";
export const socialPages = {
  home: { path: "/", title: "Estrategia, datos e IA para el negocio digital", description: "Nicolás Valenzuela: experiencia ejecutiva, docencia y formación en MIT Professional Education aplicada a retail y comercio digital.", label: "ESTRATEGIA · DATOS · IA" },
  about: { path: "/about", title: "Trayectoria ejecutiva, docencia y formación", description: "Conocé la trayectoria de Nicolás Valenzuela en comercio digital, retail media e IA y su formación en MIT Professional Education.", label: "TRAYECTORIA" },
  consulting: { path: "/consulting", title: "Consultoría en comercio digital, retail media e IA", description: "Acompañamiento estratégico de Nicolás Valenzuela para retailers, marcas y empresas de tecnología: diagnóstico, prioridades y ejecución en Latinoamérica.", label: "CONSULTORÍA" },
  insights: { path: "/insights", title: "Insights sobre retail, datos e inteligencia artificial", description: "Análisis de Nicolás Valenzuela sobre comercio digital, retail media, datos e IA: perspectivas para conectar tecnología y decisiones de negocio.", label: "IDEAS PARA PONER EN PRÁCTICA" },
  topics: { path: "/topics", title: "Cinco temas para entender el negocio digital", description: "Explorá artículos sobre estrategia retail, plataformas de comercio, inteligencia artificial, operaciones digitales y retail media en Latinoamérica.", label: "TEMAS" },
} as const;

export function socialImage(path: string) {
  return `${SITE_URL}/social${path === "/" ? "/home" : path}/card.png`;
}

type SocialInput = { path: string; title: string; description: string; publishedTime?: string; modifiedTime?: string; tags?: string[] };
export function pageMetadata({ path, title, description, publishedTime, modifiedTime, tags }: SocialInput): Metadata {
  const image = { url: socialImage(path), width: 1200, height: 630, type: "image/png", alt: `${title} — ${SITE_NAME}` };
  return {
    title: { absolute: `${title} | ${SITE_NAME}` }, description,
    alternates: { canonical: path },
    openGraph: {
      title, description, url: path, siteName: SITE_NAME, locale: "es_AR", images: [image],
      ...(publishedTime ? { type: "article" as const, publishedTime, ...(modifiedTime ? { modifiedTime } : {}), authors: [`${SITE_URL}/about`], tags } : { type: "website" as const }),
    },
    twitter: { card: "summary_large_image", title, description, images: [{ url: image.url, alt: image.alt }] },
  };
}
