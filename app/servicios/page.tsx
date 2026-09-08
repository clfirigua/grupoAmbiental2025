import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conoce los servicios de Grupo Ambiental Casanare: recolección selectiva, E.C.A., compra de material reciclable, asesoría ambiental y educación ambiental.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        title="Nuestros servicios"
        description="Soluciones integrales para la gestión y el aprovechamiento de residuos sólidos en Yopal y Casanare."
      />
      <section className="py-14">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
