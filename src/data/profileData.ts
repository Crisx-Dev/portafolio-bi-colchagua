/*
 * DATA LAYER: Perfil Profesional
 * Fuente única de verdad para la sección Hero y Tecnologías.
 */

export const profileData = {
  greeting: "Hola, soy",
  name: "Cristóbal Vargas",
  role: "Ingeniero en Business Intelligence",
  tagline: "Transformo datos complejos en decisiones ejecutivas.",
  description: "Especializado en ingeniería de datos, modelado dimensional y machine learning aplicado. Diseño pipelines ETL, construyo datamarts en esquema estrella y despliego soluciones analíticas con foco en el negocio.",

  links: {
    github: "https://github.com/crisx-dev",
    linkedin: "",
    cv: "",
  },

  // Stack técnico (se usa en la sección Tecnologías, no en el Hero)
  stack: [
    {
      category: "Lenguajes",
      items: ["Python", "Javascript", "Php", "Csharp", "Html5", "Css3"],
    },
    {
      category: "Datos & ML",
      items: ["Pandas", "Scikitlearn", "Numpy", "Statsmodels"],
    },
    {
      category: "Business Intelligence",
      items: ["Powerbi", "Dax"],
    },
    {
      category: "Bases de Datos",
      items: ["Mysql"],
    },
    {
      category: "Desarrollo Web",
      items: ["Astro", "React", "Tailwindcss"],
    },
  ],
};