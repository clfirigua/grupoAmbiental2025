"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/Icons";

const inputClasses =
  "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          aceptaPolitica: data.aceptaPolitica === "on",
        }),
      });

      if (!response.ok) throw new Error("request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-2xl bg-brand-tint p-6 text-brand-darker" role="status">
        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
        <p className="text-sm">
          ¡Gracias! Recibimos tu mensaje y te contactaremos pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        name="empresa"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div>
        <label htmlFor="nombre" className="sr-only">
          Nombre completo
        </label>
        <input id="nombre" name="nombre" required placeholder="Nombre completo *" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="correo" className="sr-only">
          Correo electrónico
        </label>
        <input
          id="correo"
          type="email"
          name="correo"
          required
          placeholder="Correo electrónico *"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="telefono" className="sr-only">
          Teléfono
        </label>
        <input id="telefono" name="telefono" required placeholder="Teléfono *" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="asunto" className="sr-only">
          Asunto
        </label>
        <select id="asunto" name="asunto" required defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Asunto *
          </option>
          <option>Recolección de residuos</option>
          <option>Compra de material reciclable</option>
          <option>Asesoría y gestión ambiental</option>
          <option>Educación ambiental</option>
          <option>Alianzas y programas</option>
          <option>Otro</option>
        </select>
      </div>
      <div>
        <label htmlFor="mensaje" className="sr-only">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          placeholder="Mensaje *"
          className={inputClasses}
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-slate-600">
        <input type="checkbox" name="aceptaPolitica" required className="mt-1 h-4 w-4 rounded border-slate-300" />
        Acepto la política de tratamiento de datos.
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-darker px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        <Icon name="send" className="h-4 w-4" />
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}
    </form>
  );
}
