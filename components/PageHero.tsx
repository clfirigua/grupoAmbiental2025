import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";

export function PageHero({
  title,
  description,
  children,
  showMascot = true,
}: {
  title: string;
  description: string;
  children?: ReactNode;
  showMascot?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-darker via-brand-dark to-brand">
      <Container className="relative flex flex-col items-start gap-6 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-4 text-base text-white/85 sm:text-lg">{description}</p>
          {children}
        </div>
        {showMascot && (
          <Image
            src="/images/mascota.png"
            alt="Mascota de Grupo Ambiental Casanare saludando"
            width={220}
            height={270}
            className="hidden h-56 w-auto shrink-0 drop-shadow-2xl sm:block lg:h-64"
            priority
          />
        )}
      </Container>
    </section>
  );
}
