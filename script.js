const earthFacts = [
    "Earth is the only planet in our solar system not named after a god.",
    "70% of the Earth's surface is covered in water.",
    "Earth's atmosphere is composed of 78% nitrogen, 21% oxygen, and 1% other gases.",
    "Earth is the densest planet in the solar system.",
    "The Earth's rotation is gradually slowing, at approximately 17 milliseconds per hundred years.",
    "Earth has a powerful magnetic field due to its nickel-iron core.",
    "The Earth is about 4.54 billion years old.",
    "Earth is the only planet known to support life.",
    "The Earth's circumference is about 40,075 kilometers (24,901 miles).",
    "Mount Everest is the highest point on Earth, while the Mariana Trench is the deepest."
];

document.getElementById('factButton').addEventListener('click', showRandomEarthFact);

function showRandomEarthFact() {
    const randomIndex = Math.floor(Math.random() * earthFacts.length);
    document.getElementById('fact').innerText = earthFacts[randomIndex];
}
