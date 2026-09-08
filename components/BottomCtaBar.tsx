import Link from "next/link";
import { Icon } from "@/components/Icons";
import { siteConfig } from "@/lib/site";

export function BottomCtaBar() {
  return (
    <div className="bg-brand-darker">
      <div className="mx-auto flex w-full max-w-content flex-col divide-y divide-white/10 sm:flex-row sm:divide-x sm:divide-y-0">
        <Link
          href="/solicita-tu-recoleccion"
          className="flex flex-1 items-center justify-center gap-3 px-6 py-4 text-white transition-colors hover:bg-white/5"
        >
          <Icon name="truck" className="h-5 w-5 shrink-0" />
          <span>
            <span className="block text-sm font-semibold">Solicita tu recolección</span>
            <span className="block text-xs text-white/70">Programa tu recolección fácil y rápido</span>
          </span>
        </Link>
        <a
          href={`https://wa.me/${siteConfig.contact.whatsappHref}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-3 px-6 py-4 text-white transition-colors hover:bg-white/5"
        >
          <Icon name="whatsapp" className="h-5 w-5 shrink-0" />
          <span>
            <span className="block text-sm font-semibold">WhatsApp</span>
            <span className="block text-xs text-white/70">Escríbenos ahora</span>
          </span>
        </a>
      </div>
    </div>
  );
}
