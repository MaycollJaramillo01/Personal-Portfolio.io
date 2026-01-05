---
title: "Tracking de conversiones: GA4 + Pixel + eventos sin romper performance"
excerpt: "Configuracion de GA4 y Meta Pixel sin scripts duplicados ni bloqueos: orden de carga, naming y pruebas."
tags:
  - "Analitica"
  - "GA4"
  - "Meta Pixel"
  - "Performance"
date: 2024-09-12
lang: "es"
seo:
  title: "Tracking de conversiones ligero: GA4 + Pixel sin afectar CWV"
  description: "Guia practica para configurar GA4 y Meta Pixel con eventos consistentes y carga no bloqueante."
---

No necesitas romper el LCP para medir conversiones. El truco esta en ordenar los scripts y definir eventos consistentes.

## 1) Carga de scripts

- Usa `async`/`defer` para GA4 y Pixel. Evita inyectar librerias dentro de otros scripts que bloquean el main thread.
- No dupliques Pixel con GTM y codigo manual. Elige uno y controla las inyecciones.
- Si usas CSP, permite solo los dominios necesarios (`www.googletagmanager.com`, `www.google-analytics.com`, `connect.facebook.net`).

## 2) Naming y parametros

- Define un diccionario de eventos: `view_item`, `add_to_cart`, `begin_checkout`, `purchase`.
- Reutiliza los mismos nombres en GA4 y Pixel; solo cambia los parametros segun plataforma.
- Usa `event_id` consistente para conciliacion entre Pixel y GA4 (importante para campañas).

## 3) Donde disparar

- `view_item`: al renderizar la ficha, no en scroll.
- `add_to_cart`: en el click real, con debounce minimo y validacion del producto.
- `purchase`: en el thank you real, despues de confirmar el pago. Evita dispararlo en la pagina previa.
- Para formularios, usa `submit` con validacion; no dispares eventos en cada cambio de campo.

## 4) Performance y privacidad

- Carga los scripts despues del contenido principal. Si la prioridad es maxima, precarga DNS y usa `defer`.
- Evita paquetes adicionales para tracking si ya tienes GTM; cada libreria suma KB y evaluaciones JS.
- Documenta que datos envias y respeta el consentimiento segun la region. No ocultes este paso.

## 5) Pruebas

- DebugView de GA4 + extension Pixel Helper para validar eventos.
- Network tab: verifica que no haya llamadas duplicadas ni respuestas 400.
- Simula conexiones lentas para asegurarte de que los scripts no bloquean el render.

## Resultado esperado

Un setup ligero: scripts asincronicos, eventos con nombres consistentes y sin duplicidad. Mides conversiones sin degradar CWV ni accesibilidad.
