import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { RecoleccionForm } from "@/components/RecoleccionForm";
import { Reveal } from "@/components/Reveal";
import { PROCESS_STEPS } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solicita tu recolección",
  description:
    "Solicita tu recolección de material reciclable en Yopal y Casanare: completa el formulario y nuestro equipo agenda la recolección.",
  alternates: { canonical: "/solicita-tu-recoleccion" },
};

export default function SolicitaTuRecoleccionPage() {
  return (
    <>
      <PageHero
        title="Solicita tu recolección"
        description="Programa la recolección de tus materiales aprovechables en pocos pasos. Es rápido, fácil y hace la diferencia."
      >
        <a
          href={`https://wa.me/${siteConfig.contact.whatsappHref}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-dark"
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          Prefiero escribir por WhatsApp
        </a>
      </PageHero>

      <section className="py-14">
        <Container>
          <Reveal>
            <h2 className="text-center text-2xl font-bold sm:text-3xl">¿Cómo funciona?</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <div className="relative flex h-full flex-col items-center rounded-2xl bg-brand-tint p-6 text-center">
                  <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold text-brand-darker">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-tint py-14">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 sm:p-10">
              <h2 className="text-xl font-bold">Formulario de solicitud</h2>
              <p className="mt-1 text-sm text-slate-600">
                Completa tus datos y el detalle de la recolección. Nuestro equipo la gestionará y te contactará
                para confirmar fecha y horario.
              </p>
              <div className="mt-8">
                <RecoleccionForm />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
