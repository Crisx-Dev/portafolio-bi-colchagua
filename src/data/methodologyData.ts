/*
 * DATA LAYER: Metodología del caso Colchagua
 * Estructura del pipeline, datamart, ML y dashboard.
 */

// Tipo para las filas de la tabla de comparación de forecast
export type ForecastComparisonRow = {
  model: string;
  rmse: string;
  mae: string;
  smape: string;
  vsNaive: string;
  isBest: boolean;
};

export const methodologyData = {
  // Pipeline ETL → Datamart → ML → Dashboard
  pipeline: [
    {
      step: "01",
      title: "Ingesta de fuentes",
      description: "SII, CIREN/ODEPA, CONAF y Open-Meteo en formato CSV y API.",
      icon: "database",
    },
    {
      step: "02",
      title: "ETL con Python",
      description: "Normalización Latin-1 → UTF-8, tratamiento de asteriscos tributarios, limpieza de separadores de miles y filtro CIIU.",
      icon: "code",
    },
    {
      step: "03",
      title: "Datamart en esquema estrella",
      description: "6 dimensiones y 5 tablas de hechos modeladas para análisis cruzado.",
      icon: "layout",
    },
    {
      step: "04",
      title: "Machine Learning",
      description: "K-Means (k=2) para clustering territorial y Holt-Winters para proyección de escasez hídrica.",
      icon: "brain",
    },
    {
      step: "05",
      title: "Dashboard interactivo",
      description: "Power BI con medidas DAX avanzadas, mapas de calor y visualizaciones dinámicas.",
      icon: "chart",
    },
  ],

  // Datamart: dimensiones y hechos
  datamart: {
    dimensions: [
      { name: "dim_comuna", description: "10 comunas de Colchagua" },
      { name: "dim_tiempo", description: "Período 2018–2021 (anual y mensual)" },
      { name: "dim_actividad", description: "Códigos CIIU 4 dígitos" },
      { name: "dim_especie", description: "Especies frutícolas del catastro" },
      { name: "dim_riego", description: "Métodos de riego tecnificado" },
      { name: "dim_uf", description: "Unidades de fomento para comparación" },
    ],
    facts: [
      "fact_economia",
      "fact_clima_anual",
      "fact_clima_diario",
      "fact_incendios",
      "fact_fruticola",
    ],
  },

  // ML aplicado (3 tarjetas únicas)
  ml: [
    {
      type: "Clustering",
      algorithm: "K-Means",
      metric: "Coeficiente de Silueta",
      result: "k = 2",
      description: "Segmentó las comunas en dos grupos: 'Comuna Estándar' (8 con menor exposición) y 'Comuna Crítica' (Chimbarongo y San Fernando).",
    },
    {
      type: "Forecast · Hídrico",
      algorithm: "Holt-Winters",
      metric: "RMSE: 1,85mm · sMAPE: 71,4%",
      result: "Modelo seleccionado",
      description: "Proyección de escasez hídrica mensual. Comparado contra SARIMAX (sMAPE 98,1%) y modelo Naive, Holt-Winters fue el de mejor desempeño relativo (+41,6% vs Naive). Se usa como guía de tendencia, no como valor absoluto.",
    },
    {
      type: "Forecast · Económico",
      algorithm: "Regresión lineal (numpy)",
      metric: "Tendencia 2022–2023",
      result: "Escenario optimista",
      description: "Proyección de empleo (53.000 trabajadores) y ventas (~30 millones UF). Scripts nativos de Python ejecutados dentro de Power BI.",
    },
  ],

  // Comparación de modelos de forecast
  forecastComparison: [
    {
      model: "SARIMAX",
      rmse: "4,14 mm",
      mae: "2,44 mm",
      smape: "98,1%",
      vsNaive: "−30,4%",
      isBest: false,
    },
    {
      model: "Holt-Winters",
      rmse: "1,85 mm",
      mae: "1,31 mm",
      smape: "71,4%",
      vsNaive: "+41,6%",
      isBest: true,
    },
  ] as ForecastComparisonRow[],

  // Dashboard
  dashboard: {
    measures: [
      "Crecimiento Ventas Agro (18 vs 21)",
      "Días de helada por comuna",
      "Superficie quemada acumulada",
      "Dependencia de monocultivo",
    ],
    features: [
      "Mapas de calor espaciotemporales",
      "Proyecciones dinámicas integradas",
      "Segmentación por comuna, actividad y año",
    ],
  },
};