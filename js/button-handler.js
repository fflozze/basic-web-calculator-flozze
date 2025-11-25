/**
 * Importation de la fonction de calcul depuis le fichier calculator.js.
 */
import { calculate } from "./calculator.js";

/**
 * Initialise les gestionnaires d'événements pour les boutons de la calculatrice.
 * @param {NodeList} buttons - Liste des boutons de la calculatrice.
 * @param {HTMLElement} display - Élément d'affichage de la calculatrice.
 * @param {Object} state - Objet contenant l'état de la calculatrice.
 */
export function initializeButtons(buttons, display, state) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (value >= "0" && value <= "9") {
        handleNumberInput(value, display, state);
      } else if (value === ".") {
        handleDecimalInput(display, state);
      } else if (value === "C") {
        handleClearInput(display, state);
      } else if (value === "=") {
        handleEqualsInput(display, state);
      } else if (["+", "-", "×", "÷"].includes(value)) {
        handleOperatorInput(value, display, state);
      }
    });
  });
}

/**
 * Gère l'entrée d'un nombre.
 * - Évite les zéros non significatifs en tête
 * @param {string} value - Le nombre entré.
 * @param {HTMLElement} display - L'élément d'affichage.
 * @param {Object} state - L'état de la calculatrice.
 */
function handleNumberInput(value, display, state) {
  if (state.currentInput === "0") {
    state.currentInput = value; // remplace le 0 initial
  } else if (state.currentInput === "" && value === "0") {
    state.currentInput = "0"; // garde un seul zéro
  } else {
    state.currentInput += value;
  }
  display.textContent = state.currentInput;
}

/**
 * Gère l'entrée d'une décimale.
 * @param {HTMLElement} display - L'élément d'affichage.
 * @param {Object} state - L'état de la calculatrice.
 */
function handleDecimalInput(display, state) {
  if (!state.currentInput.includes(".")) {
    state.currentInput = state.currentInput === "" ? "0." : state.currentInput + ".";
    display.textContent = state.currentInput;
  }
}

/**
 * Gère la réinitialisation de la calculatrice.
 * @param {HTMLElement} display - L'élément d'affichage.
 * @param {Object} state - L'état de la calculatrice.
 */
function handleClearInput(display, state) {
  state.currentInput = "";
  state.operator = "";
  state.previousInput = "";
  display.textContent = "0";
}

/**
 * Gère la suppression du dernier chiffre.
 * @param {HTMLElement} display - L'élément d'affichage.
 * @param {Object} state - L'état de la calculatrice.
 */
export function handleBackspace(display, state) {
  if (state.currentInput.length > 0) {
    state.currentInput = state.currentInput.slice(0, -1);
    display.textContent = state.currentInput || "0";
  }
}

/**
 * Gère l'entrée d'un opérateur.
 * @param {string} value - L'opérateur entré.
 * @param {HTMLElement} display - L'élément d'affichage.
 * @param {Object} state - L'état de la calculatrice.
 */
function handleOperatorInput(value, display, state) {
  if (state.currentInput === "") return;

  if (state.previousInput !== "") {
    handleEqualsInput(display, state);
  }

  state.operator = value;
  state.previousInput = state.currentInput;
  state.currentInput = "";
}

/**
 * Gère le calcul du résultat.
 * @param {HTMLElement} display - L'élément d'affichage.
 * @param {Object} state - L'état de la calculatrice.
 */
function handleEqualsInput(display, state) {
  if (state.previousInput === "" || state.currentInput === "") return;

  const result = calculate(state.previousInput, state.operator, state.currentInput);

  if (result === "Erreur" || !isFinite(result)) {
    display.textContent = "Erreur";
    state.currentInput = "";
    state.operator = "";
    state.previousInput = "";
    return;
  }

  state.currentInput = String(result);
  display.textContent = state.currentInput;
  state.operator = "";
  state.previousInput = "";
}
