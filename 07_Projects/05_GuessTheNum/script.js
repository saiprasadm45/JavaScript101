// let randomNum = parseInt(Math.random() * 100 + 1);

// const { use } = require("react");

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

//   if (!Gameplay) return;

//   const UserGuess = parseInt(userInput.value);

//   if (!show.contains(messageshow)) {
//     show.appendChild(messageshow);
//   }

//   function validateNumber(guess) {
//     if (isNaN(guess) || guess < 1 || guess > 100) {
//       messageshow.innerHTML =
//         "⚠️ Please enter a valid number between 1 and 100.";
//     } else {
//       checkNumber(guess);
//     }
//   }

//   function checkNumber(guess) {
//     prev_result.push(guess);
//     prevGuess.textContent = `Previous guesses: ${prev_result.join(", ")}`;
//     remainguess.textContent = `Remaining guesses: ${10 - guessOccured}`;

//     if (guess === randomNum) {
//       messageshow.innerHTML = `🎉 Congratulations! You guessed it right: ${randomNum}`;
//       endGame();
//     } else {
//       // Give too high / too low feedback
//       let hintMsg = guess > randomNum ? `📉 Too high!` : `📈 Too low!`;

//       // Check if it's the last (10th) attempt
//       if (guessOccured === 9) {
//         const lowerBound = Math.floor(randomNum / 10) * 10;
//         const upperBound = lowerBound + 10;
//         hintMsg += `<br>🕵️‍♂️ Hint: The number is between <strong>${lowerBound}</strong> and <strong>${upperBound}</strong>`;
//       }

//       messageshow.innerHTML = hintMsg;

//       if (guessOccured === 10) {
//         messageshow.innerHTML = `😢 Game over! The correct number was ${randomNum}`;
//         endGame();
//       }
//     }

//     guessOccured++;
//     userInput.value = "";
//   }

//   function endGame() {
//     Gameplay = false;
//     userInput.disabled = true;
//     submitbtn.disabled = true;
//   }

//   validateNumber(UserGuess);
// });

let randomNum = Math.floor(Math.random() * 99) + 1;

let submitbtn = document.querySelector('#submt')
let remainguess = document.querySelector('.remain')
let prevGuess = document.querySelector('.guesses')
let show = document.querySelector('.resultparas')
let gaveup = document.querySelector('#gaveupbtn')

let prev_result = []
let guessOccured = 1;
let messageshow = document.createElement('p')
show.appendChild(messageshow)
let Gameplay = true;
let remainG = document.querySelector('#remainG')

function endgame() {
  Gameplay = false;
  document.querySelector('#guessfield').disabled = true;
  submitbtn.disabled = true;
  gaveup.style.display = "none";
}

gaveup.addEventListener('click', () => {
  if (!Gameplay) return;
  prevGuess.innerHTML = "";
  let inputfield = document.querySelector('#guessfield');
  remainG.style.display = 'none';
  inputfield.value = "";
  messageshow.innerHTML = `It was ${randomNum}; Never give up next time!`;
  endgame()
})

submitbtn.addEventListener('click', (e) => {
  e.preventDefault();
  let inputfield = document.querySelector('#guessfield')
  // let userinputed = inputfield.value
  let userInput = Number(inputfield.value)

  if (!Gameplay) return;

  // if (!show.contains(messageshow)) {
  //   show.appendChild(messageshow)
  // }

  function validateNumber(guesses) {
    if (isNaN(guesses) || guesses < 1 || guesses > 100) {
      messageshow.innerHTML = "please enter a valid number between 1 to 100"
      return;
    } else {
      checkNum(guesses)
    }
  }



  function checkNum(guess) {


    prev_result.push(guess)
    prevGuess.textContent = `Previous guesses: ${prev_result.join(', ')}`
    remainguess.textContent = `Remaining guesses: ${10 - guessOccured}`

    if (guess === randomNum) {
      messageshow.innerHTML = `You guessed it right! it is ${randomNum}`
      endgame();
    } else {
      let hint = guess > randomNum ? `Too high` : `Too low`;


      if (guessOccured === 6) {
        gaveup.style.display = "block";
      }

      if (guessOccured === 9) {
        let lowerBound = Math.floor(randomNum / 10) * 10;
        let upperBound = lowerBound + 10;

        // hint += `<br> the number is between <strong>${lowerBound}</strong> and <strong>${upperBound}</strong </br>`
        hint += `<br> the number is between <strong>${lowerBound}</strong> and <strong>${upperBound}</strong><br>`;
      }

      messageshow.innerHTML = hint;

      if (guessOccured === 10) {
        messageshow.innerHTML = `Game Over; the number was ${randomNum}`
        endgame()
      }

    }




    guessOccured++;

  }
  validateNumber(userInput)

})