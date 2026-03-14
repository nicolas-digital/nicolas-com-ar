import Link from "next/link";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Nicolás", href: "/about" },
  { name: "Consulting", href: "/consulting" },
  { name: "Insights", href: "/insights" },
];

const focusAreas = [
  {
    name: "Transformación Digital",
    href: "/topics/digital-transformation",
  },
  {
    name: "Retail Media",
    href: "/topics/retail-media",
  },
  {
    name: "Inteligencia Artificial",
    href: "/topics/ai",
  },
  {
    name: "Estrategia Ecommerce",
    href: "/topics/digital-commerce",
  },
];

const knowledge = [
  { name: "Insights", href: "/insights" },
  { name: "Topics", href: "/topics" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Identidad */}
          <div>
            <h2 className="text-lg font-semibold">
              Prof. Nicolás Valenzuela
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-7 text-gray-400">
              Estrategia digital, ecommerce, retail media e inteligencia
              artificial aplicada para organizaciones que buscan crecer,
              mejorar su rentabilidad y desarrollar capacidades digitales
              sostenibles.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Buenos Aires, Argentina
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Navegación
            </h3>

            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas de enfoque */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Áreas de enfoque
            </h3>

            <ul className="mt-4 space-y-3">
              {focusAreas.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conocimiento */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Conocimiento
            </h3>

            <ul className="mt-4 space-y-3">
              {knowledge.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Prof. Nicolás Valenzuela. Todos los
            derechos reservados.
          </p>

          <p>
            nicolas.com.ar · Buenos Aires, Argentina · Digital Commerce ·
            Retail Media · Inteligencia Artificial
          </p>

        </div>
      </div>
    </footer>
  );
}
