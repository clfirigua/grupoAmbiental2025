import Link from "next/link";
import type { Program } from "@/lib/data";
import { Icon } from "@/components/Icons";
import { PhotoOrPlaceholder } from "@/components/PhotoOrPlaceholder";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/programas/${program.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="relative">
        <PhotoOrPlaceholder src={program.image} alt={program.title} icon={program.icon} className="h-48 w-full" />
        <span className="absolute -bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-soft ring-4 ring-white">
          <Icon name={program.icon} className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 pt-8">
        <h3 className="text-base font-semibold text-brand-darker">{program.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{program.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
          Conocer más
          <Icon name="arrowRight" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
