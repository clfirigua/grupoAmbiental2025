import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { MATERIALS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Educación ambiental",
  description:
    "Contenido práctico de educación ambiental para niños, jóvenes, hogares, empresas e instituciones: separación en la fuente y materiales aprovechables.",
  alternates: { canonical: "/educacion-ambiental" },
};

const AUDIENCES = [
  {
    title: "Niños y niñas",
    icon: "paw" as const,
    tip: "Aprenden jugando: identificar colores de canecas y separar por tipo de material.",
  },
  {
    title: "Jóvenes",
    icon: "users" as const,
    tip: "Proyectos escolares y campañas de sensibilización dentro de su institución educativa.",
  },
  {
    title: "Hogares",
    icon: "leaf" as const,
    tip: "Rutina sencilla de separación en la fuente y entrega a nuestras rutas de recolección.",
  },
  {
    title: "Empresas e instituciones",
    icon: "briefcase" as const,
    tip: "Diagnóstico, capacitación al personal y plan de aprovechamiento a la medida.",
  },
];

const MATERIAL_TIPS: Record<string, string> = {
  Papel: "Mantenlo seco y libre de residuos de comida.",
  Cartón: "Dóblalo y retira cintas o icopor antes de entregarlo.",
  Plástico: "Enjuágalo y compáctalo para ocupar menos espacio.",
  Vidrio: "Entrégalo entero y por separado para evitar accidentes.",
  Metales: "Latas y chatarra limpia, sin residuos de líquidos.",
  "Otros aprovechables": "Consúltanos si tienes dudas sobre un material específico.",
};

export default function EducacionAmbientalPage() {
  return (
    <>
      <PageHero
        title="Educación ambiental"
        description="Contenido práctico para construir, entre todos, hábitos reales de separación en la fuente y aprovechamiento de residuos."
      />

      <section className="py-14">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">¿Para quién es este contenido?</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map((audience, index) => (
              <Reveal key={audience.title} delay={index * 60}>
                <div className="flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-soft ring-1 ring-black/5">
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint text-brand">
                    <Icon name={audience.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="text-base font-semibold text-brand-darker">{audience.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{audience.tip}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-tint py-14">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Guía rápida de separación en la fuente</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Separa siempre en seco y limpio. Estos son los materiales aprovechables que recibimos:
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MATERIALS.map((material, index) => (
              <Reveal key={material} delay={index * 50}>
                <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-black/5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="recycle" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-darker">{material}</p>
                    <p className="text-sm text-slate-600">{MATERIAL_TIPS[material]}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-2xl bg-brand-darker px-8 py-10 text-center text-white sm:flex-row sm:justify-between sm:text-left">
              <div>
                <h2 className="text-xl font-bold">¿Quieres un taller para tu colegio o empresa?</h2>
                <p className="mt-2 max-w-lg text-white/80">
                  Coordinamos talleres de educación ambiental a la medida a través de nuestro programa EcoColegios
                  Casanare.
                </p>
              </div>
              <Button href="/contacto" variant="primary" icon="send">
                Solicitar un taller
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
