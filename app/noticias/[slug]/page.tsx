import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PhotoOrPlaceholder } from "@/components/PhotoOrPlaceholder";
import { NewsCard } from "@/components/NewsCard";
import { Reveal } from "@/components/Reveal";
import { NEWS } from "@/lib/data";
import { formatDate } from "@/lib/format";
import { breadcrumbJsonLd, newsArticleJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return NEWS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = NEWS.find((news) => news.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/noticias/${item.slug}` },
    openGraph: item.image ? { images: [{ url: item.image }] } : undefined,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = NEWS.find((news) => news.slug === slug);
  if (!item) notFound();

  const related = NEWS.filter((news) => news.slug !== item.slug).slice(0, 3);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Noticias", path: "/noticias" },
    { name: item.title, path: `/noticias/${item.slug}` },
  ]);
  const article = newsArticleJsonLd({
    title: item.title,
    date: item.date,
    excerpt: item.excerpt,
    path: `/noticias/${item.slug}`,
    image: item.image,
  });

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, article]) }}
      />
      <article className="py-14">
        <Container className="max-w-3xl">
          <Reveal>
            <time dateTime={item.date} className="text-sm font-semibold text-brand">
              {formatDate(item.date)}
            </time>
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{item.title}</h1>
          </Reveal>

          <Reveal delay={80}>
            <PhotoOrPlaceholder
              src={item.image}
              alt={item.title}
              icon={item.icon}
              className="mt-8 h-64 w-full rounded-2xl sm:h-96"
              priority
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 text-lg leading-relaxed text-slate-700">{item.content}</p>
          </Reveal>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="border-t border-black/5 py-14">
          <Container>
            <h2 className="text-xl font-bold">Más noticias</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((news) => (
                <NewsCard key={news.slug} item={news} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
