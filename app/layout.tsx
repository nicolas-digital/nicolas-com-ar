import "./globals.css";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import { lora, dmSans } from "@/lib/fonts";
import { JsonLd } from "@/app/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nicolas.com.ar"),

  title: {
    default:
      "Prof. Nicolás Valenzuela — Digital Commerce, Retail Media & AI | Buenos Aires",
    template: "%s | Prof. Nicolás Valenzuela",
  },

  description:
    "Prof. Nicolás Valenzuela, desde Buenos Aires, Argentina. Estrategia digital, ecommerce, retail media e inteligencia artificial aplicada para organizaciones en América Latina.",

  keywords: [
    "Nicolás Valenzuela",
    "Prof Nicolas Valenzuela",
    "Buenos Aires Argentina",
    "digital commerce latinoamerica",
    "retail media latinoamerica",
    "ecommerce estrategia",
    "inteligencia artificial negocios",
    "transformacion digital retail",
  ],

  authors: [
    {
      name: "Prof. Nicolás Valenzuela",
      url: "https://www.nicolas.com.ar",
    },
  ],

  creator: "Prof. Nicolás Valenzuela",
  publisher: "Prof. Nicolás Valenzuela",

  openGraph: {
    title:
      "Prof. Nicolás Valenzuela — Digital Commerce, Retail Media & AI",
    description:
      "Perspectivas sobre ecommerce, retail media, inteligencia artificial y transformación digital en América Latina.",
    url: "https://www.nicolas.com.ar",
    siteName: "Nicolás Valenzuela",
    locale: "es_AR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nicolás Valenzuela",
    alternateName: "Prof. Nicolás Valenzuela",
    jobTitle: "Digital Transformation Advisor | Board Member",
    description:
      "Advisor en transformación digital, retail media e IA aplicada con +25 años de experiencia en Latinoamérica. MIT Chief Digital Officer Program 2026. Experto en digital commerce, retail strategy y operaciones digitales. +1.000 profesionales liderados. Top 5 Retail Media LATAM.",
    url: "https://www.nicolas.com.ar",
    image: "https://www.nicolas.com.ar/images/nicolas-valenzuela.jpg",
    email: "nicolas@nicolas.com.ar",
    telephone: "+54",
    sameAs: [
      "https://www.linkedin.com/in/nicolasvalenzuela",
      "https://twitter.com/nicolasval",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    areaServed: [
      { "@type": "Country", "name": "Argentina" },
      { "@type": "Country", "name": "Mexico" },
      { "@type": "Country", "name": "Brazil" },
      { "@type": "Country", "name": "Colombia" },
      { "@type": "Country", "name": "Chile" },
    ],
    knowsAbout: [
      "Digital Commerce",
      "Retail Media",
      "IA Agentica",
      "Inteligencia Artificial Aplicada",
      "Retail Strategy",
      "E-commerce",
      "Omnichannel",
      "Artificial Intelligence",
      "Digital Transformation",
      "Retail Operations",
      "Supply Chain",
      "Commerce Platforms",
      "Data-driven Decision Making",
      "Transformación Digital Latinoamérica",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Certificate",
        name: "Chief Digital Officer",
        issuedBy: {
          "@type": "EducationalOrganization",
          name: "MIT Professional Education",
        },
        year: 2026,
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "MBA",
        name: "Master in Business Administration",
        issuedBy: {
          "@type": "EducationalOrganization",
          name: "Universidad Católica Argentina",
        },
        year: 2016,
      },
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "MIT Professional Education",
        description: "Chief Digital Officer Program - 2026",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Universidad Católica Argentina",
        description: "MBA - 2014-2016",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Universidad de Buenos Aires",
        description: "Docencia desde 2000",
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: "Cámara Argentina de Comercio Electrónico (CACE)",
      description: "Board of Directors — 8 años",
      url: "https://www.cace.org.ar",
    },
    jobExperience: [
      {
        "@type": "EmployeeRole",
        name: "Gerente Digital Commerce",
        employer: "Cencosud S.A.",
        startDate: "2021-01-01",
        endDate: "2025-12-31",
        description: "Liderazgo de transformación digital en retail con +1.000 profesionales. Resultados: Retail Media a Top 5 LATAM (+500% crecimiento anual), Digital Commerce +200% anual, +43% EBITDA, +1 punto porcentual conversión vía IA.",
      },
      {
        "@type": "EmployeeRole",
        name: "Founder & CEO",
        employer: "andabi",
        startDate: "2016-01-01",
        endDate: "2021-12-31",
        description: "BI/Analytics Consultancy. Agencia oficial de medición para CyberMonday y HotSale (4 ediciones). 10+ clientes corporativos Fortune 500.",
      },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Digital Transformation Advisor",
      occupationLocation: {
        "@type": "Country",
        name: "Argentina",
      },
    },
    award: [
      {
        "@type": "Award",
        name: "Premio Retail Digital",
        description: "Reconocimiento por trayectoria y aportes significativos a la transformación tecnológica dentro de la industria minorista. Integración de estrategias omnicanal y reimaginación del retail uniendo mundo físico con digital.",
        awardDate: "2025-05",
        awarding: {
          "@type": "Organization",
          name: "Web Retail",
          url: "https://www.webretail.com.ar",
          description: "Comunidad de expertos en transformación digital del retail",
        },
        event: "Retail Day 2025",
        eventDate: "2025-05",
        eventLocation: "Buenos Aires, Argentina",
      },
      {
        "@type": "Thing",
        name: "Top 5 Retail Media Networks LATAM",
        source: "eMarketer",
        description: "Escaló Cencosud Media a posición top 5 en Latinoamérica",
      },
      {
        "@type": "Thing",
        name: "+1.000 Profesionales Liderados",
        description: "Liderazgo directo de equipos en múltiples divisiones de Cencosud",
      },
    ],
  };

  return (
    <html lang="es" className={`${lora.variable} ${dmSans.variable}`}>
      <JsonLd data={personSchema} />
      <head>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
      </head>
      <body className="min-h-screen bg-cream text-ink antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}
