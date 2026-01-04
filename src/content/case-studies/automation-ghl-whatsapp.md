---
title: "Automatización: flujos GHL + WhatsApp Business API"
client: "Servicio educativo (privado)"
industry: "Edtech / Lead Gen"
role: "Automation & Integrations Lead"
stack:
  - "GHL"
  - "WhatsApp Business API"
  - "Node.js"
  - "Firebase Functions"
highlights:
  - "Diseño de flujos de nurturing en GHL con disparadores basados en intención y scoring."
  - "Webhook a WhatsApp Business API con plantillas aprobadas y control de opt-in."
  - "Logs centralizados y manejo de reintentos para evitar leads perdidos."
results:
  - "Disponible bajo solicitud. Conversaciones entregadas y trazabilidad completa con logs y DLQ en Functions."
  - "Reducción de respuestas tardías al automatizar mensajes iniciales y confirmaciones."
situation: "El equipo comercial respondía manualmente y perdía leads fuera de horario; no había trazabilidad ni control de opt-ins."
task: "Automatizar el primer contacto y estandarizar el seguimiento sin romper las políticas de WhatsApp."
action: "Orquestación de disparadores en GHL, webhook a Functions para llamar a la API de WhatsApp con plantillas aprobadas y panel de logs."
outcome: "Primer mensaje garantizado en segundos y pipeline auditable; el equipo comercial entra cuando el lead ya calificó."
status: "public"
date: 2024-02-22
seo:
  title: "Case study Automatización: GHL + WhatsApp Business"
  description: "Flujos de nurturing y mensajería automática con GHL y WhatsApp Business API, con trazabilidad completa."
---

## Contexto

Las respuestas iniciales dependían de disponibilidad humana. No había control de plantillas ni logs de entrega; los leads se perdían.

## Tarea

Automatizar el primer contacto, garantizar opt-in y dejar trazabilidad para el equipo de ventas.

## Acción

- Flujos en GHL disparados por formularios y eventos de intención.
- Endpoint serverless en Functions que envía mensajes via WhatsApp Business API con plantillas aprobadas.
- Manejo de reintentos, DLQ y panel de logs para seguimiento interno.
- Hand-off al CRM solo después de confirmar interés y horario.

## Resultado

Resultado: Disponible bajo solicitud. Mensajes iniciales automatizados y trazabilidad completa sin violar políticas de plataforma.
