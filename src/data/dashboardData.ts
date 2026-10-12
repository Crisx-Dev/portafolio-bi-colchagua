/*
 * DATA LAYER: Dashboard del caso Colchagua
 * Páginas del reporte Power BI + links de descarga.
 */

export type BiPage = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const dashboardData = {
  intro: {
    title: "Dashboard interactivo",
    description: "El reporte completo en Power BI incluye cinco páginas con análisis cruzado de datos climáticos, económicos y territoriales. Explora las vistas previas a continuación o descarga el archivo para interactuar con los filtros dinámicos.",
  },

  pages: [
    {
      id: "contexto",
      title: "Contexto",
      description: "Panorama general de la provincia: ventas del sector agro, especies frutícolas y empresas por comuna.",
      image: "/images/proyectos/bi-contexto.png",
    },
    {
      id: "vulnerabilidad",
      title: "Vulnerabilidad",
      description: "Ranking y perfil de amenazas por comuna. Cruce de incendios, heladas y dependencia de monocultivo.",
      image: "/images/proyectos/bi-vulnerabilidad.png",
    },
    {
      id: "amenazas",
      title: "Amenazas",
      description: "Análisis climático y territorial: días de calor extremo, heladas e incendios forestales por comuna.",
      image: "/images/proyectos/bi-amenazas.png",
    },
    {
      id: "forecast",
      title: "Forecast",
      description: "Proyecciones 2022-2023 de empleo, ventas y amenazas climáticas mediante regresión y Holt-Winters.",
      image: "/images/proyectos/bi-forecast.png",
    },
    {
      id: "analisis-varios",
      title: "Análisis Varios",
      description: "Efecto dominó sectorial: olas de calor vs. cereales, apicultura y empresas locales.",
      image: "/images/proyectos/bi-analisis-varios.png",
    },
  ] as BiPage[],

  links: {
    repository: "https://github.com/Crisx-Dev/colchagua-bi-analisis",
    pbixDownload: "https://github.com/Crisx-Dev/colchagua-bi-analisis/raw/main/powerbi/colchagua.pbix",
    notebooks: "https://github.com/Crisx-Dev/colchagua-bi-analisis/tree/main/notebooks",
  },
};