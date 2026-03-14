export type Topic = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  icon?: string;
  relatedTopics?: string[];
};

export const topics: Topic[] = [
  {
    id: "digital-commerce",
    slug: "digital-commerce",
    title: "Digital Commerce",
    description:
      "Modelos de crecimiento digital, operación ecommerce, omnicanalidad y capacidades organizacionales para negocios digitales.",
    longDescription:
      "Exploramos estrategias de transformación digital en comercio, desde operación omnicanal hasta optimización de customer experience. Incluye análisis de plataformas, modelos de crecimiento y capacidades organizacionales necesarias para competir en entornos digitales.",
    relatedTopics: ["retail-media", "ai"],
  },
  {
    id: "retail-media",
    slug: "retail-media",
    title: "Retail Media",
    description:
      "Monetización digital, ecosistemas entre retailers y marcas y el rol de los datos en nuevas fuentes de ingresos.",
    longDescription:
      "Análisis profundo de retail media networks, publicidad de primera parte y plataformas de monetización. Exploramos cómo retailers y marcas crean ecosistemas de valor basados en datos, con enfoque en América Latina.",
    relatedTopics: ["digital-commerce", "ai"],
  },
  {
    id: "ai",
    slug: "ai",
    title: "Inteligencia Artificial",
    description:
      "Casos de uso de inteligencia artificial aplicados a negocio, operación y experiencia de cliente.",
    longDescription:
      "Desde LLMs hasta sistemas agentic, exploramos la aplicación práctica de inteligencia artificial en comercio, operaciones y experiencia del cliente. Incluye análisis de tendencias, casos de uso emergentes y transformación organizacional.",
    relatedTopics: ["digital-commerce", "retail-media"],
  },
  {
    id: "digital-transformation",
    slug: "digital-transformation",
    title: "Transformación Digital",
    description:
      "Estrategia, cambio organizacional y ejecución en contextos de transformación digital.",
    longDescription:
      "La transformación digital va más allá de tecnología. Analizamos modelos de gobernanza, capacidades organizacionales, roadmaps estratégicos y cómo traducir visión en ejecución real en contextos de cambio acelerado.",
    relatedTopics: ["digital-commerce", "ai"],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getAllTopics(): Topic[] {
  return topics;
}
