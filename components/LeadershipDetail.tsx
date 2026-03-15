"use client";

import { useState } from "react";
import { profileData } from "@/lib/data/profile";

export default function LeadershipDetail() {
  // Get all featured experiences (Cencosud and andabi)
  const featuredExperiences = profileData.leadershipExperience.filter((exp) => exp.featured);
  
  if (featuredExperiences.length === 0) {
    return null;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const current = featuredExperiences[activeIndex];

  // Render KPIs based on experience type
  const renderKpis = () => {
    if (current.company === "Cencosud S.A.") {
      return <CencosudKpis exp={current} />;
    } else if (current.company === "andabi") {
      return <AndabiKpis exp={current} />;
    }
    return null;
  };

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Tab Navigation */}
        {featuredExperiences.length > 1 && (
          <div className="mb-12 flex gap-3 border-b border-gray-200 pb-4">
            {featuredExperiences.map((exp, idx) => (
              <button
                key={exp.company}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 font-medium text-sm transition-colors ${
                  activeIndex === idx
                    ? "text-ink border-b-2 border-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>
        )}

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-wider text-muted uppercase">
            ● {current.company === "Cencosud S.A." ? "Liderazgo Operacional" : "Liderazgo Empresarial"}
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight font-serif text-ink">
            {current.company}
          </h2>
          <div className="mt-4 flex flex-wrap gap-4 items-center">
            <p className="text-base md:text-lg text-muted">{current.position}</p>
            <span className="text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
              {current.years}
            </span>
            {current.teamSize && (
              <span className="text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                {current.teamSize}+ {current.teamDescription}
              </span>
            )}
          </div>
        </div>

        {/* Overview Cards */}
        <OverviewCards exp={current} />

        {/* KPIs Section */}
        {renderKpis()}

        {/* Partnerships (if available) */}
        {current.partners && current.partners.length > 0 && (
          <div className="pt-16 border-t border-gray-200">
            <h3 className="text-xl font-bold font-serif text-ink mb-6">Partnerships Estratégicos</h3>
            <div className="flex flex-wrap gap-3">
              {current.partners.map((partner: string) => (
                <span
                  key={partner}
                  className="px-4 py-2 rounded-full border-2 border-gray-300 bg-white text-gray-800 font-medium text-sm hover:bg-gray-50 transition-colors"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ============================================================================
// OVERVIEW CARDS COMPONENT
// ============================================================================

function OverviewCards({ exp }: { exp: (typeof profileData.leadershipExperience)[0] }) {
  if (exp.company === "Cencosud S.A.") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 pb-16 border-b border-gray-200">
        {/* Team & Scope */}
        <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">👥 Equipo</p>
          <p className="text-3xl font-bold text-emerald-900 mt-3">{exp.teamSize}+</p>
          <p className="text-sm text-emerald-700 mt-2">{exp.teamDescription}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {exp.divisiones?.map((div: string) => (
              <span key={div} className="text-xs px-2 py-1 rounded bg-white text-emerald-700 font-medium">
                {div}
              </span>
            ))}
          </div>
        </div>

        {/* Financial Impact */}
        <div className="p-6 rounded-lg bg-gradient-to-br from-rose-50 to-rose-100/50 border border-rose-200">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">💰 Impacto Financiero</p>
          <p className="text-3xl font-bold text-rose-900 mt-3">{exp.financial?.ebitda}</p>
          <p className="text-sm text-rose-700 mt-2">EBITDA</p>
          <p className="text-xs text-rose-600 mt-3 leading-relaxed">
            {exp.financial?.ebitdaOwnership}
          </p>
        </div>

        {/* Key Achievements */}
        <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">🎯 Logros Clave</p>
          {exp.achievements?.slice(0, 2).map((ach: any, idx: number) => (
            <div key={idx} className="mt-3">
              <p className="text-sm font-semibold text-blue-900">{ach.title}</p>
              <p className="text-lg font-bold text-blue-700 mt-1">{ach.metric}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (exp.company === "andabi") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 pb-16 border-b border-gray-200">
        {/* Team */}
        <div className="p-6 rounded-lg bg-gradient-to-br from-violet-50 to-violet-100/50 border border-violet-200">
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-700">👥 Equipo</p>
          <p className="text-3xl font-bold text-violet-900 mt-3">{exp.teamSize}+</p>
          <p className="text-sm text-violet-700 mt-2">{exp.teamDescription}</p>
        </div>

        {/* Clients */}
        <div className="p-6 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100/50 border border-indigo-200">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">🏢 Portafolio</p>
          <p className="text-2xl font-bold text-indigo-900 mt-3">10+</p>
          <p className="text-sm text-indigo-700 mt-2">Clientes Fortune 500</p>
        </div>

        {/* Events/Leadership */}
        <div className="p-6 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">🎯 Liderazgo</p>
          <p className="text-2xl font-bold text-amber-900 mt-3">4</p>
          <p className="text-sm text-amber-700 mt-2">Ediciones CACE HotSale</p>
        </div>
      </div>
    );
  }
  return null;
}

// ============================================================================
// CENCOSUD KPIs (10 cards with colors)
// ============================================================================

function CencosudKpis({ exp }: { exp: (typeof profileData.leadershipExperience)[0] }) {
  const kpiColors = [
    { bg: "from-amber-50 to-amber-100/30", border: "border-amber-200", text: "text-amber-700", emoji: "📈" },
    { bg: "from-amber-50 to-amber-100/30", border: "border-amber-200", text: "text-amber-700", emoji: "💹" },
    { bg: "from-purple-50 to-purple-100/30", border: "border-purple-200", text: "text-purple-700", emoji: "🤖" },
    { bg: "from-blue-50 to-blue-100/30", border: "border-blue-200", text: "text-blue-700", emoji: "📦" },
    { bg: "from-green-50 to-green-100/30", border: "border-green-200", text: "text-green-700", emoji: "🎯" },
    { bg: "from-rose-50 to-rose-100/30", border: "border-rose-200", text: "text-rose-700", emoji: "💰" },
    { bg: "from-indigo-50 to-indigo-100/30", border: "border-indigo-200", text: "text-indigo-700", emoji: "🏗️" },
    { bg: "from-cyan-50 to-cyan-100/30", border: "border-cyan-200", text: "text-cyan-700", emoji: "📊" },
    { bg: "from-teal-50 to-teal-100/30", border: "border-teal-200", text: "text-teal-700", emoji: "⭐" },
    { bg: "from-orange-50 to-orange-100/30", border: "border-orange-200", text: "text-orange-700", emoji: "👥" },
  ];

  const kpis = [
    { title: "+500% Retail Media", desc: "Crecimiento interanual. Nueva línea de negocio con alto margen." },
    { title: "+200% Digital Commerce", desc: "Crecimiento del negocio central. Ventas netas impulsadas." },
    { title: "+1pp Conversión (AI)", desc: "Mejora mediante IA. Traducido en millones en top line." },
    { title: "+100% Fill Rate", desc: "Excelencia en logística. Objetivos anuales superados." },
    { title: "+0.4pp Market Share", desc: "Ganancia de terreno a competencia en retail." },
    { title: "+43% EBITDA", desc: "Ownership directo. 30% en OKRs. Orientación al resultado." },
    { title: ">50% Composable Commerce", desc: "Arquitectura tecnológica migrada. Omnicanal." },
    { title: "800K+ Pedidos Anuales", desc: "Gestión de capacidad y escalabilidad operativa." },
    { title: "Cuartil Superior NPS/CSAT", desc: "Fidelización. Industria minorista. CLV focus." },
    { title: "+90% Org Alignment", desc: "Roles alineados con objetivos. Talento & arquitectura." },
  ];

  return (
    <div className="mb-16">
      <h3 className="text-2xl md:text-3xl font-bold font-serif text-ink mb-12">
        10 KPIs Clave
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {kpis.map((kpi, idx) => {
          const color = kpiColors[idx];
          return (
            <div
              key={idx}
              className={`p-6 rounded-lg border-2 ${color.border} bg-gradient-to-br ${color.bg}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{color.emoji}</span>
                <div className="flex-1">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${color.text}`}>
                    KPI #{idx + 1}
                  </p>
                  <h4 className="text-lg font-bold mt-2" style={{ color: color.text.split("-")[2] }}>
                    {kpi.title}
                  </h4>
                  <p className={`text-sm ${color.text} mt-2`}>{kpi.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// ANDABI KPIs (10 cards - Consultancy focused)
// ============================================================================

function AndabiKpis({ exp }: { exp: (typeof profileData.leadershipExperience)[0] }) {
  const kpiColors = [
    { bg: "from-amber-50 to-amber-100/30", border: "border-amber-200", text: "text-amber-700", emoji: "🏆" },
    { bg: "from-emerald-50 to-emerald-100/30", border: "border-emerald-200", text: "text-emerald-700", emoji: "📈" },
    { bg: "from-blue-50 to-blue-100/30", border: "border-blue-200", text: "text-blue-700", emoji: "🏢" },
    { bg: "from-purple-50 to-purple-100/30", border: "border-purple-200", text: "text-purple-700", emoji: "🎯" },
    { bg: "from-pink-50 to-pink-100/30", border: "border-pink-200", text: "text-pink-700", emoji: "🤝" },
    { bg: "from-indigo-50 to-indigo-100/30", border: "border-indigo-200", text: "text-indigo-700", emoji: "📊" },
    { bg: "from-cyan-50 to-cyan-100/30", border: "border-cyan-200", text: "text-cyan-700", emoji: "⚙️" },
    { bg: "from-orange-50 to-orange-100/30", border: "border-orange-200", text: "text-orange-700", emoji: "🎓" },
    { bg: "from-teal-50 to-teal-100/30", border: "border-teal-200", text: "text-teal-700", emoji: "🔗" },
    { bg: "from-rose-50 to-rose-100/30", border: "border-rose-200", text: "text-rose-700", emoji: "🔐" },
  ];

  const kpis = [
    { title: "Official Agency CACE", metric: "4 Ediciones Consecutivas", desc: "Liderazgo en arquitectura de medición para los eventos de e-commerce más grandes de Argentina." },
    { title: "Sustained Business", metric: "+5 Años Operación", desc: "Rentabilidad sostenida en consultoría de nicho. Visión empresarial sólida." },
    { title: "Strategic Clients", metric: "10+ Fortune 500", desc: "Gestión de proyectos para líderes en Banca, Retail y Moda (Walmart, Mastercard, L'Oréal)." },
    { title: "Projects Executed", metric: "+15 Proyectos", desc: "Diagnóstico, diseño e implementación de arquitecturas de datos (BI, GTM, Auditoría, Performance)." },
    { title: "Strategic Partnerships", metric: "+3 Partnerships", desc: "Soluciones integrales end-to-end con RAPP, CookingMetrics, Google Partners." },
    { title: "Data Governance", metric: "100% Trazabilidad", desc: "Rigor en arquitectura analítica (GA, GTM) con integridad de información crítica." },
    { title: "Process Efficiency", metric: "Reducción 25%", desc: "Documentación y estandarización de procesos para entrega rápida y consistente." },
    { title: "Knowledge Transfer", metric: "+5 Programas", desc: "Especialización en Analytics/BI a nivel universitario (CapacitarteUBA) e in-company." },
    { title: "Strategic Services", metric: "4 Pilares", desc: "Estrategia, Performance, SEO, BI — Perfil integral 360°." },
    { title: "100% NDA Compliance", metric: "Confidencialidad", desc: "Rigor profesional y ética en manejo de datos sensibles de grandes corporaciones." },
  ];

  return (
    <div className="mb-16">
      <h3 className="text-2xl md:text-3xl font-bold font-serif text-ink mb-12">
        10 Pilares de Liderazgo Empresarial
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {kpis.map((kpi, idx) => {
          const color = kpiColors[idx];
          return (
            <div
              key={idx}
              className={`p-6 rounded-lg border-2 ${color.border} bg-gradient-to-br ${color.bg}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{color.emoji}</span>
                <div className="flex-1">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${color.text}`}>
                    KPI #{idx + 1}
                  </p>
                  <h4 className="text-lg font-bold mt-2 text-gray-900">{kpi.title}</h4>
                  <p className={`text-sm font-semibold ${color.text} mt-1`}>{kpi.metric}</p>
                  <p className={`text-sm ${color.text} mt-2`}>{kpi.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
