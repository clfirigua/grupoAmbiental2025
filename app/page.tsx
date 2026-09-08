import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { ImpactStats } from "@/components/ImpactStats";
import { ServiceCard } from "@/components/ServiceCard";
import { ProgramCard } from "@/components/ProgramCard";
import { NewsCard } from "@/components/NewsCard";
import { Reveal } from "@/components/Reveal";
import { ALLIES, NEWS, PROGRAMS, SERVICES } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.slogan}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredPrograms = PROGRAMS.filter((program) => program.featured);
  const latestNews = NEWS.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-darker">
        <div className="absolute inset-0">
          <Image
            src="/images/clasificacion.jpg"
            alt="Equipo de Grupo Ambiental Casanare clasificando material reciclable"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/90 to-brand-darker/50" />
        </div>

        <Container className="relative flex flex-col items-center gap-10 py-16 sm:py-20 lg:flex-row lg:items-end lg:py-24">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Transformamos <span className="text-brand-light">residuos en oportunidades</span>
            </h1>
            <p className="mt-5 text-lg text-white/85">
              Somos la solución para la gestión y aprovechamiento de residuos sólidos aprovechables en Yopal y
              Casanare.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/quienes-somos" icon="arrowRight">
                Conoce más sobre nosotros
              </Button>
              <Button href="/solicita-tu-recoleccion" variant="outline">
                Solicita tu recolección
              </Button>
            </div>
          </div>

          <Image
            src="/images/mascota.png"
            alt="Mascota de Grupo Ambiental Casanare con casco de seguridad"
            width={320}
            height={392}
            priority
            className="hidden h-72 w-auto drop-shadow-2xl sm:block lg:h-96"
          />
        </Container>
      </section>

      <section className="bg-brand-tint py-14">
        <Container>
          <Reveal>
            <h2 className="text-center text-2xl font-bold sm:text-3xl">
              Nuestro impacto <span aria-hidden>🌱</span>
            </h2>
          </Reveal>
          <div className="mt-8">
            <ImpactStats />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Nuestros servicios <span aria-hidden>🌿</span>
              </h2>
            </Reveal>
            <Link href="/servicios" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5">
              Ver todos los servicios
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-tint py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <Reveal>
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Programas ambientales destacados <span aria-hidden>🌿</span>
                  </h2>
                </Reveal>
                <Link
                  href="/programas"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5"
                >
                  Ver todos los programas
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {featuredPrograms.map((program, index) => (
                  <Reveal key={program.slug} delay={index * 80}>
                    <ProgramCard program={program} />
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <Reveal>
                  <h2 className="text-2xl font-bold sm:text-3xl">Noticias recientes</h2>
                </Reveal>
                <Link
                  href="/noticias"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5"
                >
                  Ver todas
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                {latestNews.map((item, index) => (
                  <Reveal key={item.slug} delay={index * 80}>
                    <NewsCard item={item} horizontal />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center gap-8 overflow-hidden rounded-2xl bg-brand-darker px-8 py-10 text-center sm:px-12 lg:flex-row lg:justify-between lg:text-left">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Pequeñas acciones, <span className="text-brand-light">grandes cambios</span>
                </h2>
                <p className="mt-3 max-w-lg text-white/80">
                  Juntos construimos un Casanare más limpio, verde y sostenible.
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row">
                <Image
                  src="/images/mascota.png"
                  alt="Mascota de Grupo Ambiental Casanare"
                  width={130}
                  height={160}
                  className="hidden h-28 w-auto sm:block"
                />
                <Button href="/solicita-tu-recoleccion" variant="primary" icon="truck">
                  Solicita tu recolección
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-black/5 py-12">
        <Container>
          <p className="text-center text-sm font-semibold text-slate-500">
            Aliados que hacen posible este cambio <span aria-hidden>🌿</span>
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {ALLIES.map((ally) => (
              <span key={ally} className="text-sm font-medium text-slate-400">
                {ally}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            * Solo publicamos logos de entidades y aliados con autorización.
          </p>
        </Container>
      </section>
    </>
  );
}
