# RECOVER - Landing Page

Landing page en React + Vite + CSS puro (sin frameworks de estilos), pensada para
verse profesional y liviana.

## Uso

```bash
npm install
npm run dev
```

Abrir `http://localhost:5173`.

## Build para produccion

```bash
npm run build
```

Genera la carpeta `dist/` lista para subir a Vercel, Netlify, o cualquier hosting
estatico.

## Estructura

- `src/App.jsx`: arma la pagina uniendo todas las secciones.
- `src/components/`: Navbar, Hero, Services, Approach, Insurances, Location, Footer.
- `src/index.css`: variables de color/tipografia y el motivo diagonal reutilizado
  en toda la pagina (inspirado en el trazo del isotipo).
- `src/sections.css`: estilos especificos de cada seccion.
- `public/`: fotos reales del centro (hero-sprint.jpg, team-care.jpg,
  training-strength.jpg) y el logo (logo-icon.png).

## Que personalizar antes de publicar

- **Mapa**: la seccion Ubicacion ya apunta a "Av. Belgrano (N) 164, Santiago del
  Estero Capital" via Google Maps embed (sin necesidad de API key).
- **Boton "Reservar evaluacion"**: hoy scrollea a la seccion de Ubicacion. Si
  tenes un numero de WhatsApp, se puede cambiar el `href` en `Navbar.jsx` y
  `Hero.jsx` a algo como `https://wa.me/549XXXXXXXXXX`.
- **Obras sociales**: la lista esta en `Insurances.jsx`, se agregan/quitan
  facilmente del array `OBRAS_SOCIALES`.
