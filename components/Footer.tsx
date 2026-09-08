import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { Container } from "@/components/Container";
import { NAV_LINKS, siteConfig } from "@/lib/site";
import { SERVICES } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-xl bg-white p-2">
            <Image
              src="/images/logo.png"
              alt={`${siteConfig.name} — logo`}
              width={200}
              height={64}
              className="h-11 w-auto"
            />
          </div>
          <p className="mt-4 text-sm text-white/70">{siteConfig.slogan}.</p>
          <div className="mt-4 flex items-center gap-3">
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Icon name="facebook" className="h-4 w-4" />
            </a>
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Icon name="instagram" className="h-4 w-4" />
            </a>
            <a href={siteConfig.social.youtube} aria-label="YouTube" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Icon name="youtube" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/80">Enlaces rápidos</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/80">Servicios</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link href={`/servicios/${service.slug}`} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/80">Contacto</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`tel:${siteConfig.contact.phoneHref}`} className="hover:text-white">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white break-all">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="mappin" className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{siteConfig.contact.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} {siteConfig.name} Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/transparencia" className="hover:text-white">
              Transparencia
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-white">
              Política de privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="hover:text-white">
              Términos y condiciones
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
