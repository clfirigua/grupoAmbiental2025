import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ProgramCard } from "@/components/ProgramCard";
import { Reveal } from "@/components/Reveal";
import { PROGRAMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programas ambientales",
  description:
    "Programas ambientales de Grupo Ambiental Casanare: Recicla por un Árbol, EcoColegios Casanare, Puntos Verdes, Casanare Limpio y más.",
  alternates: { canonical: "/programas" },
};

export default function ProgramasPage() {
  return (
    <>
      <PageHero
        title="Programas ambientales"
        description="Campañas y programas con objetivo, público y forma de participar, para que toda la comunidad se sume al cambio."
      />
      <section className="py-14">
        <Container>
          <div className="grid gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((program, index) => (
              <Reveal key={program.slug} delay={index * 60}>
                <ProgramCard program={program} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
