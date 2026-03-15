"use client";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  role?: string;
  highlight?: boolean;
}

const events: TimelineEvent[] = [
  {
    year: "1999",
    title: "Inicio en Digital",
    description: "Primeros pasos en transformación digital",
    highlight: false,
  },
  {
    year: "2005",
    title: "Evolución Retail",
    description: "Especialización en retail y ecommerce",
    highlight: false,
  },
  {
    year: "2016",
    title: "MBA",
    description: "Universidad Católica Argentina",
    role: "Educación formal",
    highlight: false,
  },
  {
    year: "2016",
    title: "Fundación andabi",
    description: "Analytics & Digital Business Growth",
    role: "CEO & Founder",
    highlight: false,
  },
  {
    year: "2020",
    title: "VTEX",
    description: "Director Customer Experience",
    role: "Argentina, Paraguay, Uruguay, Bolivia",
    highlight: false,
  },
  {
    year: "2021",
    title: "Cencosud Media",
    description: "Escaló al Top 5 Retail Media Latam",
    role: "+43% EBITDA Growth",
    highlight: true,
  },
  {
    year: "2026",
    title: "MIT CDO Program",
    description: "Chief Digital Officer",
    role: "Educación permanente",
    highlight: false,
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-16">
          Trayectoria: 1999 → 2026
        </h2>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-forest to-transparent" />

            {/* Timeline events */}
            <div className="space-y-12">
              {events.map((event, idx) => (
                <div key={event.year} className={`flex ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Left/Right content */}
                  <div className={`w-1/2 ${idx % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div
                      className={`p-6 rounded-lg border-2 transition-all hover:shadow-lg ${
                        event.highlight
                          ? "border-gold bg-gradient-to-br from-gold/10 to-forest/5"
                          : "border-gray-200 bg-white hover:border-forest/30"
                      }`}
                    >
                      <p className={`text-sm font-bold ${event.highlight ? "text-gold" : "text-forest"}`}>
                        {event.year}
                      </p>
                      <h3 className="text-lg font-bold font-serif text-ink mt-2">{event.title}</h3>
                      <p className="text-sm text-muted mt-2">{event.description}</p>
                      {event.role && (
                        <p className="text-xs font-semibold text-forest mt-3">{event.role}</p>
                      )}
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="w-0 flex justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border-4 border-cream ${
                        event.highlight ? "bg-gold" : "bg-forest"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Side line */}
            <div className="absolute left-1.5 top-0 w-0.5 h-full bg-gradient-to-b from-forest to-transparent" />

            {/* Timeline events */}
            <div className="space-y-6">
              {events.map((event) => (
                <div key={event.year} className="relative">
                  {/* Dot */}
                  <div
                    className={`absolute -left-5 top-1 w-3 h-3 rounded-full border-2 border-cream ${
                      event.highlight ? "bg-gold" : "bg-forest"
                    }`}
                  />

                  {/* Content */}
                  <div
                    className={`p-4 rounded-lg border-2 ${
                      event.highlight
                        ? "border-gold bg-gradient-to-br from-gold/10 to-forest/5"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <p className={`text-xs font-bold ${event.highlight ? "text-gold" : "text-forest"}`}>
                      {event.year}
                    </p>
                    <h3 className="text-base font-bold font-serif text-ink mt-1">{event.title}</h3>
                    <p className="text-xs text-muted mt-1">{event.description}</p>
                    {event.role && (
                      <p className="text-xs font-semibold text-forest mt-2">{event.role}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
