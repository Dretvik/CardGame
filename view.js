// View

function updateView() {
    const appElement = document.getElementById('app');
    appElement.innerHTML = /*HTML*/`
        <h1>Kortstokk App</h1>
        <button id="shuffleBtn">Lag og bland kortstokken</button>
        <button id="drawBtn">Trekk 5 kort</button>
        <div id="hand" class="cardContainer"></div>
    `;
}

function displayHand() {
    const handElement = document.getElementById("hand");
    handElement.innerHTML = "";

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainer');

    for (let card of hand) {
        const cardElement = document.createElement("div");
        cardElement.textContent = card;
        cardElement.classList.add('cards');
        cardContainer.appendChild(cardElement);
    }

    handElement.appendChild(cardContainer);
}

// Eksporter funksjonene for bruk i kontrolleren
export { updateView, displayHand };
