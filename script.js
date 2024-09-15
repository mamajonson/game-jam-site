function randomElement() {
  const elements = ["123123", "531431", "123523", "967463", "213856"];
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
