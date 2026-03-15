"use client";

import { useState } from "react";
import { profileData } from "@/lib/data/profile";

interface Credential {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  color: string;
}

// Map differentiators to credential UI
const getCredentialIcon = (category: string): string => {
  const iconMap: Record<string, string> = {
    Educational: "🎓",
    Leadership: "👥",
    Achievement: "🏆",
    Financial: "📈",
    Revenue: "💰",
    Commerce: "🛍️",
  };
  return iconMap[category] || "⭐";
};

const getCredentialColor = (priority: number): string => {
  const colorMap: Record<number, string> = {
    1: "from-blue-50 to-blue-100",
    2: "from-emerald-50 to-emerald-100",
    3: "from-amber-50 to-amber-100",
    4: "from-rose-50 to-rose-100",
    5: "from-purple-50 to-purple-100",
    6: "from-indigo-50 to-indigo-100",
  };
  return colorMap[priority] || "from-gray-50 to-gray-100";
};

export default function CredentialsBand() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // Convert differentiators to credentials format
  const credentials: Credential[] = profileData.differentiators.map((diff, idx) => ({
    id: `diff-${idx}`,
    title: diff.badge,
    subtitle: diff.category,
    icon: getCredentialIcon(diff.category),
    description: `${diff.category} — ${diff.badge}. Máxima prioridad en el perfil profesional.`,
    color: getCredentialColor(diff.priority),
  }));

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
