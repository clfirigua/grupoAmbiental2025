"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/Icons";
import { FREQUENCIES, MATERIALS, USER_TYPES } from "@/lib/data";

const inputClasses =
  "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

type Status = "idle" | "loading" | "success" | "error";

export function RecoleccionForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const materiales = formData.getAll("materiales");
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/recoleccion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          materiales,
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
        <Icon name="check" className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
        <div>
          <p className="font-semibold">¡Solicitud recibida!</p>
          <p className="mt-1 text-sm">
            Nuestro equipo se pondrá en contacto contigo para agendar tu recolección.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="empresa"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="mb-1 text-sm font-semibold text-brand-darker sm:col-span-2">Datos de contacto</legend>
        <input name="nombre" required placeholder="Nombre completo o razón social *" className={inputClasses} />
        <input name="telefono" required placeholder="Teléfono / WhatsApp *" className={inputClasses} />
        <input type="email" name="correo" required placeholder="Correo electrónico *" className={inputClasses} />
        <select name="tipoGenerador" required defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Tipo de generador *
          </option>
          {USER_TYPES.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </fieldset>

      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="mb-1 text-sm font-semibold text-brand-darker sm:col-span-2">
          Lugar de recolección
        </legend>
        <input
          name="direccion"
          required
          placeholder="Dirección de recolección *"
          className={`${inputClasses} sm:col-span-2`}
        />
        <input name="barrioVereda" required placeholder="Barrio / vereda *" className={inputClasses} />
        <input name="referencia" placeholder="Referencia de ubicación" className={inputClasses} />
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-brand-darker">Materiales disponibles *</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {MATERIALS.map((material) => (
            <label
              key={material}
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700"
            >
              <input type="checkbox" name="materiales" value={material} className="h-4 w-4 rounded border-slate-300" />
              {material}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="sr-only">Frecuencia y cantidad</legend>
        <select name="frecuencia" required defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Frecuencia requerida *
          </option>
          {FREQUENCIES.map((frequency) => (
            <option key={frequency}>{frequency}</option>
          ))}
        </select>
        <input name="cantidad" placeholder="Cantidad aproximada (opcional)" className={inputClasses} />
      </fieldset>

      <textarea name="observaciones" rows={3} placeholder="Observaciones" className={inputClasses} />

      <label className="flex items-start gap-2 text-sm text-slate-600">
        <input type="checkbox" name="aceptaPolitica" required className="mt-1 h-4 w-4 rounded border-slate-300" />
        Acepto la política de tratamiento de datos personales.
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Enviando solicitud..." : "Solicitar recolección"}
        <Icon name="truck" className="h-4 w-4" />
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}
    </form>
  );
}
