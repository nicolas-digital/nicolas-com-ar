"use client";

interface Testimonial {
  company: string;
  logo: string;
  quote: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    company: "Cencosud",
    logo: "🏬",
    quote: "Gestión de Digital Commerce y Retail Media en Argentina, con objetivos de ingresos y EBITDA, presupuesto y seguimiento de resultados.",
    role: "Gerente Digital Commerce",
  },
  {
    company: "VTEX",
    logo: "💻",
    quote: "Dirección de Customer Success y posteriormente Customer Experience para Argentina, Paraguay, Uruguay y Bolivia.",
    role: "Director Customer Success / Customer Experience",
  },
  {
    company: "andabi",
    logo: "🚀",
    quote: "Fundación de consultora enfocada en growth y analytics digital",
    role: "Founder & CEO",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-12">
          Trayectoria ejecutiva
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.company}
              className="rounded-lg border border-gray-300 bg-white p-6 hover:border-forest/30 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{test.logo}</div>
                <div>
                  <h3 className="text-lg font-bold text-ink">{test.company}</h3>
                  <p className="text-xs text-muted">{test.role}</p>
                </div>
              </div>

              <p className="text-sm leading-6 text-ink">{test.quote}</p>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <a href="https://www.linkedin.com/in/nvalenzuela/" className="text-xs font-semibold text-forest underline">Ver trayectoria en LinkedIn</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
