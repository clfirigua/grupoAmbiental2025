import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="py-20">
      <Container className="flex flex-col items-center text-center">
        <Image
          src="/images/mascota.png"
          alt="Mascota de Grupo Ambiental Casanare"
          width={180}
          height={220}
          className="h-40 w-auto"
        />
        <h1 className="mt-6 text-3xl font-bold">Página no encontrada</h1>
        <p className="mt-3 max-w-md text-slate-600">
          Parece que este material ya fue reciclado. Vuelve al inicio para seguir explorando.
        </p>
        <div className="mt-8">
          <Button href="/" icon="arrowRight">
            Volver al inicio
          </Button>
        </div>
      </Container>
    </section>
  );
}
