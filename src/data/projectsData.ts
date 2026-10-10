/*
 * DATA LAYER: Proyectos
 * Datos de cada proyecto para las tarjetas y la modal de preview.
 * Las imágenes viven en public/images/proyectos/ y se referencian sin "public".
 */

export type Project = {
  id: string;
  category: string;
  year: string;
  period?: string;
  title: string;
  shortDescription: string;
  preview: {
    description: string;
    images: {
      biDashboard: {
        src: string;
        alt: string;
        caption: string;
      };
      heroPreview: {
        src: string;
        alt: string;
        caption: string;
      };
    };
  };
  tags: string[];
  link: string;
  linkLabel: string;
};

export const projectsData: Project[] = [
  {
    id: "colchagua",
    category: "Business Intelligence",
    year: "2026",
    period: "2018 — 2021",
    title: "Vulnerabilidad Territorial en Colchagua",
    shortDescription: "Análisis cruzado de datos climáticos, económicos y territoriales para identificar qué comunas y PYMEs de la provincia están más expuestas a shocks externos. Período de análisis: 2018 — 2021.",
    preview: {
      description: "El proyecto se centra en el período 2018 — 2021 e integra cuatro fuentes oficiales (SII, Catastro Frutícola, CONAF y Open-Meteo) para construir un Datamart en esquema estrella y analizar el efecto dominó que un shock climático o económico genera sobre el tejido PYME de la provincia. Incluye pipeline ETL en Python, modelado dimensional, clustering K-Means para segmentar comunas por perfil de riesgo, y proyecciones Holt-Winters para escasez hídrica.",
      images: {
        biDashboard: {
          src: "/images/proyectos/colchagua-bi-dashboard.png",
          alt: "Vista general del dashboard de Power BI del proyecto Colchagua",
          caption: "Dashboard interactivo en Power BI",
        },
        heroPreview: {
          src: "/images/proyectos/colchagua-hero-preview.webp",
          alt: "Vista previa del Hero de la página del caso de estudio",
          caption: "Portada del caso de estudio",
        },
      },
    },
    tags: ["Python", "Power BI", "Pandas", "K-Means", "Holt-Winters", "DAX"],
    link: "/proyectos/colchagua",
    linkLabel: "Explorar caso de estudio",
  },
];