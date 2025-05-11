/**
 * @fileoverview Gestion des entrées clavier pour la calculatrice
 */

/**
 * Importation de la fonction de calcul depuis le fichier calculator.js.
 */
import { calculate } from "./calculator.js";
import { handleBackspace } from "./button-handler.js";

/**
 * Initialise les gestionnaires d'événements pour le clavier.
 * @param {HTMLElement} display - Élément d'affichage de la calculatrice.
 * @param {Object} state - Objet contenant l'état de la calculatrice.
 */
export function initializeKeyboard(display, state) {
  document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Empêcher le comportement par défaut pour les touches numériques et les opérateurs
    if (
      (key >= "0" && key <= "9") ||
      key === "." ||
      key === "+" ||
      key === "-" ||
      key === "*" ||
      key === "/" ||
      key === "Enter" ||
      key === "Escape" ||
      key === "Delete" ||
      key === "Backspace"
    ) {
      event.preventDefault();
    }

    // Gérer la touche Backspace séparément
    if (key === "Backspace") {
      handleBackspace(display, state);
      return;
    }

    // Simuler le clic sur le bouton correspondant
    const button = getButtonForKey(key);
    if (button) {
      // Appliquer l'animation de pression
      button.style.transform = 'scale(0.95)';
      button.style.boxShadow = '1px 1px 4px #202020';
      
      // Simuler le clic
      button.click();

      // Retour à l'état normal après un court délai
      setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '3px 3px 12px #202020';
      }, 100);
    }
  });
}

/**
 * Retourne le bouton correspondant à la touche pressée.
 * @param {string} key - La touche pressée.
 * @returns {HTMLElement|null} Le bouton correspondant ou null si aucun bouton ne correspond.
 */
function getButtonForKey(key) {
  const buttonMap = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    ".": ".",
    "+": "+",
    "-": "-",
    "*": "×",
    "/": "÷",
    "Enter": "=",
    "Escape": "C",
    "Delete": "C"
  };

  const buttonValue = buttonMap[key];
  if (!buttonValue) return null;

  return Array.from(document.querySelectorAll(".button")).find(
    (button) => button.textContent === buttonValue
  );
}
