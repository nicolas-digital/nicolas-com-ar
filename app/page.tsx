import { pageMetadata, socialPages } from "@/lib/social";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import s from "./home.module.css";

export const metadata: Metadata = pageMetadata(socialPages.home);

const decisions = [
  { title: "Crecer con rentabilidad", text: "Conectar la estrategia de commerce con margen, operación y experiencia del cliente. Definir qué priorizar y cómo evaluar el avance.", label: "COMMERCE & OPERACIÓN" },
  { title: "Convertir datos en decisiones", text: "Evaluar oportunidades de retail media y uso de datos con una mirada de negocio: qué medir, para quién y con qué límites.", label: "RETAIL MEDIA & DATOS" },
  { title: "Llevar la IA a la práctica", text: "Elegir problemas concretos, identificar los datos necesarios y diseñar una adopción con responsabilidades y supervisión humana.", label: "IA & TRANSFORMACIÓN" },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 2);
  return (
    <div className={s.home}>
      <section className={`${s.wrap} ${s.hero}`} aria-labelledby="home-title">
        <div className={s.heroCopy}>
          <p className={s.eyebrow}>NICOLÁS VALENZUELA · BUENOS AIRES / LATAM</p>
          <h1 id="home-title">Estrategia, datos e inteligencia artificial para <em>dirigir el negocio digital.</em></h1>
          <p className={s.intro}>Acompaño a líderes de retail y comercio digital a definir prioridades y conectar tecnología, equipos y operación.</p>
          <div className={s.actions}><Link className={s.button} href="/consulting">Conversemos sobre tu negocio <span aria-hidden="true">↗</span></Link><Link className={s.textLink} href="#experiencia">Conocé mi recorrido <span aria-hidden="true">↓</span></Link></div>
        </div>
        <figure className={s.portrait}>
          <Image src="/images/mit/nicolas-campus.webp" alt="Nicolás Valenzuela con la estola de MIT Professional Education, frente a la cúpula del campus" width={1398} height={1400} priority sizes="(max-width: 760px) calc(100vw - 40px), 460px" />
          <figcaption><span>Aprender para transformar.</span><span>MIT · CAMBRIDGE, 2026</span></figcaption>
        </figure>
      </section>
      <div className={s.disciplines}><div className={s.wrap}><span>ESTRATEGIA DE NEGOCIO</span><span>RETAIL & COMMERCE</span><span>DATOS & IA</span><span>LIDERAZGO & DOCENCIA</span></div></div>
      <section id="experiencia" className={`${s.wrap} ${s.experience}`} aria-labelledby="experience-title">
        <div><p className={s.eyebrow}>01 / EXPERIENCIA Y FORMACIÓN</p><h2 id="experience-title">La mirada de negocio.<br /><em>La curiosidad de seguir aprendiendo.</em></h2><p className={s.body}>Mi recorrido conecta gestión de negocios digitales, consultoría y docencia. La formación en MIT Professional Education suma trabajo aplicado en plataformas, datos e inteligencia artificial a esa experiencia.</p><Link className={s.textLink} href="/about">Explorar mi trayectoria <span aria-hidden="true">↗</span></Link></div>
        <div className={s.credential}><p className={s.eyebrow}>MIT PROFESSIONAL EDUCATION</p><h3>Programa en Alta Dirección:<br />Chief Digital Officer</h3><p>Completado el 2 de octubre de 2026.<br />525 horas de formación · 2025–2026.</p><details><summary>Ver el certificado <span aria-hidden="true">＋</span></summary><Image src="/images/mit/certificado-cdo.webp" alt="Certificado de Nicolás Valenzuela del Programa en Alta Dirección: Chief Digital Officer, MIT Professional Education, del 30 de junio de 2025 al 2 de octubre de 2026, 525 horas" width={1800} height={832} sizes="(max-width: 760px) 90vw, 460px" /><a className={s.textLink} href="/images/mit/certificado-cdo.webp">Abrir imagen completa ↗</a></details></div>
      </section>
      <section className={s.project} aria-labelledby="project-title"><div className={`${s.wrap} ${s.projectGrid}`}>
        <figure><Image src="/images/mit/nicolas-workshop.webp" alt="Nicolás Valenzuela participando en una sesión de trabajo durante el programa CDO" width={750} height={1000} sizes="(max-width: 760px) 90vw, 360px" /><figcaption>Intercambio y trabajo aplicado durante el programa CDO.</figcaption></figure>
        <div><p className={s.eyebrow}>02 / DEL APRENDIZAJE AL DISEÑO</p><h2 id="project-title">Pensar la tecnología desde un problema de negocio.</h2><p className={s.projectName}>PIM-360X <span>PROYECTO ACADÉMICO GRUPAL</span></p><p>Una propuesta de plataforma que parte del ticket de compra para conectar comercios de cercanía, consumidores y marcas. Explora cómo transformar esos datos en información y acciones comerciales con apoyo de IA.</p><details><summary>El enfoque y sus límites <span aria-hidden="true">＋</span></summary><p>El diseño propone comenzar sin una integración inicial con POS o ERP y contempla supervisión humana de los procesos asistidos por IA. Es una propuesta académica; no representa una implementación comercial ni resultados de un piloto.</p><p>Impact Project, Grupo 2, del programa CDO. Equipo: Sandra Schijvarger, David Mendez, Julio Larrechart, Cristian Pino Mora, Luis Sansot y Nicolás Valenzuela.</p></details></div>
      </div></section>
      <section className={`${s.wrap} ${s.section}`} aria-labelledby="decisions-title"><div className={s.sectionHeading}><p className={s.eyebrow}>03 / TRABAJAR JUNTOS</p><h2 id="decisions-title">Decisiones que merecen<br /><em>una mirada integrada.</em></h2></div><div className={s.decisions}>{decisions.map((item, i) => <article key={item.title}><span className={s.number}>0{i + 1}</span><p className={s.eyebrow}>{item.label}</p><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><Link className={s.textLink} href="/consulting">Cómo puedo acompañarte <span aria-hidden="true">↗</span></Link></section>
      <section className={`${s.wrap} ${s.section} ${s.insights}`} aria-labelledby="insights-title"><div className={s.sectionHeading}><div><p className={s.eyebrow}>04 / IDEAS PARA PONER EN PRÁCTICA</p><h2 id="insights-title">Perspectivas sobre<br /><em>el negocio que viene.</em></h2></div><Link className={s.textLink} href="/insights">Todos los artículos ↗</Link></div><div className={s.articles}>{posts.map(post => <Link key={post.slug} href={`/insights/${post.slug}`}><p className={s.eyebrow}>{post.topic}</p><h3>{post.title}</h3><span className={s.textLink}>Leer artículo <span aria-hidden="true">↗</span></span></Link>)}</div></section>
      <section className={s.contact}><div className={s.wrap}><p className={s.eyebrow}>ABRAMOS UNA CONVERSACIÓN</p><h2>¿Qué decisión necesita<br /><em>hoy tu negocio?</em></h2><Link className={s.button} href="/consulting">Exploremos cómo trabajar juntos <span aria-hidden="true">↗</span></Link></div></section>
    </div>
  );
}
