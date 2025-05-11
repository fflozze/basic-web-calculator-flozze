/**
 * Importation des fonctions pour initialiser les boutons, le clavier et ajouter des animations.
 */
import { initializeButtons } from "./button-handler.js";
import { initializeKeyboard } from "./keyboard-handler.js";
import { addButtonAnimations } from "./button-animation.js";

/**
 * Écouteur d'événement pour s'assurer que le DOM est complètement chargé avant d'exécuter le script.
 */
document.addEventListener("DOMContentLoaded", () => {
  /**
   * Sélection de l'élément d'affichage de la calculatrice.
   * @type {HTMLElement}
   */
  const display = document.getElementById("screenDisplay");

  /**
   * Sélection de tous les boutons de la calculatrice.
   * @type {NodeList}
   */
  const buttons = document.querySelectorAll(".button");

  /**
   * Variable pour stocker l'entrée actuelle de l'utilisateur.
   * @type {string}
   */
  let currentInput = "";

  /**
   * Variable pour stocker l'opérateur mathématique sélectionné.
   * @type {string}
   */
  let operator = "";

  /**
   * Variable pour stocker l'entrée précédente de l'utilisateur.
   * @type {string}
   */
  let previousInput = "";

  /**
   * Initialisation des boutons de la calculatrice.
   * @param {NodeList} buttons - Liste des boutons de la calculatrice.
   * @param {HTMLElement} display - Élément d'affichage de la calculatrice.
   * @param {string} currentInput - Entrée actuelle de l'utilisateur.
   * @param {string} operator - Opérateur mathématique sélectionné.
   * @param {string} previousInput - Entrée précédente de l'utilisateur.
   */
  initializeButtons(buttons, display, currentInput, operator, previousInput);

  /**
   * Initialisation des événements clavier pour la calculatrice.
   * @param {HTMLElement} display - Élément d'affichage de la calculatrice.
   * @param {string} currentInput - Entrée actuelle de l'utilisateur.
   * @param {string} operator - Opérateur mathématique sélectionné.
   * @param {string} previousInput - Entrée précédente de l'utilisateur.
   */
  initializeKeyboard(display, currentInput, operator, previousInput);

  // Appeler la fonction pour ajouter les animations aux boutons
  addButtonAnimations();
});
