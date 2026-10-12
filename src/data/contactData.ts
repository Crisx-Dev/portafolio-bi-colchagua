/*
 * DATA LAYER: Contacto y footer.
 */

export const contactData = {
  heading: {
    title: "Trabajemos juntos",
    description: "Estoy disponible para proyectos de Business Intelligence, análisis de datos y desarrollo de soluciones analíticas. Si tienes una idea o consulta, escríbeme.",
  },

  channels: [
    {
      id: "email",
      label: "Email",
      value: "cristobalv774@gmail.com",
      href: "mailto:cristobalv774@gmail.com",
      icon: "mail",
    },
    {
      id: "github",
      label: "GitHub",
      value: "@Crisx-Dev",
      href: "https://github.com/Crisx-Dev",
      icon: "github",
    },
  ],

  form: {
    endpoint: "https://formspree.io/f/mppqjkyd",
  },

  aiDeclaration: {
    title: "Declaración de uso de Inteligencia Artificial",
    text: "En conformidad con las directrices de la industria del dato y la rúbrica del curso ISI802, se declara el uso transparente de Inteligencia Artificial como herramienta de aceleración tecnológica.",
    tools: ["Google Gemini", "DeepSeek", "Claude"],
    assisted: "Apoyo en la auditoría estructural del modelo de datos, depuración de sintaxis DAX, generación de scripts visuales en Python y asistencia en la implementación del sitio web.",
    responsibility: "La formulación del problema, la selección de fuentes, la validación metodológica y la interpretación de los hallazgos son autoría intelectual exclusiva del autor, quien comprende y defiende cada decisión técnica documentada.",
  },

  footer: {
    tagline: "Portafolio de Business Intelligence",
    stack: "Astro · React · Tailwind CSS",
    year: new Date().getFullYear(),
  },
};