/**
 * Profile Data - Single source of truth for Nicolás Valenzuela's profile
 * Used across: app/page.tsx, app/about/page.tsx, components/*, etc.
 */

export const profileData = {
  // Basic Info
  name: "Nicolás Valenzuela",
  location: "Buenos Aires, Argentina",
  title: "Digital Strategy & Retail Innovation Advisor",
  
  // Professional Metrics
  yearsExperience: 25,
  yearsInCommerce: 20,
  yearsTeaching: 26, // Since 2000
  countriesOperating: 4, // Argentina, Mexico, Brazil, Colombia
  companiesAdvised: 100,
  
  // Education & Teaching
  universities: [
    "UBA",
    "UCEMA",
    "ITBA",
    "Universidad de Buenos Aires",
    "Universidad de San Andrés",
    "Universidad de Palermo",
  ],
  universitiesCount: 10, // 6 unique institutions, but teaching reaches 10+
  
  // Bio
  bio: {
    main: "Más de 25 años trabajando en la intersección entre digital commerce, retail media, inteligencia artificial aplicada y transformación organizacional en América Latina.",
    teaching:
      "Docente desde 2000 en universidades como UBA, UCEMA, ITBA, Universidad de Buenos Aires, Universidad de San Andrés y Universidad de Palermo. Speaker en jornadas sobre innovación digital, marketing y emprendedorismo.",
    trajectory:
      "Combina liderazgo en organizaciones de retail, plataformas tecnológicas y proyectos de transformación digital. Desde axeso5 hasta Cencosud, pasando por OLX, Intellignos, VTEX y andabi—cada rol ha sido una oportunidad para profundizar en ecommerce, marketing digital, customer experience y monetización de datos.",
  },
  
  // Professional Experience
  companies: ["axeso5", "Cencosud", "OLX", "Intellignos", "VTEX", "andabi"],
  
  // Home Page - Metrics & Counters (UPDATED - OPCIÓN B+)
  homeMetrics: [
    { end: 25, duration: 2500, label: "años en digital" },
    { end: 500, duration: 3000, label: "% crecimiento Retail Media", plus: "+" }, // KPI #1
    { end: "Top 5", duration: 1500, label: "Retail Media LATAM" },
  ],
  
  // Home Page - Tags
  heroTags: [
    "Retail",
    "Ecommerce",
    "Retail Media",
    "IA aplicada",
    "Innovación",
    "Negocios digitales",
  ],
  
  // About Page - Stats (UPDATED - OPCIÓN B+ con KPIs financieros visibles)
  aboutStats: [
    { value: "25+", label: "Años en digital" },
    { value: "1.000+", label: "Profesionales liderados" },
    { value: "+43%", label: "EBITDA (Cencosud)" }, // KPI #6 - Financial ownership
    { value: "Top 5", label: "Retail Media LATAM" },
  ],
  
  // Expertise Areas (shared across pages)
  expertise: [
    {
      title: "Digital Commerce",
      description:
        "Modelos de crecimiento digital, operación ecommerce y omnicanalidad.",
      shortDescription:
        "Modelos de crecimiento, operación ecommerce, omnicanalidad y capacidades organizacionales para negocios digitales.",
    },
    {
      title: "Retail Media",
      description:
        "Monetización digital, ecosistemas retailer-marca y datos como ingresos.",
      shortDescription:
        "Monetización digital, ecosistemas entre retailers y marcas, y el rol de los datos en nuevas fuentes de ingresos.",
    },
    {
      title: "Inteligencia Artificial",
      description:
        "Casos de uso de IA aplicados a negocio, operación y customer experience.",
      shortDescription:
        "Casos de uso de IA aplicados a negocio, operación y customer experience.",
    },
  ],
  
  // Methodology (About Page)
  methodology: [
    {
      step: "Diagnóstico",
      description:
        "Análisis profundo de contexto, capacidades y oportunidades en tu organización.",
    },
    {
      step: "Priorización",
      description:
        "Identificación de oportunidades de mayor impacto y viabilidad.",
    },
    {
      step: "Roadmap",
      description:
        "Diseño de ruta clara con hitos, recursos y timing definidos.",
    },
    {
      step: "Ejecución",
      description:
        "Acompañamiento a equipos en la transformación de estrategia en resultados reales.",
    },
  ],
  
  // Leadership Experience (DETAILED - OPCIÓN B+)
  leadershipExperience: [
    {
      company: "Cencosud S.A.",
      position: "Gerente Digital Commerce",
      years: "2021–2025",
      teamSize: 1000,
      teamDescription: "profesionales en múltiples divisiones",
      divisiones: ["Jumbo", "Easy", "Disco", "Blaisten", "Vea"],
      scope: "Argentina",
      
      // Key Achievements (Top line)
      achievements: [
        {
          title: "Top 5 Retail Media Networks LATAM",
          source: "eMarketer",
          metric: "Escaló Cencosud Media a posición top 5",
          kpiNumber: 1,
        },
        {
          title: "Crecimiento Retail Media",
          metric: "+500% interanual",
          description: "Nueva línea de negocio con alto margen",
          kpiNumber: 1,
        },
        {
          title: "Crecimiento Digital Commerce Core",
          metric: "+200% interanual",
          description: "Ventas netas del negocio central",
          kpiNumber: 2,
        },
      ],
      
      // Financial Impact
      financial: {
        ebitda: "+43%",
        ebitdaOwnership: "Propietario del Objetivo EBITDA Directo con 30% en OKRs",
        description: "Orientación al resultado final (bottom-line) y gestión de costos",
        kpiNumber: 6,
      },
      
      // Operational KPIs
      operationalKpis: [
        {
          title: "Tasa de Conversión + AI",
          metric: "+1 punto porcentual",
          description: "Mejora mediante implementación de Inteligencia Artificial",
          impact: "Traducido en millones en top line",
          kpiNumber: 3,
        },
        {
          title: "Tasa de Entrega Puntual (Fill Rate)",
          metric: "+100% de objetivos anuales superados",
          description: "Excelencia en logística y cadena de suministro",
          kpiNumber: 4,
        },
        {
          title: "Volumen de Pedidos Gestionados",
          metric: "800.000+ pedidos anuales",
          description: "Gestión de capacidad y escalabilidad",
          kpiNumber: 8,
        },
        {
          title: "Market Share",
          metric: "+0.4 puntos porcentuales",
          description: "Ganancia de terreno a la competencia",
          kpiNumber: 5,
        },
      ],
      
      // Customer Experience
      customerExperience: {
        nps: "Cuartil Superior de la industria minorista",
        csat: "Cuartil Superior de la industria minorista",
        description: "Fidelización y valor de vida del cliente (CLV)",
        kpiNumber: 9,
      },
      
      // Technology & Innovation
      technology: {
        title: "Transformación Tecnológica — Comercio Unificado",
        description: "Dirección de proyectos de migración a Composable Commerce",
        metric: ">50% de la arquitectura tecnológica impactada",
        impact: "Redefinición de arquitectura para experiencia unificada omnicanal",
        kpiNumber: 7,
      },
      
      // Team & Organization
      organization: {
        title: "Rediseño de Estructura Organizacional",
        alignment: "+90% de alineación entre roles y objetivos estratégicos",
        description: "Gestión del talento y arquitectura organizativa",
        kpiNumber: 10,
      },
      
      // Partnerships
      partners: ["Google", "Meta", "Amazon", "Microsoft"],
      
      featured: true,
    },
    {
      company: "VTEX",
      position: "Director Customer Experience",
      years: "2020–2021",
      scope: "Argentina, Paraguay, Uruguay, Bolivia",
      countries: 4,
    },
    {
      company: "andabi",
      position: "Founder & CEO",
      years: "2016–2021",
      description: "Analytics & Digital Business Growth",
      type: "founder",
    },
  ],
  
  // Key Differentiators Array (para badges/highlights)
  differentiators: [
    {
      category: "Educational",
      badge: "MIT CDO 2026",
      priority: 1,
    },
    {
      category: "Leadership",
      badge: "1.000+ team",
      value: "1.000+",
      priority: 2,
    },
    {
      category: "Achievement",
      badge: "Top 5 Retail Media LATAM",
      source: "eMarketer",
      priority: 3,
    },
    {
      category: "Financial",
      badge: "+43% EBITDA",
      priority: 4,
    },
    {
      category: "Revenue",
      badge: "+500% Retail Media",
      priority: 5,
    },
    {
      category: "Commerce",
      badge: "+200% Digital Commerce",
      priority: 6,
    },
  ],
  
  // Social & Links
  social: {
    linkedin: "https://linkedin.com/in/nicolasvalenzuela",
    twitter: "https://twitter.com/nicolasval",
    calendly: "https://calendly.com/nicolasvalenzuela",
    email: "hola@nicolas.com.ar",
  },
  
  // Geographic Presence
  servedCountries: ["Argentina", "Mexico", "Brazil", "Colombia", "Chile"],
};

/**
 * Helper functions
 */

export function getExpertiseByTitle(title: string) {
  return profileData.expertise.find((e) => e.title === title);
}

export function getUniversitiesAsString(): string {
  return profileData.universities.join(", ");
}

export function getCompaniesAsString(): string {
  return profileData.companies.join(", ");
}
