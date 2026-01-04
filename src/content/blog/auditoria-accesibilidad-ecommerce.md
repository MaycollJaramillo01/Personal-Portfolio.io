---
title: "Auditoría de accesibilidad WCAG en eCommerce: errores repetidos y fixes"
excerpt: "Patrones que veo en auditorías de tiendas online: focus invisibles, anuncios que bloquean lectores de pantalla y carritos inaccesibles."
tags:
  - "Accesibilidad"
  - "WCAG"
  - "eCommerce"
date: 2024-10-02
lang: "es"
seo:
  title: "Accesibilidad en eCommerce: checklist de errores y correcciones"
  description: "Errores WCAG frecuentes en tiendas online y cómo solucionarlos sin romper la conversión."
---

Las tiendas online suelen fallar en lo mismo. Estos son los hallazgos más repetidos y cómo los corrijo sin afectar la conversión.

## 1) Focus invisible o secuencias rotas

- **Problema:** botones y enlaces sin `:focus-visible`. El usuario de teclado no sabe dónde está.
- **Fix:** define estilos consistentes (`outline` o `box-shadow`), evita remover el foco y usa orden lógico en el DOM. En menús móviles, asegura que el foco quede dentro del panel hasta cerrarlo.

## 2) Imágenes y badges sin texto alternativo

- **Problema:** carruseles y banners con texto incrustado en la imagen. Lectores de pantalla no perciben la oferta.
- **Fix:** usa `alt` descriptivo o texto real en HTML; evita texto crítico en imágenes. Si el elemento es decorativo, `alt=""`.

## 3) Formularios con mensajes poco claros

- **Problema:** errores solo en color o placeholders que desaparecen. Inputs sin `aria-invalid` o `aria-describedby`.
- **Fix:** muestra mensajes de error visibles, asocia `aria-describedby` al mensaje y mantiene el texto aún con color. Usa labels explícitos.

## 4) Componentes dinámicos sin roles ni avisos

- **Problema:** carritos laterales o toasts que aparecen sin anunciarse; el lector de pantalla no sabe que algo cambió.
- **Fix:** para toasts, utiliza `role="status"` con texto conciso. Para paneles, maneja `aria-expanded` y `aria-controls` y envía el foco al contenedor.

## 5) Contraste y estado deshabilitado

- **Problema:** botones deshabilitados con contraste insuficiente o mismo color que el activo.
- **Fix:** respeta AA mínimo (4.5:1) en texto y controles. Diferencia estados con color y opacidad, no solo con transparencia ligera.

## 6) Modal y checkout

- **Problema:** modales sin foco inicial ni bloqueo de scroll. En checkout, pasos que dependen de hover.
- **Fix:** foco en el primer campo del modal, `aria-modal="true"` y manejo de `Escape`. En checkout, todo accionable debe ser navegable por teclado sin hover obligatorio.

## Cómo lo verifico rápidamente

- Axe DevTools + inspección manual de foco y contraste.
- Recorrido completo por teclado en mobile/desktop.
- Revisión de `tabindex` > 0 (bandera roja) y elementos `button`/`a` sin role correcto.
- Capturas Lighthouse para accesibilidad + validación manual de componentes críticos (carrito, checkout, filtros).

## Conclusión

Accesibilidad no es un proyecto paralelo: es diseño y desarrollo con reglas claras. Si haces visibles los focus, escribes alt reales y controlas modales/carritos, ya resuelves gran parte de los errores repetidos en eCommerce.
