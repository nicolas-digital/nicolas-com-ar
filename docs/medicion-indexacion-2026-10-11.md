# Medición e indexación — 11 de octubre de 2026

## Estado de las cuentas comprobado en navegador

- GTM: cuenta 121775706, contenedor 1523392, ID público **GTM-TQLKT9**, workspace 1000007. Había cinco cambios añadidos sin publicar: evento `view_insight`, su activador y tres variables de capa de datos. No son cambios creados en esta revisión.
- GA4: cuenta 67196193, propiedad **285034210**, flujo web **2775130331**, medición **G-BSVFBFNNER**. Recepción durante las últimas 48 horas indicada por GA4. URL del flujo actualizada de HTTP a HTTPS y guardada. Medición mejorada de cargas y cambios del historial activa; no añadir otro emisor manual de `page_view`.
- Search Console: propiedad HTTP existente sin verificar. Se inició el alta del prefijo **https://www.nicolas.com.ar/** y se recuperó su etiqueta de verificación.
- Bing: **https://www.nicolas.com.ar/** ya estaba añadido el 4 de julio de 2025, pendiente de verificación. Se inició sesión y recuperó su etiqueta HTML.
- Los tokens públicos de propiedad se incorporaron a metadata, con opción de override mediante entorno. No son secretos ni credenciales de acceso. Su presencia en el checkout no completa la verificación del dominio publicado.

## Cambios locales

- Un solo generador de robots: `app/robots.ts`. Copia histórica de `public/robots.txt` en `docs/robots-anterior.txt`. Se elimina la definición duplicada y su bloqueo de recursos Next.js; no se cambian preferencias de entrenamiento de bots.
- Sitemap derivado de las rutas y temas reales, sin `/thanks`, sin fechas inventadas en cada build. Artículos usan `updatedAt` si existe o publicación. Sin `priority` ni `changefreq` decorativos.
- `/thanks`: `noindex, follow`. No se emite `generate_lead`: actualmente el contacto del sitio es un enlace de correo; una visita a una página de agradecimiento no prueba un envío.
- Canonicals de páginas y temas coherentes con HTTPS + www.
- Identificador de persona compartido `https://www.nicolas.com.ar/#person`, foto existente y credencial exacta. Corrección de propiedades estructuradas y eliminación de docencia/estudios pendientes de `alumniOf`.
- Autor visible en artículos, fecha de publicación y actualización real opcional. Serialización JSON-LD protegida frente a cierre de script.
- Borradores, fechas futuras/inválidas y slugs inseguros excluidos de listas y acceso directo. Las listas prerenderizadas requieren un nuevo build para incorporar una publicación programada; no hay scheduler.
- GTM carga una sola vez y solo en los hostnames de producción. Localhost y previews no envían eventos. Se elimina `NEXT_PUBLIC_GA_ID` numérico, que era el ID de propiedad y no de medición.
- `view_insight` deduplica efectos del mismo montaje, permitiendo volver a registrar una visita tras salir y regresar al artículo.
- `contact_click` se emite al pulsar un enlace `mailto:`, con método email y path; no se incluye contenido de mensajes, correo del visitante ni texto libre. La etiqueta de GTM mide el nombre del evento y el contexto automático de GA4.
- Footer plegado inicialmente: identidad, contacto y control “Explorar el sitio”; enlaces conservados en HTML. Alto móvil plegado medido: 130 px.

## GTM preparado

Se añadieron y guardaron:

- Activador `CE - contact_click` (17): evento personalizado exacto `contact_click`.
- Etiqueta `GA4 - Event - contact_click` (18): GA4 Event, `{{GA4 Nicolas}}`, evento `contact_click`, activador anterior.

El workspace tiene siete cambios pendientes. No confundir guardado con publicación. La etiqueta previa `view_insight` transmite `insight_title`, `insight_slug` e `insight_topic`; activador exacto `view_insight`. Las etiquetas históricas Universal Analytics no se eliminaron.

## Validación

- Build de producción y TypeScript: aprobados.
- ESLint de archivos modificados: aprobado en la revisión.
- `node scripts/check-publication.mjs`: prueba aislada de borradores, fechas futuras/inválidas y acceso por slug, aprobada.
- `node scripts/check-tracking.mjs`: hostnames de producción frente a local/previews y cola de eventos, aprobada.
- `node scripts/check-seo.mjs`: 23 URLs, status, canonical, indexabilidad, sitemap, robots, tokens, JSON-LD y 404, aprobado en servidor local.
- Navegador: footer plegar/desplegar con teclado y puntero, mobile/desktop; cero scripts de GTM en localhost.

No se acredita aún recepción de los nuevos eventos en DebugView ni se midieron CWV de campo. Una configuración marcada activa no prueba ausencia de duplicados en todos los recorridos.

## Secuencia de cierre en producción

1. Publicar el sitio revisado y comprobar de nuevo HTML, robots, sitemap y redirección HTTP/no-www.
2. Verificar propiedad HTTPS en Search Console y Bing usando las etiquetas incorporadas.
3. Enviar `https://www.nicolas.com.ar/sitemap.xml` a ambas propiedades; observar estado de lectura y URLs descubiertas.
4. Publicar el workspace GTM después de validar en Tag Assistant; comprobar en DebugView una vista inicial, navegación interna, visita de artículo y clic de contacto. No enviar emails de prueba.
5. Registrar dimensiones de evento pertinentes (por ejemplo `insight_topic`, `insight_slug`) si no existen y vincular Search Console al flujo GA4 una vez verificada la propiedad.
6. Revisar adquisición por fuente/medio, páginas de entrada y contactos. Referidos de asistentes no equivalen al total de menciones/citas; tráfico directo no identifica por sí solo un LLM.

## Referencias consultadas

- https://nextjs.org/docs/app/guides/third-party-libraries
- https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications
- https://developers.google.com/analytics/devguides/collection/ga4/views
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b
- https://schema.org/EducationalOccupationalCredential

## Resultado de Tag Assistant

Se intentó conectar al dominio de producción desde la vista previa del workspace. El navegador mostró los scripts reales `gtm.js` de GTM-TQLKT9 y `gtag/js` de G-BSVFBFNNER, sin errores de consola capturados. Tag Assistant agotó el tiempo de conexión y no mostró eventos depurables; por ello los nuevos eventos siguen sin validación extremo a extremo y no se publicó el workspace. También se observó la carga histórica de `analytics.js` (Universal Analytics): queda pendiente pausar las etiquetas UA tras revisar sus dependencias. La conexión automática inicial apuntaba a localhost:3000 (destino recordado), luego se probó el dominio correcto.
