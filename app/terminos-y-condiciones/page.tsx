import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso del sitio web de Grupo Ambiental Casanare E.S.P.",
  alternates: { canonical: "/terminos-y-condiciones" },
  robots: { index: false, follow: true },
};

export default function TerminosYCondicionesPage() {
  return (
    <>
      <PageHero
        title="Términos y condiciones"
        description="Condiciones generales de uso de este sitio web."
        showMascot={false}
      />
      <section className="py-14">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-slate-700">
          <p className="rounded-xl bg-brand-tint p-4 text-brand-darker">
            Este es un borrador base para uso interno. Debe ser revisado y ajustado por el área legal de{" "}
            {siteConfig.name} antes de su publicación definitiva.
          </p>

          <div>
            <h2 className="text-lg font-bold text-brand-darker">1. Objeto</h2>
            <p className="mt-2">
              Este sitio web tiene como propósito informar sobre los servicios, programas y actividades de{" "}
              {siteConfig.name}, así como facilitar la solicitud de recolección de material aprovechable y el
              contacto con la empresa.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-darker">2. Uso del sitio</h2>
            <p className="mt-2">
              El usuario se compromete a utilizar el sitio y sus formularios de forma diligente, suministrando
              información veraz. {siteConfig.name} se reserva el derecho de verificar la información recibida antes
              de agendar una recolección.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-darker">3. Propiedad intelectual</h2>
            <p className="mt-2">
              Los textos, imágenes, logotipos y demás contenidos de este sitio son propiedad de {siteConfig.name} o
              se utilizan con la autorización correspondiente. Su reproducción total o parcial requiere autorización
              previa.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-darker">4. Indicadores y cifras</h2>
            <p className="mt-2">
              Las cifras de impacto ambiental mostradas en el sitio son de referencia y están sujetas a validación
              y aprobación periódica por parte de la empresa.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
