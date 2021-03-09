const cardElement = document.querySelector('#cards');
const apiUrl = 'https://api.pokemontcg.io/v1/cards?name=charizard';

async function getCharizardCards() {
  const response = await fetch(apiUrl);
  const json = await response.json();
  json.cards.forEach(card => {
    const image = document.createElement('img');
    image.src = card.imageUrl;
    cardElement.append(image);
  });
}

getCharizardCards();
