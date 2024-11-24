const keyboardDiv = document.querySelector(".keyboard");

const getRandomWord = async () => {
  // selecting randomword and hint from wordList
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  // console.log(word, hint);
  document.querySelector(".hint-text b").innerText = hint;
};
// creating buttons for each letter of the alphabet
for (let i = 97; i < 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
}

getRandomWord();
