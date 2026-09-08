import Link from "next/link";
import type { Service } from "@/lib/data";
import { Icon } from "@/components/Icons";
import { PhotoOrPlaceholder } from "@/components/PhotoOrPlaceholder";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-1"
    >
      <PhotoOrPlaceholder
        src={service.image}
        alt={service.title}
        icon={service.icon}
        className="h-40 w-full"
      />
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-tint text-brand">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
        <h3 className="text-base font-semibold text-brand-darker">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
          Conocer más
          <Icon name="arrowRight" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
