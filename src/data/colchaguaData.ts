/*
 * DATA LAYER: Caso de estudio Colchagua
 * Fuente única de verdad para la sección Contexto.
 * Todos los datos provienen del informe oficial del proyecto BI.
 */

export const colchaguaContext = {
  // Metadata
  category: "Business Intelligence",
  period: "2018 — 2021",
  title: "Vulnerabilidad Territorial en Colchagua",
  subtitle: "Caso de estudio de Business Intelligence",
  location: "Provincia de Colchagua, Región de O'Higgins, Chile",

  // Bloque 2: Planteamiento
  planteamiento: {
    title: "El problema",
    context: "La provincia de Colchagua tiene la agricultura como motor económico, con la fruticultura como rubro central contando con 30.815 hectáreas registradas. Alrededor de este sector opera una densa red de PYMEs dependientes — packing, transporte, servicios agrícolas, comercio local — cuyos ingresos están estrechamente vinculados al desempeño agrícola.",
    problem: "Cuando la producción sufre un shock climático o de mercado, el daño detona un efecto dominó: cae el circulante, y con ello, los servicios y el comercio local.",
    centralQuestion: "¿Qué comunas, sectores y PYMEs de la provincia de Colchagua son más vulnerables a que un shock sobre la agricultura se propague sobre su economía, y qué amenazas resultan más determinantes según la evidencia?",
    approach: "El problema no se cerró a una amenaza específica de antemano. Se integraron múltiples dimensiones climáticas (heladas, olas de calor, precipitaciones), territoriales (incendios) y económicas (monocultivo), permitiendo que el análisis de datos revelara empíricamente cuáles tienen mayor peso en la provincia."
  },

  // Bloque 3: Hipótesis
  hypotheses: [
    {
      id: "H1",
      title: "Impacto de la pandemia",
      description: "La crisis del COVID-19 en 2021 afectó los empleos del sector agrícola en la mayoría de las comunas de la provincia de Colchagua."
    },
    {
      id: "H2",
      title: "Asimetría territorial",
      description: "Las amenazas climáticas (sequías) y territoriales (incendios) tienen un impacto asimétrico según la geografía comunal."
    },
    {
      id: "H3",
      title: "Vínculo clima-economía",
      description: "Existe un vínculo medible entre el estrés climático y el desempeño económico laboral de las PYMEs locales."
    }
  ],

  // Bloque 4: Fuentes de datos
  sources: [
    {
      id: "sii",
      name: "SII",
      fullName: "Servicio de Impuestos Internos",
      dataset: "Empresas por comuna y actividad (CIIU 4 dígitos)",
      period: "2018 — 2021",
      url: "https://www.sii.cl/sobre_el_sii/estadisticas_de_empresas.html",
      justification: "Única fuente oficial con granularidad de actividad económica (CIIU) a nivel comunal."
    },
    {
      id: "odepa",
      name: "CIREN / ODEPA",
      fullName: "Catastro Frutícola Nacional",
      dataset: "Catastro Frutícola Nacional",
      period: "2021",
      url: "https://datos.odepa.gob.cl/dataset/catastro-fruticola",
      justification: "Detalle de la matriz productiva frutícola a nivel comunal."
    },
    {
      id: "conaf",
      name: "CONAF",
      fullName: "Corporación Nacional Forestal",
      dataset: "Incendios forestales por comuna",
      period: "2018 — 2021",
      url: "https://www.conaf.cl/centro-documental",
      justification: "Series continuas de eventos de incendios que permiten cruzar con variación económica anual."
    },
    {
      id: "openmeteo",
      name: "Open-Meteo",
      fullName: "Reanálisis ERA5",
      dataset: "Series diarias meteorológicas",
      period: "2018 — 2021",
      url: "https://open-meteo.com",
      justification: "Series continuas de eventos climáticos que permiten cruzar con desempeño económico."
    }
  ]
};