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
    { end: 25, duration: 2500, label: "años en digital", plus: "+" },
    { end: "P&L", duration: 0, label: "gestión de negocios digitales" }, // KPI #1
    { end: "Retail Media", duration: 0, label: "construcción de negocio" },
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
    { value: "Equipos", label: "Liderazgo multidisciplinario" },
    { value: "P&L", label: "Gestión económica" }, // KPI #6 - Financial ownership
    { value: "Retail Media", label: "Unidad de negocio" },
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
      years: "Octubre 2021–abril 2025",
      teamSize: undefined,
      teamDescription: "negocio, operaciones, tecnología y datos",
      divisiones: ["Jumbo", "Easy", "Disco", "Blaisten", "Vea"],
      scope: "Argentina",
      
      achievements: [
        { title: "Cencosud Media", metric: "Unidad de Retail Media", description: "Estado de resultados propio, presupuesto y seguimiento mensual" },
        { title: "Digital Commerce", metric: "Gestión multimarcas", description: "Prioridades comerciales y operativas compartidas" },
      ],
      financial: {
        ebitda: "P&L",
        ebitdaOwnership: "Objetivos de ingresos y EBITDA, planificación de recursos y seguimiento de resultados",
        description: "Gestión económica del negocio digital",
      },
      // Partnerships
      partners: ["Google", "Meta", "Amazon", "Microsoft"],
      
      featured: true,
    },
    {
      company: "VTEX",
      position: "Director Customer Success",
      years: "Marzo 2020–marzo 2021",
      scope: "Argentina, Paraguay, Uruguay, Bolivia",
      countries: 4,
      featured: false,
    },
    {
      company: "VTEX",
      position: "Director Customer Experience",
      years: "Marzo–octubre 2021",
      scope: "Argentina, Paraguay, Uruguay, Bolivia",
      countries: 4,
      featured: false,
    },
    {
      company: "andabi",
      position: "Founder & CEO",
      years: "2016–2021",
      teamSize: 8,
      teamDescription: "equipo especializado en Analytics y Strategy",
      scope: "Argentina (atendiendo clientes en toda LATAM)",
      description: "BI/Analytics Consultancy & Digital Strategy",
      type: "founder",
      featured: true,
      
      // Key Achievements
      achievements: [
        {
          title: "Official BI/Analytics Agency for CACE HotSale & Cybermonday",
          metric: "4 Ediciones Consecutivas (2016–2020)",
          description: "Liderazgo en arquitetura de medición para los eventos de ecommerce más grandes de Argentina",
          impact: "Benchmark para más de 1.000 marcas",
          kpiNumber: 1,
        },
        {
          title: "Sustained Business Trajectory",
          metric: "+5 Años de Operación Continua",
          description: "Rentabilidad sostenida en consultoría de nicho",
          impact: "Visión empresarial sólida y ejecución",
          kpiNumber: 2,
        },
        {
          title: "Strategic Client Portfolio",
          metric: "10+ Clientes Corporativos (Fortune 500)",
          description: "Gestión de proyectos para líderes de industria en Banca, Retail y Moda",
          clients: ["Walmart", "Mastercard", "L'Oréal", "BBVA", "Globant"],
          kpiNumber: 3,
        },
      ],
      
      // Project Execution
      projectExecution: {
        title: "Volumen de Proyectos Ejecutados",
        metric: "+15 Proyectos Especializados",
        categories: ["Auditoría", "BI", "GTM", "Estrategia de Performance"],
        description: "Diagnóstico, diseño e implementación de arquitecturas de datos",
        kpiNumber: 4,
      },
      
      // Strategic Partnerships
      partnerships: {
        title: "Consolidación de Alianzas Estratégicas",
        metric: "+3 Partnerships de Alto Valor",
        partners: ["RAPP Argentina", "CookingMetrics", "Google Partners"],
        description: "Soluciones integrales end-to-end",
        kpiNumber: 5,
      },
      
      // Data Governance
      dataGovernance: {
        title: "Rigor en Arquitectura Analítica",
        metric: "100% de Trazabilidad en Calidad del Dato",
        technologies: ["Google Analytics", "GTM", "Data Warehousing"],
        description: "Data Governance integral para todos los proyectos",
        specialization: "Integridad y fiabilidad de información crítica",
        kpiNumber: 6,
      },
      
      // Process Efficiency
      processEfficiency: {
        title: "Eficiencia en Definición de Procesos",
        metric: "Reducción del 25% en Onboarding",
        description: "Documentación y estandarización de procesos BI/Analytics",
        impact: "Entrega más rápida y consistente",
        kpiNumber: 7,
      },
      
      // Knowledge Transfer
      knowledgeTransfer: {
        title: "Impacto en Transferencia de Conocimiento",
        metric: "+5 Programas de Capacitación",
        venues: ["CapacitarteUBA", "In-company"],
        description: "Especialización en Analytics y BI a nivel universitario",
        impact: "Multiplicar impacto más allá de implementación técnica",
        kpiNumber: 8,
      },
      
      // Strategic Services Integration
      strategicServices: {
        title: "Integración de Servicios Estratégicos",
        metric: "4 Pilares Consistentes",
        pillars: ["Estrategia", "Performance", "SEO", "Business Intelligence"],
        description: "Perfil integral 360° con alineación perfecta",
        kpiNumber: 9,
      },
      
      // Compliance & Confidentiality
      compliance: {
        title: "Experiencia en Entornos de Alta Confidencialidad",
        metric: "100% de Cumplimiento de NDAs",
        description: "Rigor profesional y ética en datos sensibles de grandes corporaciones",
        kpiNumber: 10,
      },
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
      badge: "Liderazgo multidisciplinario",
      value: "Equipos",
      priority: 2,
    },
    {
      category: "Achievement",
      badge: "Construcción de Retail Media",
      priority: 3,
    },
    {
      category: "Financial",
      badge: "Gestión basada en P&L",
      priority: 4,
    },
    {
      category: "Revenue",
      badge: "Retail Media",
      priority: 5,
    },
    {
      category: "Commerce",
      badge: "Digital Commerce multimarcas",
      priority: 6,
    },
  ],
  
  // Key Awards & Recognition
  awards: [
    {
      year: 2025,
      month: "Mayo",
      title: "Premio Retail Digital",
      organization: "Web Retail",
      organizationUrl: "https://www.webretail.com.ar",
      event: "Retail Day 2025",
      location: "Buenos Aires, Argentina",
      description: "Reconocimiento por trayectoria y aportes significativos a la transformación tecnológica dentro de la industria minorista",
      highlights: [
        "Integración de estrategias omnicanal",
        "Reimaginación del retail (físico + digital)",
        "Mejora de experiencia del cliente",
      ],
      category: "Industry Recognition",
      highlight: true,
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
