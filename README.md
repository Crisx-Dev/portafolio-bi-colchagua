# Portafolio BI — Cristóbal Vargas

Portafolio profesional web que presenta el proyecto de Business Intelligence sobre vulnerabilidad territorial en la provincia de Colchagua (Región de O'Higgins, Chile), período 2018-2021.

Sitio desplegado: [portafolio-bi-colchagua.vercel.app](https://portafolio-bi-colchagua.vercel.app)

## Descripción

Portafolio profesional construido con Astro, React y Tailwind CSS. Incluye:

- **Perfil profesional** con stack técnico y canales de contacto.
- **Sección de tecnologías** con íconos y agrupación por categoría.
- **Proyectos destacados** con modal de vista previa.
- **Caso de estudio completo** en `/proyectos/colchagua`:
  - Contexto del problema y fuentes de datos.
  - Metodología (pipeline ETL, Datamart, ML, DAX).
  - Hallazgos con gráficos interactivos propios (Recharts).
  - Conclusiones con mapa de amenazas por comuna.
  - Dashboard con previews del reporte Power BI.
- **Formulario de contacto** funcional con reCAPTCHA v3.

## Stack técnico

- **Framework:** Astro 7
- **Islas interactivas:** React 19
- **Estilos:** Tailwind CSS 3
- **Gráficos:** Recharts
- **Íconos:** Simple Icons, Lucide
- **Formularios:** Formspree + reCAPTCHA v3
- **Deploy:** Vercel (CI/CD desde GitHub)

## Estructura del proyecto
portafolio-bi-colchagua/
├── public/ # Assets estáticos (imágenes, favicon)
├── src/
│ ├── components/ # Componentes Astro y React
│ │ └── charts/ # Gráficos Recharts
│ ├── data/ # Capa de datos (fuente única de verdad)
│ ├── pages/ # Rutas del sitio (file-based routing)
│ │ ├── index.astro # Portafolio principal
│ │ └── proyectos/
│ │ └── colchagua.astro # Caso de estudio completo
│ └── styles/
│ └── global.css # Estilos globales
├── astro.config.mjs
├── tailwind.config.mjs
├── postcss.config.mjs
└── package.json

## Cómo correr en local

Requiere Node.js 22 o superior.

```bash
# Instalar dependencias
npm install --legacy-peer-deps

# Correr en desarrollo
npm run dev