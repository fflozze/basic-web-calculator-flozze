/**
 * Importation de la fonction de calcul depuis le fichier calculator.js.
 */
import { calculate } from "./calculator.js";

/**
 * Initialise les événements de clic pour les boutons de la calculatrice.
 * @param {NodeList} buttons - Liste des boutons de la calculatrice.
 * @param {HTMLElement} display - Élément d'affichage de la calculatrice.
 * @param {string} currentInput - Entrée actuelle de l'utilisateur.
 * @param {string} operator - Opérateur mathématique sélectionné.
 * @param {string} previousInput - Entrée précédente de l'utilisateur.
 */
export function initializeButtons(
  buttons,
  display,
  currentInput,
  operator,
  previousInput
) {
  /**
   * Ajoute un écouteur d'événement à chaque bouton.
   */
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      /**
       * Si le bouton est un chiffre ou un point décimal, ajoute la valeur à l'entrée actuelle.
       */
      if ((value >= "0" && value <= "9") || value === ".") {
        currentInput += value;
        display.textContent = currentInput;
      } else if (
        /**
         * Si le bouton est un opérateur (+, -, x, /), enregistre l'opérateur et l'entrée précédente.
         */
        value === "+" ||
        value === "-" ||
        value === "x" ||
        value === "/"
      ) {
        operator = value;
        previousInput = currentInput;
        currentInput = "";
      } else if (value === "=") {
        /**
         * Si le bouton est "=", calcule le résultat de l'opération.
         */
        if (operator && previousInput && currentInput) {
          const result = calculate(previousInput, operator, currentInput);
          display.textContent = result;
          currentInput = result;
          operator = "";
          previousInput = "";
        }
      } else if (value === "C") {
        /**
         * Si le bouton est "C", réinitialise l'affichage et les variables d'état.
         */
        currentInput = "";
        operator = "";
        previousInput = "";
        display.textContent = "0";
      }
    });
  });
}
