# Aprendizaje recuperado de Hylea y Notion

Fecha: 2026-10-10. Pedido: recuperar lo conversado sobre LLMs, visibilidad agéntica y contenido para aplicarlo a nicolas.com.ar. Nicolás confirmó Hylea y Notion como fuentes principales.

## Alcance

Se revisaron documentos locales y páginas de Notion, no el historial completo de conversaciones. Este registro preserva procedencia y contradicciones; no afirma haber recuperado todos los acuerdos. La adaptación operativa está en [criterio-editorial-visibilidad.md](criterio-editorial-visibilidad.md) y se referencia desde `AGENTS.md`.

## Fuentes y aprendizajes

| Fuente | Aporte | Límite |
| --- | --- | --- |
| Hylea `.agents/LANATA.md` | Fuente antes de copy; lector y objetivo; mecanismos, atribución y confidencialidad; revisión editorial antes de técnica. | Tono, CTAs, marcas y restricciones comerciales específicos de Hylea no se heredan automáticamente. |
| Hylea `.agents/IVAN.md` | Coherencia de metadata, HTML, JSON-LD, sitemap, fechas, accesibilidad y verificación. | Scripts y requisitos de Hylea no existen necesariamente acá; reglas antiguas sobre bots/llms requieren reconciliación. |
| [Notion: diseño del revisor de comunicación](https://app.notion.com/p/37e3d7018a8d8195ba1eee706d80dd46) | Reconocimiento del lector, punto de vista, demostración, especificidad y adaptación al canal. | Antecedente de diseño de junio; estadísticas externas allí citadas no fueron verificadas y no se reutilizan. |
| [Notion: gate SEO/GEO/GA4 y contenido](https://app.notion.com/p/39a3d7018a8d81789044eee554eabafa) | Fuente real del estado publicado; distinguir borrador/publicación; no confundir eventos con conversiones. | Registro de julio, no auditoría actual de analítica ni autorización de publicación. |
| Hylea `docs/adr/0003-content-strategy-insights.md` | Dominio propio como referencia, distribución por canal y relaciones entre artículos. | Contiene recetas sobre cifras/citas y credenciales que no se adoptan como hechos. |
| Hylea worktree `home-journey/docs/briefs/hylea-llm-alignment-2026-09-27.md` y `docs/criteria/GEO.md` | Separa acceso, entrenamiento, indexación y citas; llms auxiliar; evidencia y fechas justificadas. | Es evidencia local en un worktree; no se verificó merge ni despliegue. Sus principios se contrastaron con documentación oficial. |
| nicolas-com-ar `.claude/knowledge-graph-architecture.md`, `.claude/seo-geo-strategy.md`, perfil y código | Pilares, intención editorial, voz y estado implementado. | Parte del material está desactualizado o formula resultados sin evidencia. |

Rutas locales de Hylea consultadas:

- `/Users/andabi/hylea-systems/.agents/LANATA.md`
- `/Users/andabi/hylea-systems/.agents/IVAN.md`
- `/Users/andabi/hylea-systems/docs/criteria/GEO.md`
- `/Users/andabi/hylea-systems/docs/adr/0003-content-strategy-insights.md`
- `/Users/andabi/hylea-systems/.claude/skills/redactar-insight/SKILL.md`
- `/Users/andabi/hylea-systems/.worktrees/home-journey/docs/criteria/GEO.md`
- `/Users/andabi/hylea-systems/.worktrees/home-journey/docs/briefs/hylea-llm-alignment-2026-09-27.md`

## Reconciliación explícita

| Antecedente | Criterio adoptado acá |
| --- | --- |
| Abrir todos los bots de IA para lograr visibilidad. | Separar propósito y proveedor; entrenamiento no equivale a búsqueda. |
| llms.txt obligatorio / P0. | Auxiliar opcional; no garantiza indexación ni citas. |
| Una métrica por artículo porque los LLMs citan números. | Evidencia pertinente; cifras solo con fuente y contexto, sin cuota. |
| Grafo único en español o autoridad garantizada. | Hipótesis no acreditada; usar la arquitectura para ayudar a navegar. |
| GEO como Geographic Targeting en el documento local. | Separar contexto geográfico de Generative Engine Optimization. |
| Repetir credenciales o términos en schemas para reforzar autoridad. | Representación exacta del contenido y credenciales comprobadas. |
| Tono corporativo/CTAs de Hylea. | Voz personal, docente y ejecutiva; propuestas comerciales propias. |

## Aplicación al repositorio: pendientes concretos

Inspección de código y muestra editorial; no auditoría exhaustiva de producción. Los siguientes puntos quedan registrados, no corregidos por este trabajo documental.

| Prioridad | Evidencia local | Acción propuesta |
| --- | --- | --- |
| Alta | `lib/posts.ts` incluye todos los MDX y `getPostBySlug` no comprueba estado editorial. | Mantener borradores fuera de la carpeta pública; diseñar y verificar filtro antes de introducir `draft`. |
| Alta | `app/layout.tsx` usa LinkedIn `/in/nicolasvalenzuela`; `.claude/context/nicolas-profile.md` usa `/in/nvalenzuela/`. | Confirmar identidad canónica antes de sincronizar `sameAs`, bio y enlaces. |
| Alta | Perfil interno dice +20 años; código usa 25. `lib/data/profile.ts` contiene métricas y cifras de docencia sin fuente asociada. | Armar registro de evidencia y período; no elegir una cifra por intuición ni declarar falsas las existentes. |
| Alta | `app/components/JsonLd.tsx` inserta `JSON.stringify(data)` directamente en un script. | Revisar escape seguro de caracteres al serializar; prueba específica con texto que contenga cierre de script. No se ha demostrado explotación. |
| Media | `app/sitemap.ts` usa `new Date()` para páginas estáticas/topics y lista `/thanks`. | Usar modificaciones reales y revisar si la confirmación debe indexarse; ajustar robots meta/sitemap de forma consistente. |
| Media | Metadatos del artículo no incluyen `dateModified`; no hay campo equivalente en `PostMeta`. | Definir fecha de actualización real, visible y coherente con schema y sitemap. |
| Media | El artículo NRF 2026 atribuye observaciones al evento sin enlaces de fuente en el texto revisado. | Sustentar afirmaciones con sesiones/casos primarios; distinguir análisis de asistencia personal. |
| Media | “La IA no está deshumanizando…” usa causas generales y absolutas. | Conservar tesis como opinión; aportar ejemplo, alcance y límites sin inventar evidencia. |
| Media | El perfil histórico describe Hylea como no productiva; otros documentos describen actividad posterior. | Reconciliar contexto biográfico con fuentes vigentes antes de reutilizarlo. |
| Media | `TrackInsightView` emite `view_insight`; esto no prueba configuración de GA4 ni atribución de asistentes. | Auditar medición y construir línea base con acceso autorizado; sin resultados observados todavía. |

En la revisión previa de esta conversación, `npm run lint` arrojó 4 errores y 5 warnings. Este cambio documental no los corrige ni requiere repetir build/lint. Antes de cambios de código, revisar su vigencia.

## Qué significa “aprendido”

Las reglas quedaron persistidas en el repositorio para futuras sesiones que lean `AGENTS.md`. No se instaló una skill global, no se crearon agentes, no se modificó Hylea/Notion y no se publicó contenido. Los aprendizajes futuros deben actualizar este criterio con fuente, fecha y alcance, evitando acumular recetas contradictorias.
