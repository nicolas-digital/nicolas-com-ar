import { pageMetadata, socialPages } from "@/lib/social";
import "./globals.css";
import type { Metadata } from "next";
import Analytics from "@/components/tracking/Analytics";

import { lora, dmSans } from "@/lib/fonts";
import { JsonLd } from "@/app/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  ...pageMetadata(socialPages.home),
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "wEfiIJYCkKLxjhBgQOtTFObtQT3_11lrELp_iHFdhns",
    other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION || "8B125DBC4AA09A2D3F9338FBB1C3C9F2" },
  },
  metadataBase: new URL("https://www.nicolas.com.ar"),

  title: {
    default:
      "Nicolás Valenzuela — Estrategia, datos e IA",
    template: "%s | Nicolás Valenzuela",
  },


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
    "@id": "https://www.nicolas.com.ar/#person",
    name: "Nicolás Valenzuela",
    alternateName: "Prof. Nicolás Valenzuela",
    jobTitle: "Digital Transformation Advisor | Board Member",
    description:
      "Advisor en transformación digital, retail media e IA aplicada con +25 años de experiencia en Latinoamérica. Programa en Alta Dirección: Chief Digital Officer de MIT Professional Education, completado el 2 de octubre de 2026. Experto en digital commerce, retail strategy y operaciones digitales. Gestión de Digital Commerce y Retail Media basada en P&L.",
    url: "https://www.nicolas.com.ar",
    image: "https://www.nicolas.com.ar/images/mit/nicolas-campus.webp",
    email: "nicolas@nicolas.com.ar",
    sameAs: [
      "https://www.linkedin.com/in/nvalenzuela/",
      "https://twitter.com/nicolasval",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
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
        name: "Programa en Alta Dirección: Chief Digital Officer",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "MIT Professional Education",
        },
        description: "Completado el 2 de octubre de 2026; 525 horas de formación.",
      },
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "MIT Professional Education",
        description: "Chief Digital Officer Program - 2026",
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: "Cámara Argentina de Comercio Electrónico (CACE)",
      description: "Board of Directors — 8 años",
      url: "https://www.cace.org.ar",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Digital Transformation Advisor",
      occupationLocation: {
        "@type": "Country",
        name: "Argentina",
      },
    },
    award: "Premio Retail Digital — Retail Day 2025, Web Retail",
  };

  return (
    <html lang="es" className={`${lora.variable} ${dmSans.variable}`}>

      <body className="min-h-screen bg-cream text-ink antialiased">
        <JsonLd data={personSchema} />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        <Analytics gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      </body>
    </html>
  );
}
