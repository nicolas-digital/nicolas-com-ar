import "./globals.css";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import { lora, dmSans } from "@/lib/fonts";
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
      "Advisor en transformación digital, retail media e IA aplicada con +20 años de experiencia en Latinoamérica. MIT Chief Digital Officer Program 2025. Board of Directors CACE.",
    url: "https://www.nicolas.com.ar",
    image: "https://www.nicolas.com.ar/images/nicolas-valenzuela.jpg",
    email: "nicolas@nicolas.com.ar",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "MIT Professional Education",
        description: "Chief Digital Officer Program",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Universidad Católica Argentina",
        description: "MBA",
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: "Cámara Argentina de Comercio Electrónico (CACE)",
      description: "Board of Directors — 8 años",
    },
    worksFor: {
      "@type": "Organization",
      name: "Hylea",
      url: "https://www.hylea.systems",
    },
    knowsAbout: [
      "Retail Media",
      "Digital Commerce",
      "Inteligencia Artificial aplicada a negocios",
      "Transformación Digital",
      "Ecommerce Latinoamérica",
      "Omnicanalidad",
      "Data-driven decision making",
    ],
    sameAs: ["https://www.linkedin.com/in/nvalenzuela/"],
    hasOccupation: {
      "@type": "Occupation",
      name: "Digital Transformation Advisor",
      occupationLocation: {
        "@type": "Country",
        name: "Argentina",
      },
    },
  };

  return (
    <html lang="es" className={`${lora.variable} ${dmSans.variable}`}>
      <head>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
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
