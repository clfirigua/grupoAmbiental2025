import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Transparencia",
  description: "Información de transparencia de Grupo Ambiental Casanare E.S.P.",
  alternates: { canonical: "/transparencia" },
};

export default function TransparenciaPage() {
  return (
    <>
      <PageHero
        title="Transparencia"
        description="Como empresa de servicios públicos, promovemos el acceso a la información sobre nuestra gestión."
        showMascot={false}
      />
      <section className="py-14">
        <Container className="max-w-3xl">
          <p className="text-sm leading-relaxed text-slate-700">
            {siteConfig.name} está comprometida con la transparencia en su gestión ambiental, comercial y
            administrativa. Esta sección se irá completando con informes de gestión, indicadores validados y demás
            documentos que la empresa defina publicar.
          </p>
          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-brand-tint p-6">
            <Icon name="shield" className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
            <p className="text-sm text-slate-700">
              ¿Necesitas información específica sobre nuestra gestión?{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-brand">
                Escríbenos
              </a>{" "}
              y con gusto te atendemos.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
