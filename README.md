# Farkle · el juego de dados de KCD2

Juego fan de dados inspirado en el que se juega en las tabernas de **Kingdom Come: Deliverance** y **Kingdom Come: Deliverance II**, con la misma puntuación. Se instala en el móvil como una app, funciona sin conexión y es pura suerte: no hay dados trucados ni insignias. Tú decides cuándo plantarte.

**▶ Jugar:** https://mauro-hw.github.io/farkle/

> Proyecto fan no oficial, sin relación con Warhorse Studios ni con la editora del juego. Kingdom Come: Deliverance es una marca de sus respectivos propietarios. No usa arte, música, sonidos ni textos del juego. El Farkle es un juego de dados tradicional.

## Qué incluye

- **Contra la taberna:** un rival controlado por el móvil, que a veces arriesga y a veces se planta antes de tiempo.
- **Dos jugadores, un móvil:** os vais pasando el móvil en cada turno.
- **Agitar para tirar:** agitas el móvil como un cubilete y, cuando paras, caen los dados.
- **Meta a 3.000, 5.000 u 8.000 puntos.**
- **Sonido de dados** (se puede quitar) y, si lo activas, el **riesgo de farkle** de la próxima tirada.
- **Funciona sin internet** una vez instalada y mantiene la pantalla encendida mientras jugáis.

## Instalar en el móvil

**Android (Chrome):** abre el enlace de juego, pulsa el menú ⋮ y elige **Instalar aplicación** (o **Añadir a pantalla de inicio**).

**iPhone (Safari):** abre el enlace de juego, pulsa **Compartir** y elige **Añadir a pantalla de inicio**. La primera vez que toques la pantalla, el iPhone te pedirá permiso para usar el movimiento: acéptalo para poder agitar.

En el ordenador se juega desde el navegador con los botones. Agitar solo funciona en móviles y tabletas.

## Cómo se juega

1. Tiras seis dados.
2. Apartas al menos un dado que puntúe. Las combinaciones solo cuentan con dados de la misma tirada.
3. Eliges: vuelves a tirar los dados que quedan o te plantas y sumas los puntos de la mano.
4. Si una tirada no puntúa nada, es **farkle**: pierdes todo lo que llevabas en esa mano.
5. Si consigues apartar los seis dados, son **dados calientes**: vuelves a tirar los seis y sigues sumando.
6. Gana quien llegue antes a la meta.

## Puntuación

| Combinación | Puntos |
|---|---:|
| Un ⚀ (1) | 100 |
| Un ⚄ (5) | 50 |
| Tres ⚀ ⚀ ⚀ | 1.000 |
| Tres ⚁ ⚁ ⚁ | 200 |
| Tres ⚂ ⚂ ⚂ | 300 |
| Tres ⚃ ⚃ ⚃ | 400 |
| Tres ⚄ ⚄ ⚄ | 500 |
| Tres ⚅ ⚅ ⚅ | 600 |
| Escalera baja ⚀ ⚁ ⚂ ⚃ ⚄ | 500 |
| Escalera alta ⚁ ⚂ ⚃ ⚄ ⚅ | 750 |
| Escalera completa ⚀ ⚁ ⚂ ⚃ ⚄ ⚅ | 1.500 |

Cada dado igual por encima de tres dobla el valor del trío: cuatro ⚃ valen 800, cinco 1.600 y seis 3.200.

## Privacidad

No hay anuncios, cuentas ni seguimiento. Los ajustes (rival, meta, sonido…) se guardan solo en tu dispositivo.

## Detalles técnicos

Es una app web progresiva (PWA) hecha con HTML, CSS y JavaScript, sin librerías ni proceso de compilación.

```
index.html             el juego completo
sw.js                  service worker: guarda la app para jugar sin conexión
manifest.webmanifest   nombre, icono y colores al instalarla
icons/                 iconos de la app
fonts/                 tipografías incluidas para que funcionen sin conexión
```

Para publicarla en tu propio GitHub Pages: sube estos archivos a un repositorio público y activa **Settings → Pages → Deploy from a branch**, rama `main`, carpeta `/ (root)`.

Las tiradas usan el generador aleatorio criptográfico del navegador (`crypto.getRandomValues`), así que todos los dados son justos.

## Créditos

- Tipografías [Grenze Gotisch](https://fonts.google.com/specimen/Grenze+Gotisch) y [Alegreya Sans](https://fonts.google.com/specimen/Alegreya+Sans), con licencia SIL Open Font License.
- Puntuación basada en el minijuego de dados de Kingdom Come: Deliverance II, de Warhorse Studios.
