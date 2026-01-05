---
title: "Como reducir CLS de forma sistematica (checklist tecnico)"
excerpt: "Metodologia para bajar el CLS: inventario de elementos inestables, reglas de layout y pruebas de regresion visual."
tags:
  - "CWV"
  - "CLS"
  - "Performance"
date: 2024-11-15
lang: "es"
seo:
  title: "Checklist practico para reducir CLS sin romper UX"
  description: "Pasos accionables para eliminar CLS: placeholders, tamanos declarados y pruebas automatizadas."
---

El CLS no se arregla “a ojo”. Necesita una lista corta de controles y verificaciones constantes. Este es el flujo que uso en proyectos de ecommerce y landing pages.

## 1) Inventario de elementos inestables

- Identifica banners, hero, sliders, carousels, pop-ups, iframes y cualquier elemento inyectado por JS.
- Lista cada elemento con su selector y decide si puedes **fijar ancho/alto** o reservar espacio con `aspect-ratio`.
- Documenta que scripts de terceros inyectan nodos (chat, pixels, AB testing) y en que momento.

## 2) Reglas de layout (antes de optimizar assets)

- **Siempre** define `width` y `height` en imagenes hero y logos. Si hay responsive, usa `aspect-ratio` para reservar espacio.
- Usa `min-height` en contenedores que reciben contenido asincrono (ej. carritos y secciones “recomendados”).
- Evita cargar fuentes “ocultas” sin fallback; usa `font-display: swap` en fuentes locales.
- Los menus moviles deben mantener el contenedor (usa `position: fixed` y transiciones sobre `opacity`, no sobre `height`).

## 3) Control de terceros

- Scripts de chat o widgets: cargalos con `async` y nunca en el `<head>` si no son criticos.
- Si un widget mueve el layout, envuelvelo en un contenedor con tamano fijo o posicion absoluta.
- Limita los experimentos A/B a zonas con espacio reservado; evita testear el hero sin un placeholder solido.

## 4) Medicion y alertas

- Usa el **Performance panel** de Lighthouse y filtra por `layout-shift`. Identifica que nodo cambio.
- En staging, corre **regresion visual** con snapshots (Playwright) para detectar saltos.
- En produccion, monitorea CLS real con RUM (ej. `web-vitals` + endpoint ligero). Activa alertas si CLS > 0.1 en moviles.

## 5) Checklist rapido antes de deploy

- [ ] Hero con `width`/`height` o `aspect-ratio` + `object-fit`.
- [ ] Menu movil con overlay fijo (sin empujar contenido).
- [ ] Cards de producto con alturas consistentes y precios/CTA en la misma linea.
- [ ] Fuentes locales con preload y `font-display: swap`.
- [ ] Placeholders para componentes async (reviews, recomendaciones, mapas).
- [ ] Scripts de terceros en `async/defer` y, si es posible, cargados tras `DOMContentLoaded`.

## Casos reales

- **Ecommerce moda:** los sliders de hero cambiaban la altura segun la foto. Se definieron `aspect-ratio` 3:2, `object-fit: cover` y placeholders en Tailwind. CLS paso de saltos visibles a cero en metricas de devtools.
- **Landing B2B:** un widget de chat insertaba un banner en la parte inferior. Se movio a `position: fixed` con tamano fijo y carga diferida; se elimino el salto en moviles.
- **Blog tecnico:** imagenes sin tamano en articulos largos. Se ajusto la plantilla Markdown para exigir `width/height` y generar `sizes` automaticos.

## Conclusion

Reducir el CLS es repetir estos pasos en cada deploy: reservar espacio, controlar terceros y medir con RUM. No es magia; es disciplina y plantillas bien hechas.
