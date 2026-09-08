import type { MetadataRoute } from "next";
import { NEWS, PROGRAMS, SERVICES } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/quienes-somos",
    "/servicios",
    "/programas",
    "/educacion-ambiental",
    "/noticias",
    "/contacto",
    "/solicita-tu-recoleccion",
    "/transparencia",
    "/politica-de-privacidad",
    "/terminos-y-condiciones",
  ];

  const dynamicRoutes = [
    ...SERVICES.map((service) => `/servicios/${service.slug}`),
    ...PROGRAMS.map((program) => `/programas/${program.slug}`),
    ...NEWS.map((item) => `/noticias/${item.slug}`),
  ];

  const now = new Date();

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
