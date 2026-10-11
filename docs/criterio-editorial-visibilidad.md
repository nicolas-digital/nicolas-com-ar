# Criterio editorial y de visibilidad — nicolas.com.ar

Fecha: 2026-10-10. Adaptación local a pedido de Nicolás, basada en antecedentes de Hylea y Notion. Este documento gobierna el trabajo futuro; no certifica el estado del sitio ni resultados de búsqueda.

Revisión de suficiencia: 2026-10-11. La base editorial y GEO se conserva; se completa con [el estándar de experiencia ejecutiva](estandar-experiencia-ejecutiva.md), de lectura obligatoria para UX, performance, contenido interactivo y aceptación de páginas. La revisión encontró insuficiente la especificidad sectorial y la verificabilidad de esos frentes en la versión inicial.

## 1. Propósito y vocabulario

Hacer que la experiencia y el criterio de Nicolás sean útiles, verificables y fáciles de encontrar y representar correctamente. El lector necesita comprender un problema y tomar una mejor decisión.

Separar cuatro conceptos:

| Concepto | Qué revisamos |
| --- | --- |
| SEO | Descubrimiento, rastreo, indexación y presentación en buscadores. |
| Visibilidad generativa / GEO | Presencia, mención, cita y exactitud de representación en respuestas generadas. |
| Uso por agentes | Capacidad de navegar, comprender información y completar una tarea autorizada en el sitio. |
| Contexto geográfico | Aplicabilidad a Argentina/LATAM, con diferencias de mercado cuando sean relevantes. |

Escribir sobre IA agéntica no demuestra que el sitio sea visible para agentes. Publicar un grafo de temas tampoco acredita reconocimiento externo de autoridad.

## 2. Calidad editorial: acuerdos recuperados y adaptación

De LANATA y del revisor de comunicación de Notion recuperamos: lector definido, reconocimiento de su situación, mirada propia, mecanismos concretos, consecuencia de negocio, atribución y adaptación por canal. Aquí se aplican a la voz personal de Nicolás; no se importan CTAs, vocabulario prohibido ni posicionamiento comercial de Hylea.

Antes del borrador, completar un brief:

- Lector y contexto: quién lo necesita y en qué situación.
- Pregunta o decisión: qué podrá resolver al terminar.
- Tesis: postura central y alcance.
- Aporte propio: observación, comparación, experiencia autorizada, análisis o herramienta útil que no sea una reformulación genérica.
- Evidencia: fuentes primarias, hechos comprobados y vacíos.
- Formato: análisis, opinión, caso, explicación, entrevista o guía; canal y siguiente paso pertinente.

El contenido debe mostrar cómo se relacionan decisión, mecanismo, efecto y condiciones. La especificidad puede ser cualitativa: no se exige una cifra por artículo. Si se usa una métrica, indicar organización, período, base de comparación, alcance y atribución; diferenciar porcentaje de puntos porcentuales.

Una opinión puede ser firme sin formular una causa universal. Explicitar dónde aplica, qué podría refutarla y qué sigue incierto. Las aperturas reconocibles y los ejemplos concretos son criterios editoriales propios, no factores de ranking certificados.

## 3. Evidencia y autoría

Mantener por pieza un registro de afirmaciones relevantes:

| Afirmación | Tipo | Fuente y fecha | Alcance/limitación | Estado |
| --- | --- | --- | --- | --- |
| Texto exacto a sostener | Hecho / experiencia / interpretación / hipótesis | Documento o URL primaria y fecha del dato | Organización, mercado, período, incertidumbre | Verificado / requiere fuente / retirar o reformular |

No atribuir a Nicolás una experiencia solo porque un borrador dice “observamos”. No convertir experiencia previa en un resultado de Hylea, ni formación ejecutiva en un título o afiliación diferente. Un perfil interno orienta la investigación; no reemplaza la prueba de cada credencial.

Señalar material ilustrativo como tal. Las imágenes generadas no acreditan clientes, proyectos, eventos ni resultados reales. Usar IA para investigar, comparar y editar con comprobación humana de hechos y postura; explicar su intervención cuando sea relevante para entender cómo se produjo el trabajo.

No volcar documentos confidenciales o metodología protegida de Hylea a un artículo personal. Se puede recuperar criterio profesional público con atribución y límites de exposición.

## 4. Estructura útil y arquitectura editorial

Dar una respuesta o tesis comprensible al comienzo; desarrollar razones, evidencia, ejemplos y límites en el orden que ayude al lector. Usar títulos descriptivos, tablas o diagramas cuando expliquen mejor. No imponer bloques pequeños, longitud fija, una FAQ por página ni repetición de keywords.

Cada artículo tiene una intención principal y una relación real con los pilares de `lib/topics.ts`: retail strategy, commerce platforms, AI & digital retail, digital operations y retail media & marketing. Relacionar lecturas por utilidad; no inventar artículos para rellenar todos los nodos ni confundir enlaces cronológicos con enlaces temáticos.

Evitar duplicar el mismo contenido para variantes de consulta. Consolidar solo después de revisar propósito, tráfico y referencias; si cambian URLs, planificar redirects. El dominio propio conserva la versión editorial de referencia por decisión del proyecto. Adaptar extractos a otros canales y enlazar al original; comprobar canonical donde exista sindicación. Ningún canal garantiza transferencia de autoridad.

