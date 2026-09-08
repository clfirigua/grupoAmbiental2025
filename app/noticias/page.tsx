import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { NewsCard } from "@/components/NewsCard";
import { Reveal } from "@/components/Reveal";
import { NEWS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Noticias",
  description:
    "Noticias y actualidad de Grupo Ambiental Casanare: jornadas de recolección selectiva, aprovechamiento y educación ambiental en Yopal y Casanare.",
  alternates: { canonical: "/noticias" },
};

export default function NoticiasPage() {
  return (
    <>
      <PageHero
        title="Noticias"
        description="Actualidad de nuestras jornadas, programas y avances en la gestión de residuos en Yopal y Casanare."
      />
      <section className="py-14">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NEWS.map((item, index) => (
              <Reveal key={item.slug} delay={index * 60}>
                <NewsCard item={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
