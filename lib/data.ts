import type { IconName } from "@/components/Icons";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  image?: string;
  icon: IconName;
};

export const SERVICES: Service[] = [
  {
    slug: "recoleccion-selectiva",
    title: "Recolección Selectiva",
    short: "Recogemos materiales aprovechables de hogares, empresas e instituciones.",
    description:
      "Programamos rutas de recolección para hogares, comercios, empresas e instituciones en Yopal y Casanare, facilitando la entrega de materiales aprovechables ya separados en la fuente.",
    bullets: [
      "Rutas fijas y solicitudes puntuales bajo demanda.",
      "Atención a hogares, comercios, empresas e instituciones.",
      "Vehículos identificados y personal capacitado.",
    ],
    image: "/images/camion.jpg",
    icon: "truck",
  },
  {
    slug: "estacion-clasificacion-aprovechamiento",
    title: "Estación de Clasificación y Aprovechamiento (E.C.A.)",
    short: "Clasificamos y preparamos los materiales para su aprovechamiento.",
    description:
      "En nuestra Estación de Clasificación y Aprovechamiento separamos, clasificamos y preparamos los materiales reciclables para reintegrarlos a la cadena productiva.",
    bullets: [
      "Separación por tipo de material: papel, cartón, plástico, vidrio y metales.",
      "Procesos que cumplen la normativa ambiental vigente.",
      "Generación de empleo local formal.",
    ],
    image: "/images/clasificacion.jpg",
    icon: "recycle",
  },
  {
    slug: "compra-material-reciclable",
    title: "Compra de Material Reciclable",
    short: "Compramos materiales reciclables con precios justos y transparentes.",
    description:
      "Compramos material reciclable aprovechable a recicladores, hogares y empresas, con pesaje transparente y precios justos, apoyando la economía circular local.",
    bullets: [
      "Precios justos y transparentes por kilo.",
      "Compra a recicladores de oficio, hogares y empresas.",
      "Pesaje verificado en nuestras instalaciones.",
    ],
    image: "/images/reciclaton.jpg",
    icon: "cart",
  },
  {
    slug: "asesoria-gestion-ambiental",
    title: "Asesoría y Gestión Ambiental",
    short: "Acompañamos a empresas e instituciones en su gestión ambiental.",
    description:
      "Acompañamos a empresas e instituciones en el diseño e implementación de planes de gestión ambiental y aprovechamiento de residuos, ajustados a la normativa aplicable.",
    bullets: [
      "Diagnóstico y plan de gestión de residuos.",
      "Acompañamiento en normativa ambiental.",
      "Reportes y seguimiento de indicadores.",
    ],
    icon: "briefcase",
  },
  {
    slug: "educacion-capacitacion-ambiental",
    title: "Educación y Capacitación Ambiental",
    short: "Formamos y sensibilizamos para construir una cultura ambiental.",
    description:
      "Diseñamos talleres y capacitaciones para niños, jóvenes, hogares, empresas e instituciones sobre separación en la fuente, materiales aprovechables y economía circular.",
    bullets: [
      "Talleres para colegios, empresas e instituciones.",
      "Material didáctico y actividades prácticas.",
      "Jornadas de sensibilización comunitaria.",
    ],
    icon: "graduation",
  },
];

export type Program = {
  slug: string;
  title: string;
  short: string;
  description: string;
  audience: string;
  howToJoin: string;
  image?: string;
  icon: IconName;
  featured: boolean;
};

