# nicolas.com.ar — instrucciones de trabajo

## Contexto y fuentes

Sitio personal de Nicolás Valenzuela: criterio profesional, docencia y experiencia en retail, digital commerce, retail media e IA aplicada en Latinoamérica. Stack: Next.js App Router, React, TypeScript, Tailwind y artículos MDX.

Antes de crear o revisar contenido, SEO, metadata, datos estructurados o visibilidad en asistentes, leer [el criterio editorial y de visibilidad](docs/criterio-editorial-visibilidad.md). Su procedencia y los conflictos detectados están en [el registro de aprendizaje](docs/aprendizaje-hylea-notion-2026-10-10.md).

Jerarquía de trabajo:

1. Instrucciones actuales de Nicolás y evidencia primaria pertinente.
2. Este archivo y `docs/criterio-editorial-visibilidad.md` para criterios de trabajo.
3. Código para comprobar qué está implementado: `lib/data/profile.ts`, `lib/topics.ts`, `lib/posts.ts`, `content/insights/`, rutas y metadata.
4. `.claude/context/nicolas-profile.md` y documentos históricos como antecedentes, verificando contradicciones y vigencia.

El código acredita implementación, no veracidad de una credencial, cifra o resultado. No resolver discrepancias biográficas por mayoría de repeticiones. Las instrucciones antiguas de Copilot describen partes obsoletas del proyecto; verificar rutas y comportamiento real.

Antes de definir posicionamiento, bio, servicios o plan editorial, leer [la base MIT CDO](docs/base-mit-cdo-posicionamiento.md). Conectar trayectoria y trabajos verificados antes de elegir artículos o interacciones. El certificado general CDO ya fue leído en una fotografía aportada por Nicolás; Data Leadership es una credencial distinta. Conservar separados los documentos y el alcance de su verificación.

Para diseño, consultar `.claude/skills/frontend-design.md` y contrastar con componentes actuales. Mantener la identidad personal; las reglas de marca de Hylea no se trasladan automáticamente.

Para UX, performance, interacciones y aceptación de páginas, aplicar también [el estándar de experiencia ejecutiva](docs/estandar-experiencia-ejecutiva.md). Incluye la revisión de suficiencia del 2026-10-11, criterios sectoriales y pruebas requeridas por alcance. Sus requisitos de accesibilidad prevalecen sobre combinaciones de color o tamaños de la guía visual que no los cumplan.

## Reglas editoriales

- Definir lector, pregunta o decisión, tesis, aporte propio y evidencia antes de redactar.
- Español directo, ejecutivo y cercano; términos técnicos cuando aporten precisión. Primera persona solo para experiencias o posturas respaldadas de Nicolás.
- Distinguir hechos, experiencia atribuida, interpretación e hipótesis. No inventar citas, métricas, asistencia a eventos ni resultados.
- Aportar utilidad, mecanismos y límites. No imponer porcentajes, extensión, FAQs ni cantidad de artículos como receta de visibilidad.
- Verificar autoría, fechas, credenciales, nombres y alcance de los resultados. Proteger información confidencial y metodología propietaria cuando se use material de Hylea.
- Revisar contenido primero y representación técnica después. Una validación automática no sustituye el juicio editorial.

## Reglas de visibilidad

- Separar rastreabilidad, indexación, citas observadas y resultados de negocio. No afirmar una mejora sin medición.
- Separar búsqueda, entrenamiento y acciones iniciadas por usuarios al evaluar bots. No cambiar preferencias de entrenamiento por una supuesta necesidad SEO.
- Mantener coherencia entre texto visible, autor, metadata, canonical, JSON-LD y superficies auxiliares que existan.
- `llms.txt` es opcional; no es requisito universal ni garantía de citación. No agregar instrucciones ocultas para manipular asistentes.
- Usar fechas de modificación reales. Verificar HTML recuperable, enlaces, navegación accesible y acciones con estados claros.

## Implementación y validación

- Artículos publicados: `content/insights/*.mdx`, leídos por `lib/posts.ts`. El loader excluye `draft: true`, fechas inválidas y publicaciones futuras tanto de listados como del acceso por slug. Usar `updatedAt` solo cuando haya una actualización editorial real.
- No asumir scripts de Hylea: este proyecto tiene `dev`, `build`, `start` y `lint` en `package.json`.
- Para código, ejecutar controles apropiados al cambio; para rutas/metadata, revisar HTML y JSON-LD del build; para UI, verificar navegador en mobile y desktop. Informar fallos previos por separado.
- Para documentación, revisar diff, enlaces locales y coherencia. No hace falta un build si no cambia código.
- Mantener los cambios ajenos. Este documento no autoriza deploys, envíos, publicación ni tareas programadas por sí mismo.
- Los roles de investigación, edición y revisión técnica pueden cumplirse en una sesión. No son agentes instalados ni una instrucción para crear subagentes.
