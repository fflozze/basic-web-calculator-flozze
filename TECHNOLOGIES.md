# Technologies & Outils

Ce document liste les technologies utilisées dans ce projet et les raisons de ces choix.

## Front-end
- HTML5: structure sémantique de la page.
- CSS3: styles modernes (variables CSS, media queries, animations).
- JavaScript (ES Modules): logique applicative, modularité (`import`/`export`).

## Bibliothèques
- i18next (CDN): internationalisation, chargement de ressources JSON (`./locales/*.json`).
- Flag Icons (CDN): icônes de drapeaux pour le sélecteur de langue.

## Organisation du code
- Modules JS:
  - `main.js`: bootstrap de l'application, instanciation de l'état.
  - `button-handler.js`: gestion des interactions UI.
  - `keyboard-handler.js`: gestion des touches clavier et mapping vers l'UI.
  - `calculator.js`: logique métier de calcul, normalisation des opérateurs, gestion des erreurs.
  - `i18n.js`: initialisation et changement de langue.
- CSS en plusieurs fichiers: séparation des responsabilités (root, media queries, composants).

## Outils de documentation
- JSDoc (optionnel): génération de documentation statique depuis les commentaires.

## Décisions clés
- Centralisation de la logique de calcul dans `calculator.js` pour éviter la duplication et garantir la cohérence.
- Normalisation des opérateurs (UI: `×`, `÷` → interne: `*`, `/`).
- Gestion explicite de la division par zéro et des entrées invalides (affichage `Erreur`).

## Compatibilité
- Fonctionne dans les navigateurs modernes sans build tool (CDN + modules ES). 
- Aucun framework requis.
