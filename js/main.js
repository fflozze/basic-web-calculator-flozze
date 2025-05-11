/**
 * Importation des fonctions pour initialiser les boutons et le clavier.
 */
import { initializeButtons } from "./button-handler.js";
import { initializeKeyboard } from "./keyboard-handler.js";
import "./button-animation.js";

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
   * Objet contenant l'état de la calculatrice.
   * @type {Object}
   */
  const state = {
    currentInput: "",
    operator: "",
    previousInput: ""
  };

  /**
   * Initialisation des boutons de la calculatrice.
   */
  initializeButtons(buttons, display, state);

  /**
   * Initialisation des événements clavier pour la calculatrice.
   */
  initializeKeyboard(display, state);
});
