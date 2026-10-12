/*
 * DATA LAYER: Navegación
 */

export type NavSubLink = {
  href: string;
  label: string;
  section: string;
};

export type NavLink = {
  href: string;
  label: string;
  section: string;
  subLinks?: NavSubLink[];
};

// Links para la página principal (portafolio)
export const portfolioLinks: NavLink[] = [
  { href: "#inicio", label: "Inicio", section: "inicio" },
  { href: "#tecnologias", label: "Tecnologías", section: "tecnologias" },
  { href: "#proyectos", label: "Proyectos", section: "proyectos" },
  { href: "#contacto", label: "Contacto", section: "contacto" },
];

// Links para la página del caso de estudio Colchagua
export const colchaguaLinks: NavLink[] = [
  { href: "/", label: "← Volver al portafolio", section: "portafolio" },
  { href: "#contexto", label: "Contexto", section: "contexto" },
  { href: "#metodologia", label: "Metodología", section: "metodologia" },
  {
    href: "#hallazgos",
    label: "Hallazgos",
    section: "hallazgos",
    subLinks: [
      { href: "#h1", label: "H1", section: "h1" },
      { href: "#h2", label: "H2", section: "h2" },
      { href: "#h3", label: "H3", section: "h3" },
      { href: "#h4", label: "H4", section: "h4" },
    ],
  },
  { href: "#conclusiones", label: "Conclusiones", section: "conclusiones" },
  { href: "#dashboard", label: "Dashboard", section: "dashboard" },
];