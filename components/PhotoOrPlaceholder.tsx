import Image from "next/image";
import { Icon, type IconName } from "@/components/Icons";

export function PhotoOrPlaceholder({
  src,
  alt,
  icon,
  className = "",
  sizes = "(min-width: 1024px) 400px, 100vw",
  priority = false,
}: {
  src?: string;
  alt: string;
  icon: IconName;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light ${className}`}
      role="img"
      aria-label={alt}
    >
      <Icon name={icon} className="h-16 w-16 text-white/90" strokeWidth={1.2} />
    </div>
  );
}
