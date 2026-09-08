import { Icon } from "@/components/Icons";
import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hola, quiero información sobre la gestión y aprovechamiento de residuos de Grupo Ambiental Casanare."
  );

  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsappHref}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <Icon name="whatsapp" className="h-7 w-7" strokeWidth={1.6} />
    </a>
  );
}
