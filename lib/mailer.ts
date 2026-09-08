import nodemailer from "nodemailer";

/**
 * Envía la notificación por correo cuando hay credenciales SMTP configuradas
 * (ver .env.example). Si no hay configuración, solo registra la solicitud en
 * el log del servidor para no bloquear el flujo en desarrollo o mientras el
 * cliente entrega las credenciales definitivas.
 */
export async function sendNotification(subject: string, lines: [string, string][]) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, EMAIL_TO } = process.env;
  const html = `<table cellpadding="6">${lines
    .map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${value || "—"}</td></tr>`)
    .join("")}</table>`;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !EMAIL_TO) {
    console.info(`[contacto] SMTP no configurado. Solicitud recibida: ${subject}`, lines);
    return { delivered: false as const };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  await transporter.sendMail({
    from: `"Sitio web Grupo Ambiental Casanare" <${SMTP_USER}>`,
    to: EMAIL_TO,
    subject,
    html,
  });

  return { delivered: true as const };
}
