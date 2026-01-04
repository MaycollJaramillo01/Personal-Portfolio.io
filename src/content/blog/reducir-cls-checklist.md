---
title: "Cómo reducir CLS de forma sistemática (casos reales y checklist)"
excerpt: "Una metodología simple para bajar el CLS: inventario de elementos inestables, reglas de layout y pruebas de regresión visual."
tags:
  - "CWV"
  - "CLS"
  - "Performance"
date: 2024-11-15
lang: "es"
seo:
  title: "Checklist práctico para reducir CLS sin romper UX"
  description: "Pasos accionables para eliminar CLS: placeholders, tamaños declarados y pruebas automatizadas."
---

El CLS no se arregla “a ojo”. Necesita una lista corta de controles y verificaciones constantes. Este es el flujo que uso en proyectos de ecommerce y landing pages.

## 1) Inventario de elementos inestables

- Identifica banners, hero, sliders, carousels, pop-ups, iframes y cualquier elemento injectado por JS.
- Lista cada elemento con su selector y decide si puedes **fijar ancho/alto** o reservar espacio con `aspect-ratio`.
- Documenta qué scripts de terceros inyectan nodos (chat, pixels, AB testing) y en qué momento.

## 2) Reglas de layout (antes de optimizar assets)

- **Siempre** define `width` y `height` en imágenes hero y logos. Si hay responsive, usa `aspect-ratio` para reservar espacio.
- Usa `min-height` en contenedores que reciben contenido asíncrono (ej. carritos y secciones “recomendados”).
- Evita cargar fuentes “ocultas” sin fallback; usa `font-display: swap` en fuentes locales.
- Los menús móviles deben mantener el contenedor (usa `position: fixed` y transiciones sobre `opacity`, no sobre `height`).

## 3) Control de terceros

- Scripts de chat o widgets: cárgalos con `async` y nunca en el `<head>` si no son críticos.
- Si un widget mueve el layout, envuélvelo en un contenedor con tamaño fijo o posición absoluta.
- Limita los experimentos A/B a zonas con espacio reservado; evita testear el hero sin un placeholder sólido.

## 4) Medición y alertas

- Usa el **Performance panel** de Lighthouse y filtra por `layout-shift`. Identifica qué nodo cambió.
- En staging, corre **regresión visual** con snapshots (Playwright) para detectar saltos.
- En producción, monitorea CLS real con RUM (ej. `web-vitals` + endpoint ligero). Activa alertas si CLS > 0.1 en móviles.

## 5) Checklist rápido antes de deploy

- [ ] Hero con `width`/`height` o `aspect-ratio` + `object-fit`.
- [ ] Menú móvil con overlay fijo (sin empujar contenido).
- [ ] Cards de producto con alturas consistentes y precios/CTA en la misma línea.
- [ ] Fuentes locales con preload y `font-display: swap`.
- [ ] Placeholders para componentes async (reviews, recomendaciones, mapas).
- [ ] Scripts de terceros en `async/defer` y, si es posible, cargados tras `DOMContentLoaded`.

## Casos reales

- **Ecommerce moda:** los sliders de hero cambiaban la altura según la foto. Se definieron `aspect-ratio` 3:2, `object-fit: cover` y placeholders en Tailwind. CLS pasó de saltos visibles a cero en métricas de devtools.
- **Landing B2B:** un widget de chat insertaba un banner en la parte inferior. Se movió a `position: fixed` con tamaño fijo y carga diferida; se eliminó el salto en móviles.
- **Blog técnico:** imágenes sin tamaño en artículos largos. Se ajustó la plantilla Markdown para exigir `width/height` y generar `sizes` automáticos.

## Conclusión

Reducir el CLS es repetir estos pasos en cada deploy: reservar espacio, controlar terceros y medir con RUM. No es magia; es disciplina y plantillas bien hechas.
