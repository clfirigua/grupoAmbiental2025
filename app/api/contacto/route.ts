import { NextResponse } from "next/server";
import { z } from "zod";
import { sendNotification } from "@/lib/mailer";

const schema = z.object({
  nombre: z.string().trim().min(2).max(120),
  correo: z.string().trim().email(),
  telefono: z.string().trim().min(7).max(20),
  asunto: z.string().trim().min(2).max(120),
  mensaje: z.string().trim().min(5).max(2000),
  aceptaPolitica: z.literal(true),
  // Campo honeypot: los formularios reales lo dejan vacío; los bots suelen
  // rellenarlo. Ver components/ContactForm.tsx.
  empresa: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Datos inválidos." }, { status: 400 });
  }

  const { nombre, correo, telefono, asunto, mensaje } = parsed.data;

  await sendNotification(`Nuevo mensaje de contacto: ${asunto}`, [
    ["Nombre", nombre],
    ["Correo", correo],
    ["Teléfono", telefono],
    ["Asunto", asunto],
    ["Mensaje", mensaje],
  ]);

  return NextResponse.json({ ok: true });
}
