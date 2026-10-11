import Link from "next/link";
import { topics } from "@/lib/topics";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
          <p className="text-sm">© {new Date().getFullYear()} Nicolás Valenzuela</p>
          <Link href="/consulting" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">Conversemos ↗</Link>
        </div>
        <details className="group border-t border-white/20">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between text-sm text-gray-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
            Explorar el sitio <span aria-hidden="true" className="group-open:rotate-45">＋</span>
          </summary>
          <nav aria-label="Enlaces del pie de página" className="grid gap-6 pb-6 pt-3 sm:grid-cols-3">
            <div><p className="mb-3 text-sm font-semibold">Nicolás Valenzuela</p><p className="text-sm leading-7 text-gray-300">Estrategia, commerce, datos e IA.<br />Buenos Aires · Latinoamérica</p></div>
            <ul>{[{href:"/",name:"Inicio"},{href:"/about",name:"Trayectoria"},{href:"/consulting",name:"Consultoría"},{href:"/insights",name:"Insights"},{href:"/topics",name:"Temas"}].map(link=><li key={link.href}><Link className="inline-flex min-h-11 items-center text-sm text-gray-300 hover:text-white" href={link.href}>{link.name}</Link></li>)}</ul>
            <ul>{topics.map(topic=><li key={topic.slug}><Link className="inline-flex min-h-11 items-center text-sm text-gray-300 hover:text-white" href={`/topics/${topic.slug}`}>{topic.title}</Link></li>)}</ul>
          </nav>
        </details>
      </div>
    </footer>
  );
}
