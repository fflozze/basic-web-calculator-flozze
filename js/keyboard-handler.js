/**
 * Importation de la fonction de calcul depuis le fichier calculator.js.
 */
import { calculate } from "./calculator.js";

/**
 * Initialise les événements clavier pour la calculatrice.
 * @param {HTMLElement} display - Élément d'affichage de la calculatrice.
 * @param {Object} state - Objet contenant l'état de la calculatrice (currentInput, operator, previousInput).
 */
export function initializeKeyboard(display, state) {
  /**
   * Écouteur d'événement pour les touches du clavier.
   * @param {KeyboardEvent} event - L'événement de clavier.
   */
  document.addEventListener("keydown", (event) => {
    const key = event.key;

    /**
     * Si la touche est un chiffre ou un point décimal, ajoute la valeur à l'entrée actuelle.
     */
    if ((key >= "0" && key <= "9") || key === ".") {
      state.currentInput += key;
      display.textContent = state.currentInput;
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      /**
       * Si la touche est un opérateur (+, -, *, /), enregistre l'opérateur et l'entrée précédente.
       */
      state.operator = key;
      state.previousInput = state.currentInput;
      state.currentInput = "";
    } else if (key === "Enter") {
      /**
       * Si la touche est "Enter", calcule le résultat de l'opération.
       */
      if (state.operator && state.previousInput && state.currentInput) {
        const result = calculate(
          state.previousInput,
          state.operator,
          state.currentInput
        );
        display.textContent = result;
        state.currentInput = result;
        state.operator = "";
        state.previousInput = "";
      }
    } else if (key === "Backspace") {
      /**
       * Si la touche est "Backspace", supprime le dernier caractère de l'entrée actuelle.
       */
      state.currentInput = state.currentInput.slice(0, -1);
      display.textContent = state.currentInput;
    }
  });
}
