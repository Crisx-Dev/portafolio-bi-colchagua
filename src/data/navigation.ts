/*
 * DATA LAYER: Navegación
 * Define los links del Sidebar por contexto (portafolio vs. proyecto).
 */

export type NavLink = {
  href: string;
  label: string;
  section: string;
};

// Links para la página principal (portafolio)
export const portfolioLinks: NavLink[] = [
  { href: "#inicio", label: "Inicio", section: "inicio" },
  { href: "#tecnologias", label: "Tecnologías", section: "tecnologias" },
  { href: "#proyectos", label: "Proyectos", section: "proyectos" },
];

// Links para la página del caso de estudio Colchagua
export const colchaguaLinks: NavLink[] = [
  { href: "/", label: "← Volver al portafolio", section: "portafolio" },
  { href: "#contexto", label: "Contexto", section: "contexto" },
  { href: "#metodologia", label: "Metodología", section: "metodologia" },
  { href: "#hallazgos", label: "Hallazgos", section: "hallazgos" },
  { href: "#conclusiones", label: "Conclusiones", section: "conclusiones" },
  { href: "#dashboard", label: "Dashboard", section: "dashboard" },
  { href: "#notebooks", label: "Notebooks", section: "notebooks" },
];