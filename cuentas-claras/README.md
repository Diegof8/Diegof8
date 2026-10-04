# Cuentas Claras

Micro app para controlar **gastos, ingresos e inversiones mes a mes**. Funciona en el navegador (móvil y escritorio), se puede instalar como app (PWA) y trabaja sin conexión. Los datos se guardan solo en el dispositivo del usuario: no hay cuentas, servidores ni anuncios.

## Qué hace

- **Resumen del mes**: ahorro, tasa de ahorro, ingresos y gastos (con variación frente al mes anterior), lo invertido y el valor de la cartera.
- **Gráficos de 12 meses**: ingresos frente a gastos y evolución de la cartera frente a lo aportado. Toca un mes para verlo en detalle.
- **Movimientos**: alta rápida de gastos e ingresos con categoría, fecha y nota; búsqueda y filtros; marca los fijos (alquiler, nómina, suscripciones) y cópialos al mes siguiente con un clic.
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

## Estructura

| Archivo | Para qué |
| --- | --- |
| `index.html` | Toda la app: interfaz, estilos y lógica (sin dependencias ni compilación). |
| `manifest.webmanifest` | Datos para instalarla como app. |
| `sw.js` | Caché para uso sin conexión. |
| `icon.svg` | Icono. |

Al abrirla por primera vez muestra **datos de ejemplo** para que se vea cómo funciona; el botón «Empezar con mis datos» los borra.