export const PROGRAMS: Program[] = [
  {
    slug: "recicla-por-un-arbol",
    title: "Recicla por un Árbol",
    short: "Recicla y aportas a la siembra de árboles en nuestro territorio.",
    description:
      "Por cada meta de material reciclable entregado, apoyamos la siembra de árboles nativos en Casanare junto con la comunidad.",
    audience: "Hogares, empresas e instituciones educativas.",
    howToJoin:
      "Entrega tus materiales aprovechables en nuestra E.C.A. o solicita una recolección y menciona que participas en el programa.",
    icon: "leaf",
    featured: true,
  },
  {
    slug: "recicla-por-comida-para-mascotas",
    title: "Recicla por comida para mascotas",
    short: "Tu reciclaje se convierte en alimento para peluditos.",
    description:
      "Convertimos parte del valor del material reciclable entregado en donaciones de alimento para fundaciones de protección animal de la región.",
    audience: "Hogares y comunidad en general.",
    howToJoin: "Trae tus materiales limpios y separados a nuestros puntos de acopio.",
    icon: "paw",
    featured: true,
  },
  {
    slug: "ecocolegios-casanare",
    title: "EcoColegios Casanare",
    short: "Educación ambiental para formar generaciones conscientes.",
    description:
      "Programa de educación ambiental en instituciones educativas: separación en la fuente, economía circular y jornadas de reciclaje escolar.",
    audience: "Colegios e instituciones educativas de Yopal y Casanare.",
    howToJoin: "Escríbenos desde la institución educativa para agendar el programa.",
    icon: "graduation",
    featured: true,
  },
  {
    slug: "guardianes-del-futuro",
    title: "Guardianes del Futuro",
    short: "Formamos a niños y jóvenes como agentes de cambio ambiental.",
    description:
      "Espacios formativos para niños y jóvenes que promueven hábitos de consumo responsable y cuidado del territorio.",
    audience: "Niños, niñas y jóvenes de Casanare.",
    howToJoin: "Consulta la agenda de jornadas próximas o solicita una visita para tu institución.",
    icon: "users",
    featured: false,
  },
  {
    slug: "puntos-verdes",
    title: "Puntos Verdes",
    short: "Facilitamos la entrega de materiales reciclables en puntos estratégicos.",
    description:
      "Puntos de acopio distribuidos en la ciudad para que la comunidad entregue sus materiales aprovechables de forma fácil y cercana.",
    audience: "Comunidad en general.",
    howToJoin: "Consulta el punto verde más cercano escribiéndonos por WhatsApp.",
    image: "/images/clasificacion.jpg",
    icon: "mappin",
    featured: false,
  },
  {
    slug: "casanare-limpio",
    title: "Casanare Limpio",
    short: "Jornadas de limpieza y recuperación de espacios públicos y naturales.",
    description:
      "Jornadas comunitarias de limpieza y recuperación de espacios públicos, rondas hídricas y zonas naturales de Casanare.",
    audience: "Comunidad, empresas e instituciones aliadas.",
    howToJoin: "Súmate como voluntario o como aliado de la próxima jornada.",
    image: "/images/reciclaton.jpg",
    icon: "recycle",
    featured: false,
  },
];

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  icon: IconName;
};

export const NEWS: NewsItem[] = [
  {
    slug: "jornada-recoleccion-selectiva-el-remanso",
    title: "Jornada de recolección selectiva en el barrio El Remanso",
    date: "2025-05-14",
    excerpt:
      "Unimos esfuerzos con la comunidad para aumentar el aprovechamiento de materiales reciclables.",
    content:
      "Realizamos una jornada especial de recolección selectiva en el barrio El Remanso, en Yopal, con el apoyo de líderes comunitarios. Durante la jornada recogimos material reciclable separado en la fuente y reforzamos con los vecinos las claves para una correcta separación en casa.",
    image: "/images/equipo.jpg",
    icon: "truck",
  },
  {
    slug: "reciclaton-a-tu-barrio",
    title: "Reciclatón a tu barrio: más de 1.000 kg de material reciclable recolectado",
    date: "2025-05-09",
    excerpt:
      "Nuestra jornada de reciclatón barrial superó las mil libras de material aprovechable recolectado.",
    content:
      "La jornada 'Reciclatón a tu barrio' recorrió varios sectores de Yopal recogiendo material reciclable puerta a puerta. Gracias a la participación de la comunidad superamos los 1.000 kg de material aprovechable, que ahora sigue su camino hacia nuestra Estación de Clasificación y Aprovechamiento.",
    image: "/images/reciclaton.jpg",
    icon: "recycle",
  },
  {
    slug: "eca-fortalece-aprovechamiento",
    title: "Nuestra E.C.A. fortalece el aprovechamiento de materiales",
    date: "2025-05-09",
    excerpt: "Mejoramos nuestros procesos de clasificación para aprovechar más materiales.",
    content:
      "En nuestra Estación de Clasificación y Aprovechamiento seguimos optimizando los procesos de separación de papel, cartón, plástico, vidrio y metales, fortaleciendo la calidad del material que entregamos a la cadena de reciclaje.",
    image: "/images/clasificacion.jpg",
    icon: "sort",
  },
  {
    slug: "taller-ambiental-institucion-luis-hernandez",
    title: "Taller ambiental con estudiantes de la Institución Luis Hernández",
    date: "2025-05-02",
    excerpt: "Formamos a estudiantes en separación en la fuente y economía circular.",
    content:
      "Como parte de nuestro programa EcoColegios Casanare, realizamos un taller ambiental con estudiantes de la Institución Luis Hernández, enfocado en separación en la fuente, materiales aprovechables y hábitos de consumo responsable.",
    icon: "graduation",
  },
];

