---
title: "Shopify: performance y conversión sin apps pesadas"
client: "Retail moda (confidencial)"
industry: "eCommerce moda"
role: "Shopify Developer & Technical SEO"
stack:
  - "Shopify Liquid"
  - "Tailwind CSS"
  - "Cloudflare Images"
  - "GA4 / Meta Pixel"
highlights:
  - "Refactor de plantillas Liquid para semántica, accesibilidad y eliminación de apps de carrusel pesadas."
  - "Optimización de assets: preload crítico, imágenes responsivas con width/height fijos y lazy loading controlado."
  - "Implementación de eventos GA4/Pixel sin bloqueo del hilo principal ni scripts duplicados."
results:
  - "Disponible bajo solicitud. CWV verificado en staging con CLS≈0 y carga estable del hero."
  - "Tracking de conversión auditado y medible sin dependencias de terceros."
situation: "La tienda usaba un theme genérico con múltiples apps de terceros que generaban CLS, tracking duplicado y LCP alto en móviles."
task: "Reducir LCP/CLS y dejar una base lista para campañas de performance y CRO sin sacrificar funcionalidades."
action: "Auditoría técnica del theme, limpieza de apps redundantes, refactor a secciones nativas, optimización de imágenes y scripts diferidos para tracking."
outcome: "Theme liviano, accesible y listo para escalar campañas con CWV estables y eventos medibles."
status: "confidential"
date: 2024-10-12
seo:
  title: "Case study Shopify: performance y conversión"
  description: "Refactor técnico de Shopify Liquid para mejorar CWV, accesibilidad y tracking limpio."
---

## Contexto

La tienda dependía de apps de carrusel, pop-ups y bundles que inyectaban iframes y CSS bloqueante. El hero no tenía width/height y el menú móvil generaba CLS. También había scripts de Pixel duplicados y GA4 cargado dos veces.

## Tarea

Reducir la fricción de renderizado y dejar una arquitectura medible: layout semántico, imágenes optimizadas y eventos de conversión confiables.

## Acción

- Refactor de secciones a Liquid nativo + Tailwind, eliminando apps redundantes.
- Preload crítico de CSS mínimo y carga diferida de scripts de tracking con `async`/`defer`.
- Imágenes en WebP/AVIF con tamaños declarados y placeholders ligeros para evitar saltos.
- Navegación móvil accesible con estados `:focus-visible` y controles por teclado.
- Auditoría de eventos de conversión: estandarización de `view_item`, `add_to_cart`, `purchase` sin duplicados.

## Resultado

Resultado: Disponible bajo solicitud. Se validó en staging con Lighthouse local: CLS≈0, LCP estable en hero con imagen optimizada y tracking sin bloqueos. Base lista para pruebas A/B y campañas de performance.
