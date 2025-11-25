# Calculatrice Web Basique 🧮

Une calculatrice web moderne et intuitive, développée avec HTML, CSS et JavaScript. ✅

## Description 📋

Ce projet est une calculatrice web qui permet d'effectuer des opérations arithmétiques de base (addition, soustraction, multiplication, division). L'application offre une interface utilisateur moderne et responsive avec des effets visuels attrayants. 🎨

## Fonctionnalités ✨

- Opérations arithmétiques de base (+, -, ×, ÷). ➕
- Affichage des résultats avec une police numérique personnalisée. 🔢
- Interface utilisateur moderne et responsive. 🎨
- Support des entrées clavier et tactile. ⌨️
- Design adaptatif pour tous les appareils (desktop, tablette, mobile). 📱
- Effets de lueur (text-shadow) sur les éléments interactifs. ✨
- Gestion des erreurs de calcul. ⚠️

## Structure du Projet 📂

basic-web-calculator-flozze/ \
│ \
├── css/ \
│ ├── style.css : Styles principaux de l'application. 🎨 \
│ ├── button.css : Styles des boutons de la calculatrice. 🔘 \
│ ├── root/ \
│ │ ├── color.css : Variables et constantes de couleurs. 🎨 \
│ │ └── font.css : Configuration des polices d'écriture. 🖌️ \
│ ├── media-query/ \
│ │ ├── media-handler.css : Gestion des imports des media queries. 📱 \
│ │ ├── media-992px.css : Styles pour écrans jusqu'à 992px. 📱 \
│ │ ├── media-768px.css : Styles pour écrans jusqu'à 768px. 📱 \
│ │ └── media-576px.css : Styles pour écrans jusqu'à 576px. 📱 \
│ └── font/ \
│ └── digital-7.ttf : Police numérique personnalisée. 🔢 \
│ \
├── js/ \
│ ├── main.js : Point d'entrée principal de l'application. 📜 \
│ ├── button-handler.js : Gestion des interactions avec les boutons. 🔘 \
│ ├── button-animation.js : Animations des boutons. ✨ \
│ ├── calculator.js : Logique de calcul de la calculatrice. 🧮 \
│ └── keyboard-handler.js : Gestion des entrées clavier. ⌨️ \
│ \
├── index.html : Structure HTML principale de l'application. 📄 \
└── README.md : Documentation du projet. 📖

## Installation 🛠️

Pour exécuter ce projet localement, suivez ces étapes :

1. Clonez le dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/votre-utilisateur/basic-web-calculator-flozze.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd basic-web-calculator-flozze
   ```

3. Ouvrez le fichier index.html dans votre navigateur web préféré. 🌐

## Utilisation 💻

1. Pour effectuer des calculs :
   - Utilisez les boutons numériques (0-9) pour entrer les nombres
   - Utilisez les boutons d'opération (+, -, ×, ÷) pour les calculs
   - Appuyez sur "=" pour obtenir le résultat
   - Appuyez sur "C" pour effacer

2. Vous pouvez également utiliser votre clavier :
   - Chiffres (0-9) pour les nombres
   - Opérateurs (+, -, *, /) pour les calculs
   - Entrée pour calculer
   - Échap ou Supprimé pour effacer tout
   - Backspace pour supprimer le dernier caractère

## Responsive Design 📱

L'application s'adapte à différentes tailles d'écran :

- **Desktop** : Interface complète avec tailles de police standard
- **Tablettes** : Ajustement des tailles de police et des espacements
- **Mobiles** : Interface optimisée pour les petits écrans

## Effets Visuels 🎨

L'application utilise plusieurs effets visuels pour améliorer l'expérience utilisateur :

- **Text-shadow** :
  - Écran d'affichage : 3px de lueur
  - Boutons : 3px de lueur
- **Box-shadow** :
  - Conteneur principal : 3px de lueur
  - Boutons : 3px de lueur
  - Écran d'affichage : 3px de lueur

## Documentation 📖

La documentation du code est générée avec JSDoc. Pour générer la documentation, suivez ces étapes :

1. Installez JSDoc globalement si ce n'est pas déjà fait :

   ```bash
   npm install -g jsdoc
   ```

2. Générez la documentation en exécutant la commande suivante dans le répertoire du projet :

   ```bash
   jsdoc js/main.js js/button-handler.js js/calculator.js js/keyboard-handler.js js/button-animation.js
   ```

3. Ouvrez le fichier index.html dans le dossier out pour visualiser la documentation.

## Fonctionnalités Techniques 🔧

- Utilisation des modules ES6 pour une meilleure organisation du code
- Manipulation du DOM pour une interface dynamique
- Gestion des événements pour l'interactivité
- Styles CSS modernes avec variables et animations
- Media queries pour un design responsive
- Organisation modulaire des fichiers CSS

## Auteur 👨‍💻

**Flozze**


---

## Qualité du code et logique de calcul 🧠

- La logique de calcul est centralisée dans `js/calculator.js`.
- Les opérateurs d'interface `×` et `÷` sont automatiquement normalisés en interne vers `*` et `/`.
- Les entrées invalides et la division par zéro renvoient `Erreur` à l'écran.
- Un arrondi technique est appliqué pour éviter les artefacts (ex: 0.30000000000000004).

## Structure mise à jour 🗂️

- `js/i18n.js` : internationalisation (i18next) et sélecteur de langue.
- `locales/*.json` : traductions (fr, en, de, es).
- `NAMING.md` : conventions de nommage du projet.
- `TECHNOLOGIES.md` : technologies et décisions d'architecture.

## Liens utiles 🔗

- Conventions de nommage: `NAMING.md`
- Technologies et outils: `TECHNOLOGIES.md` (ou `THECNOLOGIES.md`)

