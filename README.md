# Farkle · the KCD2 dice game

A fan-made dice game inspired by the one played in the taverns of **Kingdom Come: Deliverance** and **Kingdom Come: Deliverance II**, with the same scoring. It installs on your phone like an app, works offline and is pure luck: no weighted dice, no badges. You decide when to bank.

**▶ Play:** https://mauro-hw.github.io/farkle/

> Unofficial fan project, not affiliated with Warhorse Studios or the game's publisher. Kingdom Come: Deliverance is a trademark of its respective owners. No art, music, sounds or text from the game are used. Farkle is a traditional dice game.

## Features

- **Against the tavern:** an opponent played by the phone, who sometimes pushes their luck and sometimes banks too early.
- **Two players, one phone:** pass the phone back and forth each turn.
- **Shake to roll:** shake the phone like a dice cup and, when you stop, the dice fall.
- **Play to 3,000, 5,000 or 8,000 points.**
- **Dice sounds** (can be turned off) and, if you switch it on, the **farkle risk** of the next roll.
- **Works without internet** once installed, and keeps the screen on while you play.

## Recommended listening

For the full tavern experience, play **"The Hole in the Wall"** or **"Siamo Tutti Pronti"** from the KCD2 soundtrack in the background.

## Install on your phone

**Android (Chrome):** open the game link, tap the ⋮ menu and choose **Install app** (or **Add to Home screen**).

**iPhone (Safari):** open the game link, tap **Share** and choose **Add to Home Screen**. The first time you tap the screen, the iPhone will ask for permission to use motion: allow it so you can shake.

On a computer, play in the browser with the buttons. Shaking only works on phones and tablets.

## How to play

1. Roll six dice.
2. Set aside at least one scoring die. Combinations only count with dice from the same roll.
3. Choose: roll the remaining dice again, or bank and add this turn's points to your score.
4. If a roll scores nothing, it's a **farkle**: you lose everything from that turn.
5. If you set aside all six dice, it's **hot dice**: roll all six again and keep adding.
6. The first to reach the goal wins.

## Scoring

| Combination | Points |
|---|---:|
| One ⚀ (1) | 100 |
| One ⚄ (5) | 50 |
| Three ⚀ ⚀ ⚀ | 1,000 |
| Three ⚁ ⚁ ⚁ | 200 |
| Three ⚂ ⚂ ⚂ | 300 |
| Three ⚃ ⚃ ⚃ | 400 |
| Three ⚄ ⚄ ⚄ | 500 |
| Three ⚅ ⚅ ⚅ | 600 |
| Low straight ⚀ ⚁ ⚂ ⚃ ⚄ | 500 |
| High straight ⚁ ⚂ ⚃ ⚄ ⚅ | 750 |
| Full straight ⚀ ⚁ ⚂ ⚃ ⚄ ⚅ | 1,500 |

Each matching die beyond three doubles the value of the three of a kind: four ⚃ are worth 800, five 1,600 and six 3,200.

## Privacy

No ads, no accounts, no tracking. Your settings (opponent, goal, sound…) are stored only on your device.

## Technical details

It's a progressive web app (PWA) made with plain HTML, CSS and JavaScript, with no libraries and no build step.

```
index.html             the whole game
sw.js                  service worker: caches the app so it plays offline
manifest.webmanifest   name, icon and colours when installed
icons/                 app icons
fonts/                 bundled fonts so they work offline
```

To publish it on your own GitHub Pages: upload these files to a public repository and turn on **Settings → Pages → Deploy from a branch**, branch `main`, folder `/ (root)`.

Rolls use the browser's cryptographic random number generator (`crypto.getRandomValues`), so every die is fair.

## Credits

- Fonts [Grenze Gotisch](https://fonts.google.com/specimen/Grenze+Gotisch) and [Alegreya Sans](https://fonts.google.com/specimen/Alegreya+Sans), under the SIL Open Font License.
- Scoring based on the dice minigame in Kingdom Come: Deliverance II, by Warhorse Studios.
