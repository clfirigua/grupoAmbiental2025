export const siteConfig = {
  name: "Grupo Ambiental Casanare E.S.P.",
  shortName: "Grupo Ambiental Casanare",
  slogan: "Transformamos residuos en oportunidades",
  positioning:
    "La solución para Yopal y Casanare en la gestión de residuos sólidos aprovechables.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.grupoambientalcasanare.com",
  description:
    "Empresa de gestión y aprovechamiento de residuos sólidos en Yopal, Casanare: recolección selectiva, estación de clasificación (E.C.A.), compra de material reciclable, asesoría ambiental y educación ambiental.",
  locale: "es_CO",
  contact: {
    phone: "320 925 7794",
    phoneHref: "+573209257794",
    whatsapp: "320 883 1345",
    whatsappHref: "573208831345",
    email: "grupoambientalcasanareaso@gmail.com",
    address: "Calle 60 # 2D-03, Yopal, Casanare, Colombia",
    addressLocality: "Yopal",
    addressRegion: "Casanare",
    schedule: [
      { label: "Lunes a viernes", value: "7:30 a. m. – 12:00 m. / 2:00 p. m. – 5:00 p. m." },
      { label: "Sábados", value: "7:30 a. m. – 12:00 m." },
    ],
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/programas", label: "Programas" },
  { href: "/educacion-ambiental", label: "Educación ambiental" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
];
