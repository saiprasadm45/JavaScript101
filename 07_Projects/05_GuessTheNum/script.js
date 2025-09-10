// let randomNum = parseInt(Math.random() * 100 + 1);

// let submitbtn = document.getElementById("submt");
// let userInput = document.getElementById("guessfield");
// let prevGuess = document.querySelector(".guesses");
// let remainguess = document.querySelector(".remain");
// let show = document.querySelector(".resultparas");
// let prev_result = [];
// let guessOccured = 1;
// let messageshow = document.createElement("p");
// let Gameplay = true;
// submitbtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let UserGuess = parseInt(userInput.value);
//   show.appendChild(messageshow);
//     userInput = ''
//   function validateNumber(UserGuess) {
//     if (isNaN(UserGuess) || UserGuess < 1 || UserGuess > 100) {
//       //   show.appendChild(messageshow);
//       messageshow.innerHTML = "please enter a valid number";
//     } else {
//       checkNumber(UserGuess);
//     }
//   }
//   function checkNumber(UserGuess) {
//     if (UserGuess === randomNum) {
//         messageshow.innerHTML = `congratulations use guessed it right: ${randomNum} it is`
//     }else{
//         messageshow.innerHTML = `❌ Wrong guess. Try again!`;
//     }
//   }
//   validateNumber(UserGuess);
// });

let randomNum = parseInt(Math.random() * 100 + 1);

let submitbtn = document.getElementById("submt");
let userInput = document.getElementById("guessfield");
let prevGuess = document.querySelector(".guesses");
let remainguess = document.querySelector(".remain");
let show = document.querySelector(".resultparas");

let prev_result = [];
let guessOccured = 1;
let messageshow = document.createElement("p");
let Gameplay = true;

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!Gameplay) return;

  const UserGuess = parseInt(userInput.value);

  if (!show.contains(messageshow)) {
    show.appendChild(messageshow);
  }

  function validateNumber(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
      messageshow.innerHTML =
        "⚠️ Please enter a valid number between 1 and 100.";
    } else {
      checkNumber(guess);
    }
  }

  function checkNumber(guess) {
    prev_result.push(guess);
    prevGuess.textContent = `Previous guesses: ${prev_result.join(", ")}`;
    remainguess.textContent = `Remaining guesses: ${10 - guessOccured}`;

    if (guess === randomNum) {
      messageshow.innerHTML = `🎉 Congratulations! You guessed it right: ${randomNum}`;
      endGame();
    } else {
      // Give too high / too low feedback
      let hintMsg = guess > randomNum ? `📉 Too high!` : `📈 Too low!`;

      // Check if it's the last (10th) attempt
      if (guessOccured === 9) {
        const lowerBound = Math.floor(randomNum / 10) * 10;
        const upperBound = lowerBound + 10;
        hintMsg += `<br>🕵️‍♂️ Hint: The number is between <strong>${lowerBound}</strong> and <strong>${upperBound}</strong>`;
      }

      messageshow.innerHTML = hintMsg;

      if (guessOccured === 10) {
        messageshow.innerHTML = `😢 Game over! The correct number was ${randomNum}`;
        endGame();
      }
    }

    guessOccured++;
    userInput.value = "";
  }

  function endGame() {
    Gameplay = false;
    userInput.disabled = true;
    submitbtn.disabled = true;
  }

  validateNumber(UserGuess);
});
