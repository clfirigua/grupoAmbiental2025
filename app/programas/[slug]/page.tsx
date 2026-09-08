import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PhotoOrPlaceholder } from "@/components/PhotoOrPlaceholder";
import { Icon } from "@/components/Icons";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PROGRAMS } from "@/lib/data";
import { breadcrumbJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return PROGRAMS.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = PROGRAMS.find((item) => item.slug === slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.description,
    alternates: { canonical: `/programas/${program.slug}` },
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = PROGRAMS.find((item) => item.slug === slug);
  if (!program) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Programas", path: "/programas" },
    { name: program.title, path: `/programas/${program.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHero title={program.title} description={program.short} showMascot={false} />

      <section className="py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <PhotoOrPlaceholder
                src={program.image}
                alt={program.title}
                icon={program.icon}
                className="h-64 w-full rounded-2xl sm:h-80"
                priority
              />
            </Reveal>
            <Reveal delay={80}>
              <p className="text-base text-slate-600">{program.description}</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                    <Icon name="users" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-darker">Público</p>
                    <p className="text-sm text-slate-600">{program.audience}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-darker">Cómo participar</p>
                    <p className="text-sm text-slate-600">{program.howToJoin}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contacto" icon="send">
                  Quiero participar
                </Button>
                <Button href="/programas" variant="outline" className="!border-brand-darker !text-brand-darker">
                  Ver otros programas
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
