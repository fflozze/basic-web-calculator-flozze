/**
 * Fonction pour effectuer une opération mathématique entre deux nombres.
 * @param {string} num1 - Le premier nombre sous forme de chaîne de caractères.
 * @param {string} operator - L'opérateur mathématique (+, -, x, /).
 * @param {string} num2 - Le deuxième nombre sous forme de chaîne de caractères.
 * @returns {number|string} Le résultat de l'opération ou "Erreur" en cas d'opérateur invalide.
 */
export function calculate(num1, operator, num2) {
  /**
   * Conversion des nombres en nombres flottants.
   * @type {number}
   */
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  /**
   * Utilisation d'un switch pour effectuer l'opération mathématique correspondante.
   */
  switch (operator) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "x":
      return n1 * n2;
    case "/":
      return n1 / n2;
    default:
      return "Erreur";
  }
}
