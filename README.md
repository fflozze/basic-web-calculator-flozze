# Calculatrice Web Basique 🧮

## Description 📝

La "Calculatrice Web Basique" est une application web simple qui permet d'effectuer des opérations arithmétiques de base (addition, soustraction, multiplication, division). L'application est conçue pour être intuitive et réactive, avec un design attrayant et une utilisation facile.

## Fonctionnalités ✨

- Affichage des résultats des opérations arithmétiques.
- Design réactif et attrayant.
- Utilisation de variables CSS pour une gestion facile des styles.
- Support des entrées via clavier et clics sur les boutons.
- Responsive Design : Adaptation automatique de l'interface aux différentes tailles d'écran grâce à `media-query.css`.
- Animations interactives pour les boutons grâce à `button-animation.js`.
- Support tactile pour les appareils mobiles.
- Gestion des entrées clavier pour une meilleure accessibilité.

## Structure du projet 📂

basic-web-calculator-flozze/ \
│ \
├── css/ \
│ ├── font/ \
│ │ └── digital-7.ttf \
│ ├── calculatrice.css \
│ ├── color.css \
│ ├── font.css \
│ └── media-query.css \
│ \
├── js/ \
│ ├── button-animation.js \
│ ├── button-handler.js \
│ ├── calculator.js \
│ ├── keyboard-handler.js \
│ └── main.js \
│ \
├── index.html \
└── README.md \

## Installation 🛠️

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/calculatrice-web-basique.git
   ```

2. Naviguez dans le répertoire du projet :
   ```bash
   cd calculatrice-web-basique
   ```

## Utilisation 💻

1. Ouvrez le fichier `index.html` dans votre navigateur pour voir l'application en action.

2. Utilisez les boutons de la calculatrice pour effectuer des opérations arithmétiques.

3. Vous pouvez également utiliser votre clavier pour entrer des chiffres et des opérateurs.

4. Sur les appareils mobiles, utilisez les boutons tactiles pour interagir avec la calculatrice.

## Documentation 📖

La documentation du code est générée avec des commentaires JSDoc. Pour générer la documentation, suivez ces étapes :

1. Installez JSDoc globalement si ce n'est pas déjà fait :

   ```bash
   npm install -g jsdoc
   ```

2. Générez la documentation en exécutant la commande suivante dans le répertoire du projet :

   ```bash
   jsdoc js/button-animation.js js/button-handler.js js/calculator.js js/keyboard-handler.js js/main.js
   ```

3. Ouvrez le fichier `index.html` dans le dossier `out` pour visualiser la documentation.

## Auteur 👨‍💻

**Flozze**
