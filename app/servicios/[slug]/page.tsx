import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PhotoOrPlaceholder } from "@/components/PhotoOrPlaceholder";
import { Icon } from "@/components/Icons";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/lib/data";
import { breadcrumbJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/servicios/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((item) => item.slug !== service.slug).slice(0, 3);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: service.title, path: `/servicios/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHero title={service.title} description={service.short} showMascot={false} />

      <section className="py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <PhotoOrPlaceholder
                src={service.image}
                alt={service.title}
                icon={service.icon}
                className="h-64 w-full rounded-2xl sm:h-80"
                priority
              />
            </Reveal>
            <Reveal delay={80}>
              <p className="text-base text-slate-600">{service.description}</p>
              <ul className="mt-6 space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-slate-700">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/solicita-tu-recoleccion" icon="truck">
                  Solicita tu recolección
                </Button>
                <Button href="/contacto" variant="outline" className="!text-brand-darker !border-brand-darker">
                  Hablar con un asesor
                </Button>
              </div>
            </Reveal>
          </div>

          {otherServices.length > 0 && (
            <div className="mt-16 border-t border-black/5 pt-10">
              <h2 className="text-xl font-bold">Otros servicios</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {otherServices.map((item) => (
                  <a
                    key={item.slug}
                    href={`/servicios/${item.slug}`}
                    className="rounded-2xl bg-brand-tint p-5 text-sm font-semibold text-brand-darker transition-colors hover:bg-brand/10"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
