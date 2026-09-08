import { NextResponse } from "next/server";
import { z } from "zod";
import { sendNotification } from "@/lib/mailer";

const schema = z.object({
  nombre: z.string().trim().min(2).max(150),
  telefono: z.string().trim().min(7).max(20),
  correo: z.string().trim().email(),
  tipoGenerador: z.string().trim().min(2).max(60),
  direccion: z.string().trim().min(3).max(200),
  barrioVereda: z.string().trim().min(2).max(120),
  referencia: z.string().trim().max(300).optional().or(z.literal("")),
  frecuencia: z.string().trim().min(2).max(60),
  materiales: z.array(z.string()).min(1),
  cantidad: z.string().trim().max(120).optional().or(z.literal("")),
  observaciones: z.string().trim().max(1000).optional().or(z.literal("")),
  aceptaPolitica: z.literal(true),
  empresa: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Datos inválidos." }, { status: 400 });
  }

  const data = parsed.data;

  await sendNotification(`Nueva solicitud de recolección: ${data.nombre}`, [
    ["Nombre / razón social", data.nombre],
    ["Teléfono / WhatsApp", data.telefono],
    ["Correo", data.correo],
    ["Tipo de generador", data.tipoGenerador],
    ["Dirección de recolección", data.direccion],
    ["Barrio / vereda", data.barrioVereda],
    ["Referencia de ubicación", data.referencia || ""],
    ["Frecuencia requerida", data.frecuencia],
    ["Materiales disponibles", data.materiales.join(", ")],
    ["Cantidad aproximada", data.cantidad || ""],
    ["Observaciones", data.observaciones || ""],
  ]);

  return NextResponse.json({ ok: true });
}
