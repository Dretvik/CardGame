// Model

const cardTypes = ["Hjerter", "Ruter", "Kløver", "Spar"];
const values = ["Ess", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Knekt", "Dronning", "Konge"];
let deck = [];
let hand = [];

function createDeck() {
    for (let cardType of cardTypes) {
        for (let value of values) {
            deck.push(`${value} av ${cardType}`);
        }
    }
}

function shuffleDeck() {
    for (let index = deck.length - 1; index > 0; index--) {
        const index2 = Math.floor(Math.random() * (index + 1));
        [deck[index], deck[index2]] = [deck[index2], deck[index]];
    }
}

function drawCards() {
    if (deck.length < 5) {
        alert("Ikke nok kort igjen i kortstokken");
        return;
    }
    hand = deck.splice(0, 5);
}

// Eksporter funksjonene for bruk i kontrolleren
export { createDeck, shuffleDeck, drawCards, hand };
