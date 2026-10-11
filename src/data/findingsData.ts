/*
 * DATA LAYER: Hallazgos del caso Colchagua
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
  bridgeQuote?: string; // Cita puente que va después de este hallazgo
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
    bridgeQuote: "Dos comunas concentran casi la mitad del empleo agrícola provincial. Cuando el fuego o la helada golpean ahí, arrastran a toda la economía local.",
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
    bridgeQuote: "El impacto no solo es asimétrico entre comunas. También lo es al interior de cada negocio: las ventas crecen, pero el empleo retrocede a niveles de 2018.",
  },
  {
    id: "efecto-domino",
    title: "Efecto dominó: ventas al alza, empleo en caída",
    description: "Al aislar el sector silvoagropecuario, las ventas comunales crecieron en promedio +45,74% entre 2018 y 2021. Sin embargo, el empleo agrícola provincial creció hasta 2020 y colapsó en 2021: cayó un 13% en un solo año, volviendo a los niveles de 2018. Las empresas sobrevivieron a costa de reducir su personal, golpeando al tejido social y a los servicios locales.",
    highlight: {
      value: "−13%",
      label: "cayó el empleo agrícola provincial en 2021, volviendo a niveles de 2018",
    },
    chartId: "domino-effect",
    footnote: "El crecimiento de ventas se calculó aislando exclusivamente el sector silvoagropecuario. El empleo corresponde al total provincial de trabajadores formales del sector agrícola.",
    bridgeQuote: "El colapso del empleo no vino solo. Se sumó a una estructura productiva vulnerable: más del 40% de las ventas agrícolas depende de un solo grupo de cultivos.",
  },
  {
    id: "monocultivo-carozos",
    title: "Alta dependencia de los carozos en las ventas agrícolas",
    description: "El 40% de las ventas agrícolas provinciales proviene de carozos (cerezo, ciruelo, etc.). En comunas como Nancagua, Chimbarongo y San Fernando, esa dependencia supera el 38%. Si un shock afectara específicamente a estas especies, las ventas comunales caerían abruptamente.",
    highlight: {
      value: "40%",
      label: "de las ventas agrícolas provinciales depende de los carozos",
    },
    chartId: "monoculture",
    footnote: "Se comparan las ventas totales del sector agro con las ventas aislando los carozos. La diferencia es la dependencia comunal de este grupo de cultivos.",
  },
];

/*
 * Datos para los gráficos
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

// H3 - Empleo agrícola provincial por año
export const employmentByYear = [
  { anio: "2018", trabajadores: 49859 },
  { anio: "2019", trabajadores: 54627 },
  { anio: "2020", trabajadores: 57411 },
  { anio: "2021", trabajadores: 49875 },
];

// H4 - Ventas por comuna (con y sin carozos)
export const salesByComuna = [
  { comuna: "San Fernando", total: 2056251, sinCarozos: 1275429 },
  { comuna: "Chimbarongo", total: 1692321, sinCarozos: 1022819 },
  { comuna: "Santa Cruz", total: 1046672, sinCarozos: 871397 },
  { comuna: "Nancagua", total: 1003610, sinCarozos: 585811 },
  { comuna: "Chépica", total: 566532, sinCarozos: 486865 },
  { comuna: "Placilla", total: 524928, sinCarozos: 383126 },
  { comuna: "Palmilla", total: 473108, sinCarozos: 381596 },
  { comuna: "Lolol", total: 328155, sinCarozos: 269757 },
  { comuna: "Peralillo", total: 321302, sinCarozos: 252184 },
  { comuna: "Pumanque", total: 134560, sinCarozos: 93138 },
];