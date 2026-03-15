"use client";

import { profileData } from "@/lib/data/profile";

export default function LeadershipDetail() {
  const cencosud = profileData.leadershipExperience[0]; // Cencosud es el featured
  
  if (!cencosud || !cencosud.featured) {
    return null;
  }

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-wider" style={{ color: "#8B7355" }}>
            ● LIDERAZGO OPERACIONAL
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight font-serif text-ink">
            {cencosud.company}
          </h2>
          <div className="mt-4 flex flex-wrap gap-4 items-center">
            <p className="text-base md:text-lg text-muted">{cencosud.position}</p>
            <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "#E8F0ED", color: "#1A3A2A" }}>
              {cencosud.years}
            </span>
            <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "#FBF9F3", color: "#8B6040" }}>
              {cencosud.teamSize}+ {cencosud.teamDescription}
            </span>
          </div>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 pb-16 border-b border-gray-200">
          {/* Team & Scope */}
          <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">👥 Equipo</p>
            <p className="text-3xl font-bold text-emerald-900 mt-3">{cencosud.teamSize}+</p>
            <p className="text-sm text-emerald-700 mt-2">{cencosud.teamDescription}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cencosud.divisiones?.map((div) => (
                <span key={div} className="text-xs px-2 py-1 rounded bg-white text-emerald-700 font-medium">
                  {div}
                </span>
              ))}
            </div>
          </div>

          {/* Financial Impact */}
          <div className="p-6 rounded-lg bg-gradient-to-br from-rose-50 to-rose-100/50 border border-rose-200">
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">💰 Impacto Financiero</p>
            <p className="text-3xl font-bold text-rose-900 mt-3">{cencosud.financial?.ebitda}</p>
            <p className="text-sm text-rose-700 mt-2">EBITDA</p>
            <p className="text-xs text-rose-600 mt-3 leading-relaxed">
              {cencosud.financial?.ebitdaOwnership}
            </p>
          </div>

          {/* Key Achievements */}
          <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">🎯 Logros Clave</p>
            {cencosud.achievements?.slice(0, 2).map((ach, idx) => (
              <div key={idx} className="mt-3">
                <p className="text-sm font-semibold text-blue-900">{ach.title}</p>
                <p className="text-lg font-bold text-blue-700 mt-1">{ach.metric}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 10 KPIs Grid */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-ink mb-12">
            10 KPIs Clave
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Revenue Growth KPIs */}
            <div className="p-6 rounded-lg border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100/30">
              <div className="flex items-start gap-4">
                <span className="text-4xl">📈</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">KPI #1</p>
                  <h4 className="text-lg font-bold text-amber-900 mt-2">+500% Retail Media</h4>
                  <p className="text-sm text-amber-800 mt-2">Crecimiento interanual. Nueva línea de negocio con alto margen.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100/30">
              <div className="flex items-start gap-4">
                <span className="text-4xl">💹</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">KPI #2</p>
                  <h4 className="text-lg font-bold text-amber-900 mt-2">+200% Digital Commerce</h4>
                  <p className="text-sm text-amber-800 mt-2">Crecimiento del negocio central. Ventas netas impulsadas.</p>
                </div>
              </div>
            </div>

            {/* Operational KPIs */}
            <div className="p-6 rounded-lg border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/30">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🤖</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">KPI #3</p>
                  <h4 className="text-lg font-bold text-purple-900 mt-2">+1pp Conversión (AI)</h4>
                  <p className="text-sm text-purple-800 mt-2">Mejora mediante IA. Traducido en millones en top line.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/30">
              <div className="flex items-start gap-4">
                <span className="text-4xl">📦</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">KPI #4</p>
                  <h4 className="text-lg font-bold text-blue-900 mt-2">+100% Fill Rate</h4>
                  <p className="text-sm text-blue-800 mt-2">Excelencia en logística. Objetivos anuales superados.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100/30">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🎯</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-700">KPI #5</p>
                  <h4 className="text-lg font-bold text-green-900 mt-2">+0.4pp Market Share</h4>
                  <p className="text-sm text-green-800 mt-2">Ganancia de terreno a competencia en retail.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-rose-100/30">
              <div className="flex items-start gap-4">
                <span className="text-4xl">💰</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">KPI #6</p>
                  <h4 className="text-lg font-bold text-rose-900 mt-2">+43% EBITDA</h4>
                  <p className="text-sm text-rose-800 mt-2">Ownership directo. 30% en OKRs. Orientación al resultado.</p>
                </div>
              </div>
            </div>

            {/* Technology & Customer */}
            <div className="p-6 rounded-lg border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-indigo-100/30">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🏗️</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">KPI #7</p>
                  <h4 className="text-lg font-bold text-indigo-900 mt-2">&gt;50% Composable Commerce</h4>
                  <p className="text-sm text-indigo-800 mt-2">Arquitectura tecnológica migrada. Omnicanal.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-cyan-100/30">
              <div className="flex items-start gap-4">
                <span className="text-4xl">📊</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">KPI #8</p>
                  <h4 className="text-lg font-bold text-cyan-900 mt-2">800K+ Pedidos Anuales</h4>
                  <p className="text-sm text-cyan-800 mt-2">Gestión de capacidad y escalabilidad operativa.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-teal-100/30">
              <div className="flex items-start gap-4">
                <span className="text-4xl">⭐</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">KPI #9</p>
                  <h4 className="text-lg font-bold text-teal-900 mt-2">Cuartil Superior NPS/CSAT</h4>
                  <p className="text-sm text-teal-800 mt-2">Fidelización. Industria minorista. CLV focus.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/30">
              <div className="flex items-start gap-4">
                <span className="text-4xl">👥</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange-700">KPI #10</p>
                  <h4 className="text-lg font-bold text-orange-900 mt-2">+90% Org Alignment</h4>
                  <p className="text-sm text-orange-800 mt-2">Roles alineados con objetivos. Talento & arquitectura.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnerships */}
        {cencosud.partners && cencosud.partners.length > 0 && (
          <div className="pt-16 border-t border-gray-200">
            <h3 className="text-xl font-bold font-serif text-ink mb-6">Partnerships Estratégicos</h3>
            <div className="flex flex-wrap gap-3">
              {cencosud.partners.map((partner) => (
                <span
                  key={partner}
                  className="px-4 py-2 rounded-full border-2 border-forest/30 bg-white text-forest font-medium text-sm hover:bg-forest/5 transition-colors"
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
