---
title: "SEO técnico: indexación controlada y schema limpio"
client: "Marketplace regional (privado)"
industry: "Marketplace B2C"
role: "Technical SEO Lead"
stack:
  - "Astro"
  - "Node.js"
  - "GSC / Screaming Frog"
  - "Schema.org JSON-LD"
highlights:
  - "Mapeo de arquitectura y generación de `robots.txt`/sitemap segmentado por idioma."
  - "Implementación de Person/WebSite/ProfilePage + BreadcrumbList dinámico en páginas internas."
  - "Limpieza de thin content y canonicals consistentes para evitar duplicidad ES/EN."
results:
  - "Disponible bajo solicitud. Indexación revisada en GSC con reducción de páginas descubiertas sin indexar."
  - "Validación de schema con Rich Results Test sin errores."
situation: "El sitio bilingüe servía URLs duplicadas sin hreflang consistente; había thin content indexado y schema incompleto."
task: "Ordenar la arquitectura, limpiar indexación y asegurar datos estructurados válidos."
action: "Reestructuración de sitemaps, hreflang correcto, canónicas fiables y schema JSON-LD para entidades clave."
outcome: "Arquitectura clara con presupuesto de crawl optimizado y datos estructurados listos para resultados enriquecidos."
status: "public"
date: 2024-04-05
seo:
  title: "Case study SEO técnico: indexación y schema"
  description: "Arquitectura SEO bilingüe, hreflang consistente y JSON-LD validado para mejorar indexación."
---

## Contexto

La versión en inglés duplicaba la de español sin canónicas claras. Había páginas de categoría con filtros indexados y schema incompleto que Google ignoraba.

## Tarea

Reducir desperdicio de crawl y asegurar que cada URL clave tuviera hreflang, canonical y schema correcto.

## Acción

- División de sitemaps por idioma y tipo de contenido con prioridades claras.
- Hreflang bidireccional en layout base y canónicas auto-generadas por plantilla.
- Limpieza de URLs con parámetros usando reglas en `robots.txt` y canonicals en las plantillas.
- JSON-LD: Person + WebSite + BreadcrumbList en páginas internas; validación automática en pipelines de despliegue.

## Resultado

Resultado: Disponible bajo solicitud. GSC mostró disminución de "descubiertas sin indexar" y el schema pasó Rich Results Test sin errores, dejando la base lista para contenidos de autoridad.
