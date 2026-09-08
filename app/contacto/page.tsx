import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Comunícate con Grupo Ambiental Casanare: teléfono, WhatsApp, correo, dirección, horario de atención y formulario de contacto.",
  alternates: { canonical: "/contacto" },
};

const CHANNELS = [
  {
    icon: "phone" as const,
    title: "Teléfono",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phoneHref}`,
  },
  {
    icon: "whatsapp" as const,
    title: "WhatsApp",
    value: siteConfig.contact.whatsapp,
    href: `https://wa.me/${siteConfig.contact.whatsappHref}`,
  },
  {
    icon: "mail" as const,
    title: "Correo",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
];

export default function ContactoPage() {
  const mapQuery = encodeURIComponent(`${siteConfig.contact.address}`);

  return (
    <>
      <PageHero
        title="Contacto"
        description="Estamos aquí para ayudarte. Conversemos sobre cómo podemos trabajar juntos por un Casanare más limpio y sostenible."
      />

      <section className="py-14">
        <Container>
          <Reveal>
            <h2 className="text-xl font-bold">Canales de contacto</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {CHANNELS.map((channel, index) => (
              <Reveal key={channel.title} delay={index * 60}>
                <a
                  href={channel.href}
                  target={channel.icon === "whatsapp" ? "_blank" : undefined}
                  rel={channel.icon === "whatsapp" ? "noopener noreferrer" : undefined}
                  className="flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-soft ring-1 ring-black/5 transition-transform hover:-translate-y-1"
                >
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name={channel.icon} className="h-6 w-6" />
                  </span>
                  <p className="text-sm font-semibold text-brand-darker">{channel.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{channel.value}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <Reveal delay={60}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-soft ring-1 ring-black/5">
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <Icon name="mappin" className="h-6 w-6" />
                </span>
                <p className="text-sm font-semibold text-brand-darker">Dirección</p>
                <p className="mt-1 text-sm text-slate-600">{siteConfig.contact.address}</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-soft ring-1 ring-black/5">
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <Icon name="clock" className="h-6 w-6" />
                </span>
                <p className="text-sm font-semibold text-brand-darker">Horario de atención</p>
                {siteConfig.contact.schedule.map((slot) => (
                  <p key={slot.label} className="mt-1 text-sm text-slate-600">
                    <span className="font-medium">{slot.label}:</span> {slot.value}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-soft ring-1 ring-black/5">
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <Icon name="headset" className="h-6 w-6" />
                </span>
                <p className="text-sm font-semibold text-brand-darker">Atención personalizada</p>
                <p className="mt-1 text-sm text-slate-600">
                  Nuestro equipo está listo para resolver tus dudas y brindarte soluciones.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <h2 className="flex items-center gap-2 text-xl font-bold">
                  <Icon name="send" className="h-5 w-5 text-brand" />
                  Envíanos un mensaje
                </h2>
                <p className="mt-1 text-sm text-slate-600">Completa el formulario y te contactaremos pronto.</p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div>
                <h2 className="flex items-center gap-2 text-xl font-bold">
                  <Icon name="map" className="h-5 w-5 text-brand" />
                  ¿Dónde estamos?
                </h2>
                <p className="mt-1 text-sm text-slate-600">Visítanos en nuestras instalaciones.</p>
                <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/5">
                  <iframe
                    title="Ubicación de Grupo Ambiental Casanare en el mapa"
                    src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                    className="h-72 w-full sm:h-80"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="mt-4 rounded-2xl bg-brand-tint p-5">
                  <p className="text-sm font-semibold text-brand-darker">{siteConfig.name}</p>
                  <p className="text-sm text-slate-600">{siteConfig.contact.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                  >
                    Abrir en Google Maps
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
