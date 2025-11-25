# Conventions de Nomage (NAMING)

Ce document décrit les conventions de nommage utilisées dans ce projet afin d'assurer la cohérence, la lisibilité et la maintenabilité du code.

## JavaScript
- Fichiers: `kebab-case.js` (ex: `button-handler.js`, `keyboard-handler.js`).
- Variables et fonctions: `camelCase` (ex: `initializeKeyboard`, `currentInput`).
- Constantes (valeurs figées au runtime): `SCREAMING_SNAKE_CASE` si globales, sinon `camelCase`.
- Classes et constructeurs: `PascalCase`.
- Éviter les abréviations obscures; privilégier des noms explicites.

### État et UI
- Objet d'état principal: `state` avec propriétés `currentInput`, `previousInput`, `operator`.
- Références DOM: noms explicites (ex: `display`, `buttons`).
- Gestionnaires d'événements: préfixe `handle` (ex: `handleNumberInput`).

### Opérateurs
- En interne, normaliser les opérateurs vers `+`, `-`, `*`, `/`.
- À l'UI, l'affichage peut être `×`, `÷`. La conversion est gérée dans `calculator.js`.

## CSS
- Fichiers: `kebab-case.css`.
- Variables CSS: `--kebab-case` (ex: `--primary-color`).
- Classes: `kebab-case` (ex: `control-button`, `dropdown-menu`).

## HTML
- IDs: `kebab-case` si possible, ou s'aligner sur les IDs existants.
- Attributs `data-*`: `data-i18n`, `data-lang`, etc.

## Ressources et i18n
- Dossiers de locales: `locales/<lang>.json` (`fr`, `en`, `de`, `es`).
- Clés i18n: `lowerCamelCase` ou `dot.separated` selon besoin de hiérarchie.

## Git et messages de commit (suggestion)
- Préfixes: `feat:`, `fix:`, `docs:`, `refactor:`, `style:`, `chore:`.
- Rédiger au présent, concis, en anglais ou français cohérent.
