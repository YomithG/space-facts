const facts = [
    "Honey never spoils.",
    "A single strand of Spaghetti is called a 'Spaghetto'.",
    "Octopuses have three hearts.",
    "Bananas are berries, but strawberries aren't.",
    "A group of flamingos is called a 'flamboyance'."
];

document.getElementById('factButton').addEventListener('click', showRandomFact);

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
}
