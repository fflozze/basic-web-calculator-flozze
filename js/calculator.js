/**
 * Effectue une opération mathématique entre deux nombres.
 * - Accepte différentes variantes d'opérateurs: '+', '-', 'x', '×', '*', '/', '÷'
 * - Gère les erreurs (valeurs invalides, division par zéro)
 * - Réduit les artefacts de virgule flottante (arrondi technique)
 *
 * @param {string|number} num1 - Premier opérande (chaîne ou nombre)
 * @param {string} operator - Opérateur mathématique
 * @param {string|number} num2 - Second opérande (chaîne ou nombre)
 * @returns {number|string} Résultat numérique ou "Erreur" en cas de problème
 */
export function calculate(num1, operator, num2) {
  const n1 = typeof num1 === "number" ? num1 : parseFloat(String(num1).replace(",", "."));
  const n2 = typeof num2 === "number" ? num2 : parseFloat(String(num2).replace(",", "."));

  if (!isFinite(n1) || !isFinite(n2)) return "Erreur";

  // Normalisation de l'opérateur (gérer ×, x, * et ÷, /)
  const op = normalizeOperator(operator);

  let raw;
  switch (op) {
    case "+":
      raw = n1 + n2;
      break;
    case "-":
      raw = n1 - n2;
      break;
    case "*":
      raw = n1 * n2;
      break;
    case "/":
      if (n2 === 0) return "Erreur"; // division par zéro
      raw = n1 / n2;
      break;
    default:
      return "Erreur";
  }

  // Arrondi technique pour éviter 0.30000000000000004
  return roundFloat(raw);
}

/**
 * Normalise un opérateur vers '+', '-', '*', '/'
 * @param {string} operator
 * @returns {string}
 */
function normalizeOperator(operator) {
  switch (operator) {
    case "+":
    case "-":
      return operator;
    case "x":
    case "X":
    case "×":
    case "*":
      return "*";
    case "÷":
    case "/":
      return "/";
    default:
      return "";
  }
}

/**
 * Réduit les artefacts flottants en arrondissant à 10 décimales puis en convertissant
 * @param {number} value
 * @returns {number}
 */
function roundFloat(value) {
  return parseFloat(Number(value).toFixed(10));
}
