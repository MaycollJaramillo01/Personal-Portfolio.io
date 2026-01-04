---
title: "WordPress: auditoría técnica, seguridad y rendimiento"
client: "Grupo servicios B2B (privado)"
industry: "Servicios B2B"
role: "WordPress Technical Lead"
stack:
  - "WordPress (custom theme)"
  - "PHP"
  - "Nginx"
  - "Cloudflare"
highlights:
  - "Auditoría de plugins y hooks para eliminar consultas duplicadas y assets innecesarios."
  - "Hardening: roles mínimos, cabeceras de seguridad y revisión de permisos de archivo."
  - "Optimización de caché a dos niveles (Nginx + Cloudflare) y lazy loading controlado."
results:
  - "Disponible bajo solicitud. Pruebas locales con TTFB reducido tras caché y assets minificados."
  - "Checklist de seguridad entregado (CSP, Referrer-Policy, desactivación de XML-RPC)."
situation: "Sitio corporativo con theme personalizado pero sobrecargado con plugins legacy; problemas de seguridad (XML-RPC expuesto) y tiempos de respuesta irregulares."
task: "Reducir superficie de ataque, estabilizar performance y documentar controles para el equipo interno."
action: "Inventario y eliminación de plugins, revisión de permisos, cabeceras seguras, configuración de caché avanzada y optimización de imágenes."
outcome: "Sitio estable con caché coherente, assets controlados y controles de seguridad aplicados y documentados."
status: "public"
date: 2024-07-18
seo:
  title: "Case study WordPress: auditoría técnica y seguridad"
  description: "Hardening y optimización de WordPress: menos plugins, caché coherente y cabeceras seguras."
---

## Contexto

El sitio llevaba años acumulando plugins sin ownership claro. XML-RPC estaba expuesto, las rutas de administración se indexaban y los assets cargaban sin estrategia de versión. No existía documentación para el equipo de contenido.

## Tarea

Reducir riesgo y mejorar rendimiento sin rehacer el sitio: hardening, caché coherente y guía de operación.

## Acción

- Inventario de plugins + eliminación de duplicados (slider + analytics redundantes).
- Revisión de roles y permisos de archivo (`755/644`), bloqueo de `xmlrpc.php` y `wp-json` según necesidad.
- Cabeceras seguras: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` mínima y CSP restrictiva para assets locales.
- Caché en Nginx con claves por idioma + cacheo en Cloudflare con reglas de bypass para `/wp-admin`.
- Lazy loading medido, preload de fuentes locales y minificación de CSS/JS propios.

## Resultado

Resultado: Disponible bajo solicitud. Validado en staging: respuestas más consistentes con caché en frío y duro, reducción de assets enviados y checklist de seguridad entregado al equipo.
