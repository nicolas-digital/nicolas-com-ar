import "./globals.css";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GTMScript from "@/components/GTMScript";

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
    name: "Prof. Nicolás Valenzuela",
    alternateName: ["Nicolás Valenzuela"],
    jobTitle: "Strategic Advisor",
    description:
      "Especialista en digital commerce, retail media e inteligencia artificial aplicada en América Latina.",
    url: "https://www.nicolas.com.ar",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "Argentina",
    },
    sameAs: [
      "https://www.linkedin.com/in/REEMPLAZAR-CON-TU-LINKEDIN",
    ],
    knowsAbout: [
      "Digital Commerce",
      "Retail Media",
      "Ecommerce Strategy",
      "Artificial Intelligence",
      "Customer Experience",
      "Digital Transformation",
    ],
  };

  return (
    <html lang="es">
      <head>
        <GTMScript />
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
