/*
 * DATA LAYER: Hallazgos del caso Colchagua
 * Cada hallazgo se renderiza con un título, descripción, KPI y gráfico propio.
 */

export type Finding = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  highlight: {
    value: string;
    label: string;
  };
  chartId: string;
  footnote?: string;
};

export const findingsData: Finding[] = [
  {
    id: "concentracion-empleo",
    title: "Concentración del empleo agrícola provincial",
    description: "El empleo agrícola formal de Colchagua está fuertemente concentrado en dos comunas: San Fernando y Chimbarongo reúnen más de 23.000 trabajadores, casi la mitad del total provincial. Esto significa que cualquier shock que afecte a estas comunas arrastra las métricas laborales de toda la provincia.",
    highlight: {
      value: "49.875",
      label: "trabajadores agrícolas formales en Colchagua (2021)",
    },
    chartId: "workers-bar",
    footnote: "Datos 2021, año del descenso post-pandemia. La concentración se mantiene estable en todo el período analizado.",
  },
  {
    id: "asimetria-amenazas",
    title: "Asimetría territorial de las amenazas",
    description: "El impacto de los incendios y las heladas no es homogéneo. Chimbarongo concentra casi el 60% de la superficie quemada provincial, mientras que Lolol promedia solo 0,5 días de helada al año frente a los más de 8 días de Chimbarongo. Esto exige políticas de mitigación focalizadas.",
    highlight: {
      value: "60%",
      label: "de la superficie quemada provincial se concentra en Chimbarongo",
    },
    chartId: "fire-ha",
    footnote: "Comparación de dos amenazas independientes: superficie afectada por incendios y días promedio de helada por comuna.",
  },
];

/*
 * Datos específicos para cada gráfico.
 */

// H1 - Trabajadores agrícolas por comuna
export const workersByComuna = [
  { comuna: "San Fernando", trabajadores: 12459 },
  { comuna: "Chimbarongo", trabajadores: 11216 },
  { comuna: "Santa Cruz", trabajadores: 6311 },
  { comuna: "Nancagua", trabajadores: 4287 },
  { comuna: "Chépica", trabajadores: 3983 },
  { comuna: "Palmilla", trabajadores: 3795 },
  { comuna: "Lolol", trabajadores: 3269 },
  { comuna: "Placilla", trabajadores: 2713 },
  { comuna: "Peralillo", trabajadores: 1576 },
  { comuna: "Pumanque", trabajadores: 266 },
];

// H2 - Hectáreas quemadas por incendios (2021)
export const fireByComuna = [
  { comuna: "Chimbarongo", hectareas: 3125 },
  { comuna: "San Fernando", hectareas: 1268 },
  { comuna: "Santa Cruz", hectareas: 246 },
  { comuna: "Lolol", hectareas: 228 },
  { comuna: "Chépica", hectareas: 166 },
  { comuna: "Peralillo", hectareas: 151 },
  { comuna: "Pumanque", hectareas: 98 },
  { comuna: "Palmilla", hectareas: 10 },
  { comuna: "Nancagua", hectareas: 6 },
  { comuna: "Placilla", hectareas: 1 },
];

// H2 - Días promedio de helada por comuna (2018-2021)
export const frostByComuna = [
  { comuna: "Chimbarongo", dias: 8.25 },
  { comuna: "Nancagua", dias: 6.5 },
  { comuna: "Pumanque", dias: 5.75 },
  { comuna: "San Fernando", dias: 5.5 },
  { comuna: "Chépica", dias: 3.75 },
  { comuna: "Peralillo", dias: 3.25 },
  { comuna: "Santa Cruz", dias: 3.0 },
  { comuna: "Palmilla", dias: 3.0 },
  { comuna: "Placilla", dias: 2.75 },
  { comuna: "Lolol", dias: 0.5 },
];