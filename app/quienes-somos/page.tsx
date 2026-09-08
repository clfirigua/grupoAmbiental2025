import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Grupo Ambiental Casanare E.S.P. es la solución para el aprovechamiento de residuos sólidos en Yopal y Casanare: misión, visión y propuesta de valor.",
  alternates: { canonical: "/quienes-somos" },
};

const VALUE_PROPS = [
  { title: "Recolección selectiva", icon: "truck" as const },
  { title: "Clasificación en nuestra E.C.A.", icon: "sort" as const },
  { title: "Aprovechamiento de materiales", icon: "recycle" as const },
  { title: "Comercialización y transformación", icon: "cart" as const },
];

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero
        title="¿Quiénes somos?"
        description={`Somos la solución para el aprovechamiento de residuos en ${siteConfig.contact.addressLocality} y ${siteConfig.contact.addressRegion}.`}
      />

      <section className="py-14">
        <Container>
          <Reveal>
            <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-96">
              <Image
                src="/images/equipo.jpg"
                alt="Equipo de Grupo Ambiental Casanare frente a sus instalaciones en Yopal"
                fill
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full gap-4 rounded-2xl bg-brand-tint p-6">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Icon name="target" className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="text-xl font-bold">Nuestra misión</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Brindar soluciones eficientes para la gestión y aprovechamiento de residuos sólidos
                    reciclables, promoviendo la economía circular y contribuyendo a un Casanare más limpio y
                    sostenible.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="flex h-full gap-4 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Icon name="eye" className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="text-xl font-bold">Nuestra visión</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Ser una empresa referente en aprovechamiento y gestión de residuos reciclables en Casanare,
                    reconocida por su eficiencia, innovación, responsabilidad ambiental y capacidad de generar
                    valor para el territorio.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-6 rounded-2xl bg-brand-tint p-8">
              <h2 className="text-xl font-bold">
                Nuestra propuesta de valor <span aria-hidden>🌿</span>
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Convertimos materiales que pueden ser aprovechados en nuevas oportunidades, conectando a la
                ciudadanía, las empresas y las instituciones con soluciones reales de economía circular.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {VALUE_PROPS.map((item) => (
                  <div key={item.title} className="flex flex-col items-center text-center">
                    <span className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand shadow-soft">
                      <Icon name={item.icon} className="h-7 w-7" />
                    </span>
                    <span className="text-sm font-medium text-brand-darker">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/servicios" icon="arrowRight">
                  Conoce nuestros servicios
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-8 text-center text-base font-medium text-brand-darker">
              Creemos en un Casanare donde los residuos se convierten en oportunidades y el ambiente es
              responsabilidad de todos.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
