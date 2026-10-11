/*
 * DATA LAYER: Conclusiones del caso Colchagua
 * Conclusión principal, comuna crítica, mapa de amenazas, implicaciones y limitaciones.
 */

export const conclusionsData = {
  // Conclusión principal
  mainConclusion: {
    title: "La vulnerabilidad no es uniforme",
    text: "El análisis de Business Intelligence demuestra que la vulnerabilidad en Colchagua no se distribuye de forma homogénea. San Fernando y Chimbarongo concentran los peores indicadores de la provincia: mayor masa laboral agrícola, mayor superficie quemada por incendios y mayor dependencia de un solo grupo de cultivos. Un evento climático severo en estas zonas tiene un alto potencial de desencadenar un efecto dominó que asfixia rápidamente a las PYMEs logísticas, comercios locales y trabajadores temporeros dependientes del agro.",
  },

  // Comuna crítica
  criticalComuna: {
    name: "Chimbarongo",
    profile: "Comuna crítica (alta fruticultura + incendios)",
    metrics: [
      { value: "8,25", label: "días promedio de helada al año", detail: "vs. 0,5 días de Lolol" },
      { value: "3.125 ha", label: "superficie quemada en 2021", detail: "≈ 60% del total provincial" },
      { value: "39,6%", label: "de sus ventas dependen de carozos", detail: "sobre el 40% provincial" },
      { value: "11.216", label: "trabajadores agrícolas formales", detail: "segundo mayor volumen provincial" },
    ],
  },

  // Mapa de amenazas por comuna
  threats: [
    {
      id: "heladas",
      title: "Heladas severas",
      color: "sky",
      comunas: ["Chimbarongo", "Nancagua", "Pumanque", "San Fernando"],
      description: "Comunas con los promedios más altos de días de helada al año. Afectan directamente la fruticultura de exportación.",
    },
    {
      id: "incendios",
      title: "Incendios forestales",
      color: "red",
      comunas: ["Chimbarongo", "San Fernando"],
      description: "Concentran la mayor superficie quemada provincial. El riesgo no siempre recae sobre cultivos, sino sobre vegetación y masa forestal que rodea los predios.",
    },
    {
      id: "carozos",
      title: "Dependencia de carozos",
      color: "amber",
      comunas: ["Nancagua", "Chimbarongo", "San Fernando"],
      description: "Comunas donde más del 38% de las ventas agrícolas dependen de carozos. Alta exposición a shocks específicos de esas especies.",
    },
    {
      id: "multirriesgo",
      title: "Multirriesgo combinado",
      color: "emerald",
      comunas: ["Chimbarongo"],
      description: "Única comuna que combina las tres amenazas anteriores. Es el epicentro crítico del riesgo provincial.",
    },
  ],

  // Implicaciones
  implications: [
    {
      audience: "Gestores públicos",
      icon: "building",
      text: "Los recursos de mitigación (subsidios anti-helada, prevención de incendios, reconversión productiva) tendrían mayor retorno si se focalizan en las comunas con multirriesgo, en lugar de distribuirse uniformemente.",
    },
    {
      audience: "Inversionistas y financistas",
      icon: "chart",
      text: "La exposición climática de cada comuna es un factor medible y diferenciable. Incorporar esta dimensión en la evaluación de proyectos agrícolas permite ajustar el riesgo país-comuna.",
    },
    {
      audience: "PYMEs locales",
      icon: "briefcase",
      text: "La alta dependencia de un solo grupo de cultivos (carozos) implica un riesgo sistémico. La diversificación productiva reduce la exposición a shocks específicos de una especie.",
    },
    {
      audience: "Ecosistema asegurador",
      icon: "shield",
      text: "La correlación entre olas de calor e incendios, sumada a la concentración territorial, sugiere que los modelos de riesgo actuales podrían subestimar el impacto agregado en la zona.",
    },
  ],

  // Limitaciones del modelo
  limitations: [
    {
      title: "Externalidades atípicas",
      text: "El período 2018-2021 está fuertemente cruzado por la pandemia COVID-19, las inyecciones de liquidez (IFE) y los retiros del 10%. Estos factores distorsionan la lectura pura del impacto climático sobre la economía.",
    },
    {
      title: "Modelo Holt-Winters",
      text: "El modelo de proyección de precipitaciones presentó un sMAPE de 71,4%, reflejando la complejidad inherente de predecir escasez hídrica en una zona semiárida. Se debe usar como guía de tendencia, no como valor absoluto.",
    },
    {
      title: "Correlación ≠ causalidad",
      text: "Los patrones identificados (calor ↔ incendios, heladas ↔ caída de productividad) muestran relaciones estadísticas, no relaciones causales directas. Se requiere análisis específico para establecer causalidad.",
    },
  ],
};