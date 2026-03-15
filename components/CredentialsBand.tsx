"use client";

import { useState } from "react";

interface Credential {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  color: string;
}

const credentials: Credential[] = [
  {
    id: "mit",
    title: "MIT Chief Digital Officer",
    subtitle: "2026",
    icon: "🎓",
    description: "MIT Professional Education Program — Transformación digital avanzada",
    color: "from-blue-50 to-blue-100",
  },
  {
    id: "mba",
    title: "MBA",
    subtitle: "2016",
    icon: "📚",
    description: "Universidad Católica Argentina — Negocios y Estrategia",
    color: "from-amber-50 to-amber-100",
  },
  {
    id: "cace",
    title: "CACE Board",
    subtitle: "8 años",
    icon: "🏆",
    description: "Board of Directors — Liderazgo en retail y ecommerce Latinoamericano",
    color: "from-emerald-50 to-emerald-100",
  },
  {
    id: "andabi",
    title: "Fundador",
    subtitle: "andabi",
    icon: "🚀",
    description: "Analytics & Digital Business Growth — Consultora de transformación (2016-2021)",
    color: "from-purple-50 to-purple-100",
  },
];

export default function CredentialsBand() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="border-b border-gray-200 py-8 md:py-12" style={{ backgroundColor: "#EEE8DE" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {credentials.map((cred) => (
            <div
              key={cred.id}
              className={`relative rounded-lg border-2 border-gray-200 p-4 cursor-pointer transition-all duration-300 ${
                expandedId === cred.id
                  ? `bg-gradient-to-br ${cred.color} border-forest shadow-lg scale-105`
                  : "bg-white hover:border-forest/50 hover:shadow-md"
              }`}
              onClick={() => setExpandedId(expandedId === cred.id ? null : cred.id)}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{cred.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-ink leading-tight">{cred.title}</h3>
                  <p className="text-xs text-muted mt-1">{cred.subtitle}</p>
                </div>
              </div>

              {expandedId === cred.id && (
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-xs text-ink leading-relaxed">{cred.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {expandedId && (
          <p className="text-xs text-center mt-6" style={{ color: "#8B7355" }}>
            Click en cualquier card para ver más detalles
          </p>
        )}
      </div>
    </section>
  );
}
