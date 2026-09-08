import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { MobileNav } from "@/components/MobileNav";
import { Container } from "@/components/Container";
import { NAV_LINKS, siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="hidden bg-brand-darker text-white lg:block">
        <Container className="flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Icon name="mappin" className="h-4 w-4" />
              {siteConfig.contact.address}
            </span>
            <a href={`tel:${siteConfig.contact.phoneHref}`} className="flex items-center gap-1.5 hover:text-brand-light">
              <Icon name="phone" className="h-4 w-4" />
              {siteConfig.contact.phone}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-1.5 hover:text-brand-light">
              <Icon name="mail" className="h-4 w-4" />
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/70">Síguenos:</span>
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-brand-light">
              <Icon name="facebook" className="h-4 w-4" />
            </a>
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-brand-light">
              <Icon name="instagram" className="h-4 w-4" />
            </a>
            <a href={siteConfig.social.youtube} aria-label="YouTube" className="hover:text-brand-light">
              <Icon name="youtube" className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} — Inicio`}>
          <Image
            src="/images/logo.png"
            alt={`${siteConfig.name} — logo`}
            width={220}
            height={72}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Menú principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-darker/90 hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/solicita-tu-recoleccion"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-dark"
          >
            <Icon name="truck" className="h-4 w-4" />
            Solicita tu recolección
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
