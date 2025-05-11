/**
 * @fileoverview Animation de pression pour les boutons de la calculatrice
 */

/**
 * Sélection de tous les boutons avec la classe 'button'
 * @type {NodeListOf<HTMLButtonElement>}
 */
const buttons = document.querySelectorAll('.button');

/**
 * Ajoute les animations de pression aux boutons
 * @param {HTMLButtonElement} button - Le bouton auquel ajouter les animations
 */
const addButtonAnimations = (button) => {
    // Animation lors de l'appui sur le bouton
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
        button.style.boxShadow = '1px 1px 4px #202020';
    });

    // Retour à l'état normal lors du relâchement du bouton
    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '3px 3px 12px #202020';
    });

    // Retour à l'état normal si la souris quitte le bouton pendant l'appui
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '3px 3px 12px #202020';
    });

    // Support tactile pour les appareils mobiles
    button.addEventListener('touchstart', () => {
        button.style.transform = 'scale(0.95)';
        button.style.boxShadow = '1px 1px 4px #202020';
    });

    button.addEventListener('touchend', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '3px 3px 12px #202020';
    });
};

/**
 * Initialise les animations pour tous les boutons
 * @function
 */
const initializeButtonAnimations = () => {
    buttons.forEach(button => {
        addButtonAnimations(button);
    });
};

// Initialisation des animations au chargement du DOM
document.addEventListener('DOMContentLoaded', initializeButtonAnimations);