## 5. Preparación técnica

### Acceso y representación

- Revisar status HTTP, redirects, canonical, indexabilidad, robots y controles de CDN/hosting en rutas afectadas.
- Mantener sitemap con URLs indexables y fechas reales; no simular frescura con la fecha de cada build.
- Comprobar que el contenido principal y enlaces son recuperables en HTML. Una prueba con user-agent simulado no acredita acceso del bot real.
- Alinear identidad y biografía entre home, about, artículos, metadata y JSON-LD. Autoría visible y enlace a perfil verificable.
- JSON-LD válido, serialización segura y datos fieles al contenido representado. Elegir tipos pertinentes; no añadir schemas para fabricar autoridad.
- Comprobar imágenes, descripciones, accesibilidad y experiencia móvil. No esconder información necesaria detrás de interacciones frágiles.

### Crawlers y superficies auxiliares

OpenAI distingue `OAI-SearchBot` para búsqueda, `GPTBot` para entrenamiento y `ChatGPT-User` para determinadas acciones de usuarios. Sus permisos y funciones no son intercambiables. Verificar documentación vigente antes de modificar reglas; robots no constituye autorización ni protección de secretos. [Fuente oficial](https://developers.openai.com/api/docs/bots).

Para Google, mantener los fundamentos SEO y verificar los controles de Search aplicables a la propiedad. No asumir que los controles de entrenamiento de otros productos gobiernan Search. `llms.txt` puede servir como índice auxiliar a servicios que lo consuman, pero Google declara que no lo usa para mejorar visibilidad o ranking. No hay soporte universal demostrado ni schema especial que garantice citas. [Guía oficial](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

### Uso por agentes: adaptación propuesta para este sitio

Probar tareas concretas: encontrar experiencia relevante, leer un artículo y sus fuentes, entender el servicio y localizar el contacto. Links y botones con nombres claros, formularios con labels, errores comprensibles y confirmaciones que reflejen el resultado real. No disparar envíos reales al verificar el recorrido sin autorización.

No agregar APIs, protocolos de comercio ni un chatbot solo para declarar al sitio “agent-ready”. Primero verificar necesidades y funcionamiento de la experiencia existente.

## 6. Medición

| Nivel | Evidencia válida | Lo que no demuestra |
| --- | --- | --- |
| Preparación | HTTP, HTML, canonical, robots, schema y navegación revisados | Que el motor indexó o citó. |
| Indexación | Inspección de URL y reportes de la propiedad | Que habrá menciones en una respuesta. |
| Representación | Respuesta observada, URL citada y fidelidad de atribución | Ranking universal o demanda del mercado. |
| Uso por agentes | Tarea de navegación completada y errores registrados | Éxito en otros agentes o tareas. |
| Negocio | Referidos identificables y contactos calificados | Causalidad automática ni atribución de todo el tráfico. |

Crear una muestra estable de preguntas reales. Registrar motor/modelo si está disponible, fecha, idioma, contexto, consulta exacta, uso de búsqueda, respuesta, mención, cita enlazada, URL y errores de atribución. Repetir en condiciones comparables y declarar variabilidad y tamaño de muestra. No mezclar menciones sin enlace con citas.

Consultar los reportes disponibles en Search Console/Bing y analítica solo cuando haya acceso. Verificar capacidad actual y período; si no hay acceso, dejar pendiente. Un evento `view_insight` no demuestra conversión ni procedencia de un LLM. No programar monitoreo sin pedido.

## 7. Flujo de trabajo y aceptación

1. Investigar: leer las fuentes locales, identificar la necesidad y verificar datos externos.
2. Preparar brief y registro de afirmaciones; resolver contradicciones materiales antes de presentar hechos como ciertos.
3. Redactar fuera de `content/insights/` mientras sea borrador. El loader actual publica todo MDX de esa carpeta y no filtra `draft` ni fechas futuras.
4. Revisar editorialmente: aporte propio, utilidad, evidencia, voz, límites, atribución y confidencialidad.
5. Revisar técnicamente las superficies afectadas; usar comandos existentes y comprobaciones del HTML real.
6. Entregar estado y pendientes. Publicación y distribución siguen el alcance autorizado por Nicolás.

Registrar resultado como “listo para revisión”, “requiere correcciones” o “validado técnicamente para el alcance indicado”. No declarar “optimizado para LLMs” como sinónimo de aparición demostrada.

## 8. Fuentes externas y vigencia

Consultadas el 2026-10-10:

- [Google — contenido útil y fiable](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): originalidad, evidencia, autoría y propósito para el lector.
- [Google — guía de optimización generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): fundamentos, límites de recetas, llms.txt y medición.
- [Google — funciones de IA](https://developers.google.com/search/docs/appearance/ai-features): requisitos de elegibilidad, acceso y coherencia con el texto visible.
- [OpenAI — crawlers](https://developers.openai.com/api/docs/bots): búsqueda, entrenamiento y solicitudes de usuarios.

Las páginas de Google consultadas difieren en el detalle de reportes/controles de Search Console. Verificar la documentación específica y la disponibilidad en la propiedad antes de prometer una métrica. No extrapolar las reglas de un proveedor a todos los asistentes.