export type ImpactStat = {
  key: string;
  label: string;
  value: number;
  icon: IconName;
};

// Nota: estos valores son de referencia. Deben ser validados y aprobados por
// la empresa antes de publicarse en producción (ver brief, sección 4).
export const IMPACT_STATS: ImpactStat[] = [
  { key: "arboles", label: "Árboles protegidos", value: 0, icon: "leaf" },
  { key: "agua", label: "Agua ahorrada (L)", value: 0, icon: "drop" },
  { key: "energia", label: "Energía ahorrada (kWh)", value: 0, icon: "bolt" },
  { key: "co2", label: "CO₂ evitado (Kg)", value: 0, icon: "cloud" },
  { key: "personas", label: "Personas capacitadas", value: 0, icon: "users" },
  { key: "material", label: "Material recuperado (Kg)", value: 0, icon: "recycle" },
];

export const MATERIALS = ["Papel", "Cartón", "Plástico", "Vidrio", "Metales", "Otros aprovechables"];

export const USER_TYPES = ["Hogar", "Comercio", "Empresa", "Institución", "Otro"];

export const FREQUENCIES = ["Única vez", "Semanal", "Quincenal", "Mensual", "Otra"];

export const PROCESS_STEPS = [
  { title: "Solicitar", description: "Completas el formulario o nos escribes por WhatsApp." },
  { title: "Agendar", description: "Nuestro equipo confirma fecha y horario de recolección." },
  { title: "Recoger", description: "Pasamos por tu material aprovechable en la dirección indicada." },
  { title: "Aprovechar", description: "El material entra a nuestra E.C.A. para su clasificación y aprovechamiento." },
];

export const ALLIES = [
  "Alcaldía de Yopal",
  "Gobernación de Casanare",
  "SENA Regional Casanare",
  "Recicladores de Colombia",
  "Corporinoquia",
];

export const FAQS = [
  {
    question: "¿Qué materiales reciben para reciclaje?",
    answer:
      "Recibimos papel, cartón, plástico, vidrio, metales y otros materiales aprovechables. Si tienes dudas sobre un material específico, escríbenos por WhatsApp.",
  },
  {
    question: "¿Tiene algún costo solicitar la recolección?",
    answer:
      "La solicitud de recolección selectiva no tiene costo. En algunos casos podemos comprar el material aprovechable según su tipo y cantidad.",
  },
  {
    question: "¿En qué zonas prestan el servicio?",
    answer: "Prestamos el servicio en Yopal y en municipios de Casanare. Cuéntanos tu ubicación en el formulario de recolección.",
  },
  {
    question: "¿Cómo puedo vincular a mi empresa o colegio?",
    answer:
      "Escríbenos por el formulario de contacto o por WhatsApp contándonos el tipo de acompañamiento que necesitas (asesoría ambiental, educación ambiental o recolección corporativa).",
  },
];
