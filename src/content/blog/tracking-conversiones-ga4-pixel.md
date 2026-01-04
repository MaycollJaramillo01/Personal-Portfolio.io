---
title: "Tracking de conversiones: GA4 + Pixel + eventos sin romper performance"
excerpt: "Configuración de GA4 y Meta Pixel sin scripts duplicados ni bloqueos: orden de carga, naming y pruebas."
tags:
  - "Analítica"
  - "GA4"
  - "Meta Pixel"
  - "Performance"
date: 2024-09-12
lang: "es"
seo:
  title: "Tracking de conversiones ligero: GA4 + Pixel sin afectar CWV"
  description: "Guía práctica para configurar GA4 y Meta Pixel con eventos consistentes y carga no bloqueante."
---

No necesitas romper el LCP para medir conversiones. El truco está en ordenar los scripts y definir eventos consistentes.

## 1) Carga de scripts

- Usa `async`/`defer` para GA4 y Pixel. Evita inyectar librerías dentro de otros scripts que bloquean el main thread.
- No dupliques Pixel con GTM y código manual. Elige uno y controla las inyecciones.
- Si usas CSP, permite solo los dominios necesarios (`www.googletagmanager.com`, `www.google-analytics.com`, `connect.facebook.net`).

## 2) Naming y parámetros

- Define un diccionario de eventos: `view_item`, `add_to_cart`, `begin_checkout`, `purchase`.
- Reutiliza los mismos nombres en GA4 y Pixel; solo cambia los parámetros según plataforma.
- Usa `event_id` consistente para conciliación entre Pixel y GA4 (importante para campañas).

## 3) Dónde disparar

- `view_item`: al renderizar la ficha, no en scroll.
- `add_to_cart`: en el click real, con debounce mínimo y validación del producto.
- `purchase`: en el thank you real, después de confirmar el pago. Evita dispararlo en la página previa.
- Para formularios, usa `submit` con validación; no dispares eventos en cada cambio de campo.

## 4) Performance y privacidad

- Carga los scripts después del contenido principal. Si la prioridad es máxima, precarga DNS y usa `defer`.
- Evita paquetes adicionales para tracking si ya tienes GTM; cada librería suma KB y evaluaciones JS.
- Documenta qué datos envías y respeta el consentimiento según la región. No ocultes este paso.

## 5) Pruebas

- DebugView de GA4 + extensión Pixel Helper para validar eventos.
- Network tab: verifica que no haya llamadas duplicadas ni respuestas 400.
- Simula conexiones lentas para asegurarte de que los scripts no bloquean el render.

## Resultado esperado

Un setup ligero: scripts asincrónicos, eventos con nombres consistentes y sin duplicidad. Mides conversiones sin degradar CWV ni accesibilidad.
