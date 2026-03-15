"use client";

export default function CTASection() {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight">
              ¿Liderás una agenda de transformación digital?
            </h2>

            <p className="mt-6 text-base leading-8" style={{ color: "rgba(248, 246, 241, 0.8)" }}>
              Acompaño a equipos de retail, tecnología y marcas en estrategia, roadmaps y ejecución de transformación digital.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/nicolasvalenzuela"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-cream px-8 py-3 text-sm font-semibold text-forest hover:bg-cream/90 transition-colors text-center"
              >
                Agendar Llamada
              </a>

              <a
                href="mailto:nicolas@nicolas.com.ar"
                className="inline-block rounded-lg border border-cream px-8 py-3 text-sm font-semibold text-cream hover:bg-cream/10 transition-colors text-center"
              >
                Enviar Email
              </a>
            </div>
          </div>

          {/* Right: Social Proof */}
          <div className="bg-white/5 rounded-lg p-6 md:p-8 border border-cream/20">
            <p className="text-xs uppercase tracking-wider text-cream/70 mb-4">Trabajé con:</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏬</span>
                <div>
                  <p className="font-semibold text-sm">Cencosud</p>
                  <p className="text-xs text-cream/70">Gerente Digital Commerce</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                <div>
                  <p className="font-semibold text-sm">VTEX</p>
                  <p className="text-xs text-cream/70">Director LATAM</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="font-semibold text-sm">andabi</p>
                  <p className="text-xs text-cream/70">Founder & CEO</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-cream/20">
              <p className="text-xs text-cream/60">
                +20 años transformando negocios digitales en Latinoamérica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
