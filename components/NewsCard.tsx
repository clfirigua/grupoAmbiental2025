import Link from "next/link";
import type { NewsItem } from "@/lib/data";
import { PhotoOrPlaceholder } from "@/components/PhotoOrPlaceholder";
import { formatDate } from "@/lib/format";

export function NewsCard({ item, horizontal = false }: { item: NewsItem; horizontal?: boolean }) {
  return (
    <Link
      href={`/noticias/${item.slug}`}
      className={`group overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-1 ${
        horizontal ? "flex gap-4" : "flex flex-col"
      }`}
    >
      <PhotoOrPlaceholder
        src={item.image}
        alt={item.title}
        icon={item.icon}
        className={horizontal ? "h-24 w-32 shrink-0 rounded-l-2xl" : "h-44 w-full"}
      />
      <div className={`flex flex-1 flex-col ${horizontal ? "py-3 pr-4" : "p-5"}`}>
        <time dateTime={item.date} className="text-xs font-medium text-brand">
          {formatDate(item.date)}
        </time>
        <h3 className="mt-1 text-sm font-semibold text-brand-darker line-clamp-2">{item.title}</h3>
        {!horizontal && <p className="mt-2 text-sm text-slate-600 line-clamp-2">{item.excerpt}</p>}
      </div>
    </Link>
  );
}
