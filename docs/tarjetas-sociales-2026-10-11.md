# Tarjetas sociales — 2026-10-11

Estado: implementado y validado en build local. Sin publicación ni comprobación de cachés de LinkedIn, WhatsApp o X en producción.

## Resultado

23 páginas indexables: Inicio, Trayectoria, Consultoría, Insights, Temas, 5 temas y 13 artículos. Cada una tiene título, descripción, canonical y tarjeta propia. OG incluye URL absoluta, locale es_AR, siteName, imagen PNG con dimensiones 1200 × 630 y texto alternativo. Twitter usa summary_large_image y la misma imagen. Artículos incluyen autor y fecha de publicación; modificación solo cuando existe updatedAt.

Se eliminaron títulos duplicados por herencia del layout. Tres artículos tienen socialTitle abreviado en frontmatter; sus encabezados visibles se conservan. Se corrigieron dos descripciones que repetían el título y se sintetizó la de NRF. Se eliminó una anotación interna de la descripción de Digital Operations.

## Diseño y mantenimiento

- Paleta crema, verde bosque y línea dorada; tipografía Lora.
- Inicio y Trayectoria: fotografía auténtica del campus MIT. Fuente copiada sin alterar desde MIT 2026/MIT 202602_101938.jpeg a assets/social/nicolas-campus.jpeg; no se publica como archivo independiente. El generador realiza el encuadre de la composición.
- Artículos y temas: composición tipográfica con título, autor y dominio; no se alteraron las portadas de los artículos.
- lib/social.ts centraliza metadata y páginas; app/social/[...segments]/route.tsx genera tarjetas estáticas en el build con next/og. No agrega JS al cliente ni requiere solicitudes externas para generar imágenes.
- Lora procede de google/fonts/ofl/lora; se convirtió de variable a peso estático 400 para compatibilidad con ImageResponse. Licencia en public/fonts/Lora-OFL.txt.
- Al agregar/publicar un artículo o modificar títulos, ejecutar un nuevo build para actualizar las tarjetas. socialTitle es opcional; por defecto se usa title.

## Validación

- npm run build: aprobado; 23 tarjetas prerenderizadas.
- ESLint de archivos TS/TSX afectados: sin errores ni advertencias. La excepción img está documentada y limitada a ImageResponse.
- scripts/check-social.mjs contra build local en puerto 3102: 23 títulos e imágenes únicos, OG/Twitter completos, autoría, PNG reales 1200 × 630, máximo 299 KB, tarjetas inexistentes 404.
- scripts/check-seo.mjs: 23 URLs canónicas/indexables, robots, sitemap, verificaciones de propiedad, JSON-LD, noindex y 404.
- scripts/check-publication.mjs: borradores, fechas futuras/inválidas y slugs inseguros excluidos.
- Revisión visual: Inicio en Chrome; imagen de Trayectoria y artículo de título largo. Sin recortes de texto ni superposición con fotografía.

Fuente técnica: [Next.js — Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images). La validación local comprueba nuestra implementación; la presentación y caché de cada plataforma se revisan después de publicar.
