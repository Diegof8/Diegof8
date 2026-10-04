# Cuentas Claras

Micro app para controlar **gastos, ingresos e inversiones mes a mes**. Funciona en el navegador (móvil y escritorio), se puede instalar como app (PWA) y trabaja sin conexión. Los datos se guardan solo en el dispositivo del usuario: no hay cuentas, servidores ni anuncios.

## Qué hace

- **Resumen del mes**: ahorro, tasa de ahorro, ingresos y gastos (con variación frente al mes anterior), lo invertido y el valor de la cartera.
- **Gráficos de 12 meses**: ingresos frente a gastos y evolución de la cartera frente a lo aportado. Toca un mes para verlo en detalle.
- **Movimientos**: alta rápida de gastos e ingresos con categoría, fecha y nota; búsqueda y filtros; marca los fijos (alquiler, nómina, suscripciones) y cópialos al mes siguiente con un clic.
- **Dictado por voz**: pulsa «Dictar» y di, por ejemplo, «supermercado 150». La app detecta el importe, la categoría, si es gasto o ingreso («cobré 300 de freelance») y la fecha («ayer», «el lunes»). Entiende varios movimientos en una frase («cena 35 con 50 y netflix 13,99»), números en palabras («ciento cincuenta») y marcas habituales (Mercadona, Uber, Netflix…). Antes de guardar se muestra todo para revisarlo.
- **Presupuestos**: límite mensual por categoría con avisos de «Atención» y «Superado».
- **Inversiones**: fondos, acciones, cripto, depósitos… Cada mes registras lo que aportas y lo que vale; la app calcula ganancia, rentabilidad y distribución.
- **Ajustes**: moneda (EUR, USD, MXN, COP, ARS, CLP, PEN, GBP), copia de seguridad en JSON, exportación de movimientos a CSV (compatible con Excel) y restauración.

## Cómo usarla

Abre `index.html` en el navegador. Para instalarla en el móvil y que funcione sin conexión, sírvela desde una web (por ejemplo GitHub Pages, Netlify o Vercel) y usa «Añadir a pantalla de inicio».

Prueba local:

```bash
cd cuentas-claras
npx serve .
```

## Sobre el dictado

El micrófono usa el reconocimiento de voz del navegador (Web Speech API): funciona en Chrome, Edge y Safari, no en Firefox. En Chrome el audio se procesa en los servidores de Google; el texto resultante y los datos de la app no salen del dispositivo. Si el navegador no permite dictar, el mismo recuadro acepta la frase escrita o el dictado del teclado del móvil, y se interpreta igual.

## Estructura

| Archivo | Para qué |
| --- | --- |
| `index.html` | Toda la app: interfaz, estilos y lógica (sin dependencias ni compilación). |
| `manifest.webmanifest` | Datos para instalarla como app. |
| `sw.js` | Caché para uso sin conexión. |
| `icon.svg` | Icono. |

Al abrirla por primera vez muestra **datos de ejemplo** para que se vea cómo funciona; el botón «Empezar con mis datos» los borra.
