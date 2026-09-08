"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icons";
import { NAV_LINKS } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex flex-col items-center gap-1 rounded-lg bg-brand-dark px-3 py-2 text-white"
        aria-label="Abrir menú"
        aria-expanded={open}
      >
        <Icon name="menu" className="h-6 w-6" />
        <span className="text-[10px] font-medium leading-none">Menú</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-brand-darker/98 text-white">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-semibold">Grupo ambiental CASANARE</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="rounded-lg bg-white/10 p-2"
            >
              <Icon name="close" className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Menú principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-3 text-lg font-medium ${
                  pathname === link.href ? "bg-white/10 text-white" : "text-white/85"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/solicita-tu-recoleccion"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-base font-semibold"
            >
              <Icon name="truck" className="h-5 w-5" />
              Solicita tu recolección
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
