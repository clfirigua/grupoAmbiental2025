# Grupo Ambiental Casanare — sitio web

Sitio institucional, comercial, educativo y operativo de **Grupo Ambiental Casanare E.S.P.**,
construido en **Next.js 15 (React + App Router)** a partir del brief `requerimientos.docx`
compartido por el cliente. Se eligió Next.js (y no un React SPA plano) porque renderiza
cada página en el servidor: el HTML ya trae el contenido cuando el buscador lo lee, con
metadatos, `sitemap.xml` y `robots.txt` generados automáticamente — el pilar de un buen SEO
desde el primer despliegue.

## Requisitos

- Node.js 18.18+ (probado con Node 22).

## Puesta en marcha

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build     # build de producción
npm run start     # sirve el build de producción
npm run typecheck # chequeo de tipos (TypeScript strict)
```

> Nota: `next lint` fue retirado en Next.js 16 y `eslint-config-next@16` con
> ESLint 9 en modo flat-config todavía choca con `@eslint/eslintrc` en este
> stack (error "Converting circular structure to JSON"). Se dejó `typecheck`
> como validación de calidad; si más adelante se quiere ESLint, conviene
> revisar si `eslint-config-next` ya trae una config flat nativa estable.

## Variables de entorno

Copia `.env.example` a `.env` y complétalo:

- `NEXT_PUBLIC_SITE_URL`: dominio final del sitio. Se usa en canonical, sitemap y Open Graph;
  **debe actualizarse antes de publicar** (hoy apunta a un dominio de ejemplo).
- `EMAIL_TO`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`: credenciales SMTP para que
  los formularios de "Contacto" y "Solicita tu recolección" envíen el correo real al responsable
  que defina la empresa (ver `lib/mailer.ts`). Mientras no estén configuradas, las solicitudes
  quedan registradas en el log del servidor para no bloquear el desarrollo.

## Estructura

- `app/` — una carpeta por página (App Router). Cada página exporta su propio `metadata`
  (título, descripción, canonical) para SEO.
- `components/` — UI compartida (header, footer, tarjetas, formularios, íconos SVG propios).
- `lib/data.ts` — todo el contenido editable: servicios, programas, noticias, indicadores de
  impacto, materiales, preguntas frecuentes. **Este es el archivo que se edita para actualizar
  textos** sin tocar componentes.
- `lib/site.ts` — datos de contacto, redes sociales y enlaces del menú.
- `lib/schema.ts` — JSON-LD (LocalBusiness, BreadcrumbList, NewsArticle, FAQPage) para SEO.
- `app/api/contacto` y `app/api/recoleccion` — endpoints que validan (Zod) y envían los
  formularios.
- `app/sitemap.ts` / `app/robots.ts` — generados automáticamente a partir de `lib/data.ts`.

## Contenido pendiente de validar con el cliente

- **Indicadores de impacto** (árboles protegidos, agua ahorrada, energía ahorrada, CO₂ evitado,
  personas capacitadas, material recuperado): están en 0 a propósito. Son cifras de referencia
  del brief y deben ser validadas y aprobadas por la empresa antes de publicarse (`lib/data.ts`,
  `IMPACT_STATS`).
- **Logos de aliados**: el brief pide publicar únicamente logos autorizados. Por eso la franja de
  "Aliados" muestra solo texto (sin escudos ni logos institucionales) hasta contar con las
  autorizaciones — ver `ALLIES` en `lib/data.ts` y la sección final de `app/page.tsx`.
- **Teléfono/WhatsApp/correo**: los mockups del brief muestran pequeñas variaciones entre sí
  (p. ej. WhatsApp `320 883 1345` vs `320 881 1345`). Se tomó el dato del mockup de la página de
  Contacto; confírmalo con la empresa (`lib/site.ts`).
- **Fotografía real**: el brief pide fotografías grandes y reales, no genéricas. Se usaron las
  fotos reales incluidas en el brief (equipo, planta de clasificación, camión, jornada de
  reciclatón — en `public/images/`). Donde no había foto real disponible (por ejemplo "Recicla
  por un Árbol" o "Recicla por comida para mascotas") se usa un bloque de color de marca con un
  ícono, en vez de una foto de stock genérica; reemplázalo por fotografía real cuando la empresa
  la entregue (`components/PhotoOrPlaceholder.tsx`).
- **Logo y mascota**: se recortaron del propio `requerimientos.docx` como marcador de posición
  (`public/images/logo.png`, `public/images/mascota.png`). Para producción, pide al diseñador los
  archivos finales en vectorial/PNG transparente en alta resolución.
- **Páginas legales** (`/politica-de-privacidad`, `/terminos-y-condiciones`, `/transparencia`):
  son un borrador base (Ley 1581 de 2012) que debe revisar el área legal de la empresa.

## SEO incluido

- Renderizado en servidor (SSR/SSG) — el contenido ya está en el HTML de la primera respuesta.
- `title`/`description`/canonical por página, Open Graph y Twitter Card, imagen `og-image.jpg`.
- JSON-LD: `LocalBusiness` (sitio completo), `BreadcrumbList`, `NewsArticle` y `FAQPage`.
- `sitemap.xml` y `robots.txt` generados desde el mismo contenido de `lib/data.ts` (nunca quedan
  desactualizados).
- Imágenes con `next/image` (tamaños responsivos, `alt` descriptivo, formatos AVIF/WebP).
- Fuentes auto-hospedadas con `next/font` (sin peticiones externas, sin salto de layout).
- HTML semántico, un solo `<h1>` por página, enlace "saltar al contenido" para accesibilidad.

## Pendiente antes de producción

1. Confirmar y ajustar los datos marcados arriba con la empresa.
2. Configurar `NEXT_PUBLIC_SITE_URL` con el dominio real y las credenciales SMTP.
3. Reemplazar logo, mascota y fotografías de marcador de posición por los archivos finales.
4. Revisar las páginas legales con el área jurídica de la empresa.
5. Desplegar (Vercel, o cualquier proveedor con soporte para Next.js) y volver a generar el
   `sitemap.xml` con el dominio definitivo.
