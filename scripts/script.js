const hangmanImage = document.querySelector(".hangman-box img");
const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

let currentWord = "",
  correctLetters = [],
  wrongGuessCount = 0;
const maxGuesses = 6;

const resetGame = () => {
  // reset all game variable and ui elements
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = `./images/hangman-${wrongGuessCount}.svg`;
  guessesText.innerText = `${wrongGuessCount}/${maxGuesses}`;

  keyboardDiv.querySelectorAll("button").forEach((button) => {
    button.disabled = false;
  });

  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => ` <li class="letter"></li>`)
    .join("");
  gameModal.classList.remove("show");
};

const getRandomWord = async () => {
  // selecting randomword and hint from wordList
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  // console.log(word, hint);
  console.log(word);
  currentWord = word;
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
};

const gameOver = (isVictory) => {
  setTimeout(() => {
    const modalText = isVictory
      ? `You found the word:`
      : `The correct word was:`;
    gameModal.querySelector("img").src = `./images/${
      isVictory ? "victory" : "lost"
    }.gif`;
    gameModal.querySelector("h4").innerText = `${
      isVictory ? "Congrats!" : "Game Over!"
    }`;
    gameModal.querySelector(
      "p"
    ).innerHTML = `${modalText} <b> ${currentWord} </b>`;
    gameModal.classList.add("show");
  }, 300);
};

const initGame = (button, letter) => {
  if (currentWord.includes(letter)) {
    // show all char letter on the word display (char that are correctly guessed by player)
    [...currentWord].forEach((char, index) => {
      if (char === letter) {
        correctLetters.push(char);
        wordDisplay.querySelectorAll("li")[index].innerText = char;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    // if the letter is not in the word, increase the wrong count and update the hangman image
    // button.style.backgroundColor = "red";
    wrongGuessCount++;
    hangmanImage.src = `./images/hangman-${wrongGuessCount}.svg`;
  }
  button.disabled = true;
  guessesText.innerText = `${wrongGuessCount}/${maxGuesses}`;

  // calling gameover function if any condition meet
  if (wrongGuessCount === maxGuesses) {
    return gameOver(false);
  }
  if (correctLetters.length === currentWord.length) {
    return gameOver(true);
  }
};

// creating buttons for each letter of the alphabet
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) => {
    initGame(e.target, String.fromCharCode(i));
  });
}

getRandomWord();

playAgainBtn.addEventListener("click", () => {
  getRandomWord();
});
