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

```
portafolio-bi-colchagua/
├── public/                    # Assets estáticos (imágenes, favicon)
├── src/
│   ├── components/            # Componentes Astro y React
│   │   └── charts/            # Gráficos Recharts
│   ├── data/                  # Capa de datos (fuente única de verdad)
│   ├── pages/                 # Rutas del sitio (file-based routing)
│   │   ├── index.astro        # Portafolio principal
│   │   └── proyectos/
│   │       └── colchagua.astro # Caso de estudio completo
│   └── styles/
│       └── global.css         # Estilos globales
├── astro.config.mjs
├── tailwind.config.mjs
├── postcss.config.mjs
└── package.json
```

## Cómo correr en local

Requiere Node.js 22 o superior.

```bash
# Instalar dependencias
npm install --legacy-peer-deps

# Correr en desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

## Cómo construir para producción

```bash
npm run build
```

Los archivos optimizados se generan en `dist/`.

## Cómo se despliega

El despliegue es automático:

1. Cada `git push` a la rama `main` dispara un deploy en Vercel.
2. Vercel instala dependencias, construye el sitio y lo publica.
3. Preview deployments se generan automáticamente en cada Pull Request.

**URL de producción:** [portafolio-bi-colchagua.vercel.app](https://portafolio-bi-colchagua.vercel.app)

## Proyecto relacionado

El análisis BI completo (reporte Power BI, notebooks, datasets) está disponible en un repositorio separado:

[github.com/Crisx-Dev/colchagua-bi-analisis](https://github.com/Crisx-Dev/colchagua-bi-analisis)

## Autor

**Cristóbal Vargas** — Ingeniero en Business Intelligence

- GitHub: [@Crisx-Dev](https://github.com/Crisx-Dev)
- Email: cristobalv774@gmail.com

Ingeniería de Ejecución en Informática — Instituto Profesional AIEP
Curso: ISI802 — Business Intelligence (2026)

## Declaración de uso de Inteligencia Artificial

En conformidad con las directrices de la industria del dato y la rúbrica del curso ISI802, se declara el uso transparente de Inteligencia Artificial como herramienta de aceleración tecnológica:

- **Herramientas:** Google Gemini, DeepSeek y Claude.
- **Tareas asistidas:** Apoyo en la auditoría estructural del modelo de datos, depuración de sintaxis DAX en Power BI, generación de scripts visuales en Python y asistencia en la implementación del sitio web del portafolio.
- **Responsabilidad humana:** La formulación del problema, la estrategia de selección de fuentes gubernamentales, la validación metodológica y la interpretación de los hallazgos son autoría intelectual exclusiva del autor, quien comprende y defiende cada decisión técnica documentada.

## Licencia

Proyecto académico. Los datos utilizados son de fuentes públicas oficiales.