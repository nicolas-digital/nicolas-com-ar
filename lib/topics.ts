export type Subnodo = {
  id: string;
  slug: string;
  title: string;
  description: string;
};

export type Topic = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  icon?: string;
  emoji?: string;
  keywords: string[];
  subnodos: Subnodo[];
  transversals?: string[]; // references to data, cx, economics
  relatedTopics?: string[];
};

export type Transversal = {
  id: string;
  slug: string;
  title: string;
  description: string;
  role: string;
};

// 5 PILARES DEL KNOWLEDGE GRAPH
export const topics: Topic[] = [
  {
    id: "retail-strategy",
    slug: "retail-strategy",
    title: "Retail Strategy",
    description:
      "Modelos de negocio innovadores, ecosistemas digitales y posicionamiento estratégico en retail.",
    longDescription:
      "Define el modelo del negocio retail. Exploramos cómo retailers transforman su estrategia, construyen ecosistemas de plataforma, definen roadmaps de transformación digital y se posicionan en la economía de plataformas.",
    emoji: "📊",
    keywords: [
      "retail strategy LATAM",
      "omnichannel strategy",
      "retail ecosystems",
      "platform economy retail",
      "digital transformation roadmap",
    ],
    subnodos: [
      {
        id: "digital-transformation-roadmap",
        slug: "digital-transformation-roadmap",
        title: "Digital Transformation Roadmap",
        description: "Cómo diseñar y ejecutar roadmaps de transformación digital en retail",
      },
      {
        id: "omnichannel-strategy",
        slug: "omnichannel-strategy",
        title: "Omnichannel Strategy",
        description: "Integración de canales físicos y digitales en una experiencia coherente",
      },
      {
        id: "retail-ecosystems",
        slug: "retail-ecosystems",
        title: "Retail Ecosystems",
        description: "Construcción de plataformas y ecosistemas de valor en retail",
      },
      {
        id: "platform-economy",
        slug: "platform-economy",
        title: "Platform Economy",
        description: "El rol de retailers en la economía de plataformas",
      },
      {
        id: "growth-strategy",
        slug: "growth-strategy",
        title: "Growth Strategy",
        description: "Modelos de crecimiento y expansión digital",
      },
    ],
    transversals: ["data-architecture", "customer-experience", "business-economics"],
    relatedTopics: ["commerce-platforms", "ai-retail", "digital-operations", "retail-media-marketing"],
  },

  {
    id: "commerce-platforms",
    slug: "commerce-platforms",
    title: "Commerce Platforms",
    description:
      "Arquitectura de plataformas, marketplaces, social commerce e integración de sistemas de transacción digital.",
    longDescription:
      "Define cómo se transacciona. Analizamos arquitectura de plataformas comerciales, desde marketplaces hasta composable commerce, social commerce y la infraestructura técnica que sostiene las transacciones.",
    emoji: "🛒",
    keywords: [
      "commerce platform strategy",
      "marketplace LATAM",
      "composable commerce",
      "social commerce",
      "commerce stack",
    ],
    subnodos: [
      {
        id: "marketplace-strategy",
        slug: "marketplace-strategy",
        title: "Marketplace Strategy",
        description: "Diseño, lanzamiento y operación de marketplaces",
      },
      {
        id: "composable-commerce",
        slug: "composable-commerce",
        title: "Composable Commerce",
        description: "Arquitectura modular y headless de plataformas comerciales",
      },
      {
        id: "social-commerce",
        slug: "social-commerce",
        title: "Social Commerce",
        description: "Integración de comercio en redes sociales y live commerce",
      },
      {
        id: "commerce-stack",
        slug: "commerce-stack",
        title: "Digital Commerce Stack",
        description: "Selección e integración de herramientas para ecommerce",
      },
      {
        id: "platform-infrastructure",
        slug: "platform-infrastructure",
        title: "Platform Infrastructure",
        description: "Infraestructura técnica y escalabilidad de plataformas",
      },
    ],
    transversals: ["data-architecture", "business-economics"],
    relatedTopics: ["retail-strategy", "ai-retail", "digital-operations"],
  },

  {
    id: "ai-retail",
    slug: "ai-retail",
    title: "AI & Digital Retail",
    description:
      "Estrategia e implementación de inteligencia artificial en retail, desde personalización hasta automatización agentic.",
    longDescription:
      "Define cómo se toman decisiones. Exploramos aplicación práctica de IA en retail: personalización, merchandising, search, conversational commerce y sistemas agentic autónomos.",
    emoji: "🤖",
    keywords: [
      "AI retail strategy",
      "AI personalization",
      "AI pricing",
      "agentic commerce",
      "conversational commerce",
    ],
    subnodos: [
      {
        id: "ai-personalization",
        slug: "ai-personalization",
        title: "AI Personalization",
        description: "Recomendaciones y personalización con IA",
      },
      {
        id: "ai-merchandising",
        slug: "ai-merchandising",
        title: "AI Merchandising",
        description: "Optimización de assortment, pricing y demand forecasting",
      },
      {
        id: "ai-search-discovery",
        slug: "ai-search-discovery",
        title: "AI Search & Discovery",
        description: "Búsqueda semántica y discovery impulsada por IA",
      },
      {
        id: "conversational-commerce",
        slug: "conversational-commerce",
        title: "Conversational Commerce",
        description: "Chatbots, copilots y asistentes de IA en retail",
      },
      {
        id: "agentic-commerce",
        slug: "agentic-commerce",
        title: "Agentic Commerce",
        description: "Agentes autónomos que ejecutan decisiones comerciales",
      },
    ],
    transversals: ["data-architecture", "customer-experience", "business-economics"],
    relatedTopics: ["commerce-platforms", "retail-strategy", "digital-operations", "retail-media-marketing"],
  },

  {
    id: "digital-operations",
    slug: "digital-operations",
    title: "Digital Operations",
    description:
      "Ejecución operacional, logística, automatización, infraestructura y frameworks de operación en retail digital. [TU DIFERENCIADOR]",
    longDescription:
      "Define la ejecución real. Exploramos cómo se ejecuta el negocio digital: supply chain, fulfillment, automatización operacional, infraestructura de datos, frameworks de gobernanza y metodologías probadas en LATAM.",
    emoji: "⚙️",
    keywords: [
      "digital operations framework",
      "retail execution",
      "supply chain LATAM",
      "operational excellence",
      "retail automation",
    ],
    subnodos: [
      {
        id: "supply-chain-transformation",
        slug: "supply-chain-transformation",
        title: "Supply Chain Transformation",
        description: "Transformación digital de la cadena de suministro",
      },
      {
        id: "fulfillment-models",
        slug: "fulfillment-models",
        title: "Fulfillment Models",
        description: "Modelos de fulfillment: warehouse, store, micro-fulfillment",
      },
      {
        id: "store-operations",
        slug: "store-operations",
        title: "Store Operations",
        description: "Operaciones de tienda en contexto omnicanal",
      },
      {
        id: "retail-automation",
        slug: "retail-automation",
        title: "Automation & Orchestration",
        description: "Automatización de procesos y orquestación de workflows",
      },
      {
        id: "retail-infrastructure",
        slug: "retail-infrastructure",
        title: "Retail Infrastructure",
        description: "Arquitectura de datos y sistemas para operaciones",
      },
      {
        id: "operational-frameworks",
        slug: "operational-frameworks",
        title: "Operational Frameworks",
        description: "Frameworks y metodologías de operación comprobadas",
      },
    ],
    transversals: ["data-architecture", "business-economics"],
    relatedTopics: ["retail-strategy", "commerce-platforms", "ai-retail"],
  },

  {
    id: "retail-media-marketing",
    slug: "retail-media-marketing",
    title: "Retail Media & Marketing",
    description:
      "Monetización de tráfico, medios propios, publicidad retail, creators y customer engagement.",
    longDescription:
      "Define la monetización. Analizamos cómo retailers generan ingresos mediante medios propios: retail media networks, publicidad, creator commerce, loyalty programs y estrategias de engagement.",
    emoji: "📢",
    keywords: [
      "retail media LATAM",
      "retail advertising",
      "creator commerce",
      "loyalty programs",
      "discovery platforms",
    ],
    subnodos: [
      {
        id: "retail-media-networks",
        slug: "retail-media-networks",
        title: "Retail Media Networks",
        description: "Construcción y operación de redes de medios retail",
      },
      {
        id: "creator-commerce",
        slug: "creator-commerce",
        title: "Creator Commerce",
        description: "Estrategia de marketing con influencers y creators",
      },
      {
        id: "customer-engagement",
        slug: "customer-engagement",
        title: "Customer Engagement",
        description: "Programas de engagement y retencion de clientes",
      },
      {
        id: "loyalty-ecosystems",
        slug: "loyalty-ecosystems",
        title: "Loyalty Ecosystems",
        description: "Diseño de programas de lealtad y gamification",
      },
      {
        id: "discovery-monetization",
        slug: "discovery-monetization",
        title: "Discovery Monetization",
        description: "Monetización de búsqueda y discovery",
      },
    ],
    transversals: ["data-architecture", "customer-experience", "business-economics"],
    relatedTopics: ["retail-strategy", "ai-retail", "commerce-platforms"],
  },
];

// CAPAS TRANSVERSALES
export const transversals: Transversal[] = [
  {
    id: "data-architecture",
    slug: "data-architecture",
    title: "Data & Analytics",
    description: "El sistema nervioso del negocio digital",
    role: "Backbone que conecta strategy, platforms, AI, operations y media",
  },
  {
    id: "customer-experience",
    slug: "customer-experience",
    title: "Customer Experience",
    description: "La ventaja competitiva visible",
    role: "Integra strategy, personalization, engagement y operations",
  },
  {
    id: "business-economics",
    slug: "business-economics",
    title: "Business Economics",
    description: "La métrica que importa",
    role: "Conecta strategy, platforms, AI, operations y media con impacto en revenue",
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getAllTopics(): Topic[] {
  return topics;
}

export function getSubnodoBySlug(topicSlug: string, subnodoSlug: string): Subnodo | undefined {
  const topic = getTopicBySlug(topicSlug);
  return topic?.subnodos.find((s) => s.slug === subnodoSlug);
}

export function getTransversalBySlug(slug: string): Transversal | undefined {
  return transversals.find((t) => t.slug === slug);
}
