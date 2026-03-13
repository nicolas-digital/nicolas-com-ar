import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/consulting", label: "Consulting" },
  { href: "/insights", label: "Insights" },
  { href: "/topics", label: "Topics" },
];

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-blue-700">
          Nicolas Valenzuela
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-700">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}