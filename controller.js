// Controller

import { createDeck, shuffleDeck, drawCards, hand } from './model.js';
import { updateView, displayHand } from './view.js';

document.addEventListener('DOMContentLoaded', function () {

    updateView();

    document.getElementById('shuffleBtn').addEventListener('click', () => {
        createDeck();
        shuffleDeck();
        alert('Kortstokken er shufflet');
    });

    document.getElementById('drawBtn').addEventListener('click', () => {
        drawCards();
        displayHand();
    });
});