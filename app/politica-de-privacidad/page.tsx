import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de tratamiento de datos personales de Grupo Ambiental Casanare E.S.P.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: false, follow: true },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <PageHero
        title="Política de privacidad"
        description="Tratamiento de datos personales conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013."
        showMascot={false}
      />
      <section className="py-14">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-slate-700">
          <p className="rounded-xl bg-brand-tint p-4 text-brand-darker">
            Este es un borrador base para uso interno. Debe ser revisado y ajustado por el área legal de{" "}
            {siteConfig.name} antes de su publicación definitiva.
          </p>

          <div>
            <h2 className="text-lg font-bold text-brand-darker">1. Responsable del tratamiento</h2>
            <p className="mt-2">
              {siteConfig.name}, con domicilio en {siteConfig.contact.address}, es responsable del tratamiento de
              los datos personales recolectados a través de este sitio web, en particular mediante los formularios
              de contacto y de solicitud de recolección.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-darker">2. Finalidad del tratamiento</h2>
            <p className="mt-2">
              Los datos suministrados se utilizan para: (i) gestionar solicitudes de recolección de material
              aprovechable, (ii) responder consultas realizadas por los canales de contacto, (iii) enviar
              información sobre programas y servicios cuando el titular lo autorice, y (iv) dar cumplimiento a
              obligaciones legales y contractuales.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-darker">3. Derechos del titular</h2>
            <p className="mt-2">
              De acuerdo con la Ley 1581 de 2012, el titular de los datos personales tiene derecho a conocer,
              actualizar, rectificar y suprimir su información, así como a revocar la autorización otorgada para
              su tratamiento, mediante solicitud dirigida a{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-brand">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-darker">4. Seguridad de la información</h2>
            <p className="mt-2">
              {siteConfig.name} adopta medidas técnicas, humanas y administrativas razonables para proteger los
              datos personales frente a acceso no autorizado, pérdida o uso indebido.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
