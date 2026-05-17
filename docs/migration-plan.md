# Siiraskka Redesign: arquitectura, migracion y SEO

## Arquitectura propuesta

- `Vue 3 + Vite` como base del frontend.
- `Vue Router` para conservar URLs estrategicas y escalar a catalogo real.
- `Vercel` como hosting inicial con despliegue de prueba antes del cambio de dominio.
- Estructura preparada para agregar CMS headless, tienda o checkout sin rehacer la base.

## Lista de paginas iniciales

- `/`
- `/nuestros-productos`
- `/cursos-online`
- `/talleres-presenciales`
- `/la-tallerista`
- `/contacto`

## Componentes principales

- Header con navegacion principal y CTA a WhatsApp.
- Hero premium con propuesta de valor clara.
- Tarjetas de productos y cursos.
- Bloques de testimonios y FAQ.
- CTA flotante de WhatsApp.
- Footer con enlaces de navegacion y contacto.

## Estructura de carpetas

```text
.
├── docs/
│   ├── main_task
│   └── migration-plan.md
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── data/
│   ├── router/
│   ├── views/
│   ├── App.vue
│   ├── main.js
│   └── styles.css
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## Mapa de URLs antiguas a nuevas

| Antigua | Nueva |
| --- | --- |
| `/` | `/` |
| `/nuestros-productos/` | `/nuestros-productos` |
| `/cursos-online/` | `/cursos-online` |
| `/talleres-presenciales/` | `/talleres-presenciales` |
| `/la-tallerista/` | `/la-tallerista` |
| `/contacto/` | `/contacto` |
| `/tiendas-amigas/` | `/tiendas-amigas` |
| `/long-stitch/` | `/long-stitch` |
| `/costura-doble-x/` | `/costura-doble-x` |
| `/costura-zig-zag/` | `/costura-zig-zag` |
| `/japonesa-copo-de-nieve/` | `/japonesa-copo-de-nieve` |
| `/costura-alpha/` | `/costura-alpha` |
| `/ferias/` | `/ferias` |

## Checklist antes de cambiar dominio

- Mantener Jimdo activo mientras la nueva web esta en revision.
- Publicar primero en subdominio temporal de Vercel.
- Validar rutas principales y redirects 301.
- Confirmar titles, descriptions, canonicals y sitemap.
- Revisar responsive real en mobile.
- Comprimir y optimizar imagenes definitivas.
- Verificar Search Console y enviar sitemap nuevo.
- Confirmar DNS: si Jimdo controla dominio, hosting o nameservers.

## Configuracion recomendada para Vercel

- Proyecto conectado al repo final.
- Framework preset: `Vite`.
- Dominio temporal para QA.
- Dominio productivo conectado solo tras aprobacion final.
- Redirects gestionados con `vercel.json`.

## Recomendaciones visuales

- Fotografia de producto mas editorial y menos de catalogo improvisado.
- Texturas suaves de papel, lino y cuero en la direccion de arte.
- Tipografia serif con presencia y sans contemporanea para contraste.
- Mucho aire, bloques claros y CTA visibles sin ruido.

## Recomendaciones de UX

- Priorizar dos caminos: comprar producto o entrar a cursos.
- Hacer de WhatsApp el canal principal de conversion.
- Simplificar formularios y dudas de pago/envio.
- Dar contexto de confianza: testimonios, proceso, materiales, trayectoria.

## Roadmap de implementacion

1. Cerrar arquitectura y contenido definitivo.
2. Integrar imagenes reales optimizadas y numero real de WhatsApp.
3. Añadir analytics, Search Console y eventos de conversion.
4. Decidir si productos/cursos usan checkout externo o integracion propia.
5. Ejecutar QA SEO y migracion de dominio.
