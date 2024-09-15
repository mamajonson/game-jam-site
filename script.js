function randomElement() {
  const elements = [
    "650738",
    "124250",
    "901683",
    "573290",
    "905663",
    "178981",
    "872328",
    "295333",
    "867629",
    "062895",
    "736671",
    "736671",
  ];
  const randomIndex = Math.floor(Math.random() * elements.length);
  const randomElement = elements[randomIndex];

  for (let i = 0; i < randomElement.length; i++) {
    let char = randomElement.charAt(i);
    let charVar = `char${i}`;
    window[charVar] = char;
    let outputDiv = document.getElementById("output");
    let newLine = document.createElement("p");
    newLine.textContent = window[charVar];
    outputDiv.appendChild(newLine);
  }
}
