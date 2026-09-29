# Portafolio · Manuela Córdoba Robledo

Mi sitio personal: quién soy, cómo trabajo y los proyectos que tengo en producción.

**En vivo:** [manuela-cordoba.vercel.app](https://manuela-cordoba.vercel.app)

## Qué muestra

- **Proyectos contados como caso de estudio:** el problema, lo que construí y lo más difícil, con enlace a la demo en vivo y al código.
- **Mi forma de trabajar** en cuatro pasos: diseño, código, pruebas y despliegue.
- **Stack, sobre mí y contacto**, con mi hoja de vida para descargar.

## Decisiones

- **Astro** porque el sitio es contenido: genera HTML estático, carga rápido y no manda JavaScript que no hace falta. El único script es el que anima las secciones al hacer scroll.
- **Sin librerías de componentes ni de íconos:** los íconos son SVG en línea ([`Icono.astro`](src/components/Icono.astro)) y los estilos son CSS propio con variables, para que el diseño sea mío y no una plantilla.
- **El contenido vive aparte** en [`src/data/proyectos.js`](src/data/proyectos.js): agregar un proyecto es sumar un objeto, sin tocar el diseño.
- **Accesible:** respeta `prefers-reduced-motion`, los íconos decorativos van ocultos para lectores de pantalla y todo se adapta al celular.

## Correrlo en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera la carpeta dist/
```

## Stack

Astro · HTML · CSS · JavaScript · Vercel
