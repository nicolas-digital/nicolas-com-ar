/**
 * EJEMPLO: app/page.tsx REFACTORIZADO
 * Usando profileData centralizado
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { profileData } from "@/lib/data/profile";
import AnimatedCounter from "@/components/AnimatedCounter";
import CredentialsBand from "@/components/CredentialsBand";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Testimonials from "@/components/Testimonials";
import ExpertiseTags from "@/components/ExpertiseTags";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Digital Strategy, Ecommerce, Retail Media & AI",
  description:
    "Nicolás Valenzuela shares insights and strategic advisory on digital transformation, ecommerce, retail media and applied AI for retailers, brands and technology companies in Latin America.",
};

export default function HomePage() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 2);

  return (
    <main className="bg-cream text-ink">
      {/* Hero Section */}
      <section className="border-b border-gray-200 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
          <div className="grid grid-cols-[1fr_auto] gap-4 md:grid-cols-2 md:gap-16 items-start">
            {/* Left: Text */}
            <div>
              {/* Eyebrow */}
              <p className="text-xs font-semibold tracking-wider" style={{ color: "#8B7355" }}>
                ● BUENOS AIRES · LATAM
              </p>

              {/* H1 */}
              <h1 className="mt-4 md:mt-6 text-2xl md:text-5xl font-bold leading-tight font-serif">
                Convierto visión estratégica en innovación con resultados reales
              </h1>

              {/* Subtitle */}
              <p className="mt-4 md:mt-6 text-sm md:text-base leading-6 md:leading-8 text-muted">
                Retail, ecommerce, retail media e IA aplicada — acompaño a CEOs y organizaciones en Latinoamérica a transformar sus negocios digitales con ejecución concreta, no solo estrategia en papel.
              </p>

              {/* Tags - AHORA DESDE profileData */}
              <div className="mt-6 md:mt-8 flex flex-wrap gap-2">
                {profileData.heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2.5 md:px-3 py-1 md:py-1.5 text-xs font-medium"
                    style={{
                      borderColor: "#D4B896",
                      color: "#8B6040",
                      backgroundColor: "white",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-6 md:mt-10 flex flex-wrap gap-2 md:gap-3">
                <Link
                  href="/consulting"
                  className="rounded-full bg-ink px-5 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-cream hover:bg-ink/90 transition-colors"
                >
                  Hablemos →
                </Link>

                <Link
                  href="/insights"
                  className="rounded-full border border-ink px-5 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-ink hover:bg-cream/50 transition-colors"
                >
                  Ver insights
                </Link>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="flex justify-start md:justify-end relative">
              <div className="relative group">
                <Image
                  src="/images/nicolas-valenzuela.png"
                  alt="Nicolás Valenzuela — Digital Transformation Advisor"
                  width={280}
                  height={280}
                  priority
                  sizes="(max-width: 768px) 96px, 280px"
                  className="rounded-full md:rounded-2xl w-24 h-24 md:w-80 md:h-80 object-cover object-top shadow-lg flex-shrink-0"
                />
                <a
                  href="https://www.youtube.com/watch?v=PBdczRfTpPY&list=PLEecx-sXSaZ2_k6yTq4BumjObnOq6kpKC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center rounded-full md:rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full group-hover:bg-white transition-colors">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-forest ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Band */}
      <CredentialsBand />

      {/* Metrics - AHORA DESDE profileData.homeMetrics */}
      <section className="border-b border-gray-200 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-row items-center justify-start gap-8 md:gap-12">
            {profileData.homeMetrics.map((metric, idx) => (
              <div key={idx} className="flex items-center gap-8 md:gap-12">
                <AnimatedCounter 
                  end={metric.end} 
                  duration={metric.duration} 
                  label={metric.label} 
                />
                {idx < profileData.homeMetrics.length - 1 && (
                  <div className="border-l border-gray-300 h-12" />
                )}
              </div>
            ))}
          </div>

          {/* Expertise Tags */}
          <ExpertiseTags />
        </div>
      </section>

      {/* Profile Section - Experience Timeline */}
      <ExperienceTimeline />

      {/* Testimonials */}
      <Testimonials />

      {/* Areas Section - AHORA DESDE profileData.expertise */}
      <section className="bg-cream border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-12">
            Áreas de especialización
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {profileData.expertise.map((area) => (
              <div
                key={area.title}
                className="p-6 rounded-lg border-2 border-forest/30 hover:border-gold transition-colors"
                style={{ backgroundColor: "rgba(26, 58, 42, 0.05)" }}
              >
                <h3 className="text-lg font-bold font-serif text-ink">{area.title}</h3>
                <p className="mt-3 leading-6 text-muted text-sm">{area.description}</p>
                <Link href="/about" className="mt-4 text-xs font-semibold text-forest hover:underline">
                  Saber más →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Insights */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-12">
            Últimas reflexiones
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`}>
                <article className="group cursor-pointer">
                  <div className="border-b-2 border-gold pb-4 mb-4">
                    <p className="text-xs font-semibold text-muted uppercase mb-2">
                      {new Date(post.date).toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold font-serif group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted leading-6">{post.description}</p>
                </article>
              </Link>
            ))}
          </div>

          <Link
            href="/insights"
            className="mt-12 inline-block px-6 py-2.5 bg-ink text-cream rounded-full font-semibold hover:bg-ink/90 transition-colors"
          >
            Ver todos →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
