
const userInput = document.getElementById('guessNum');
let rendomNum = parseInt(Math.random() * 10 + 1);
const submit = document.getElementById('submit');
const guesses = document.getElementById('guesses');
const remaining = document.getElementById('remaining');
const lowOrHi = document.getElementById('lowOrHi');

let numAttempt = 0;
let previousguesses = [];
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        let guess = parseInt(userInput.value);
        validation(guess);
    })
}

function validation(guess) {
    if (isNaN(guess) || guess == ' ' || guess < 1 || guess > 10) {
        alert('Please enter a valid number')
    }
    else {
        previousguesses.push(guess);
        displayGuess(guess);
        if (numAttempt>= 5) {
            if (guess === rendomNum) {
                displayMessage(`Hurrey!! You won. The number was ${rendomNum}`)
            }
            else {
                displayMessage(`Game over, random number was ${rendomNum}`)

            }
            endGame();
        }
        else {
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === rendomNum) {
        displayMessage(`Hurrey!! You won. The number was ${rendomNum}`)
        endGame();
    }
    else if (guess < rendomNum) {
        displayMessage("Your Guess is TOO LOW")
    }
    else {
        displayMessage("Your Guess is TOO HIGH")
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guesses.innerHTML += `${guess}  `;
    numAttempt++;
    remaining.innerHTML = `${5 - numAttempt}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.disabled = true;
    submit.disabled = true;



    const newBtn = document.createElement('button');
    newBtn.textContent = 'Play Again';
    newBtn.setAttribute('id', 'newGame');
    document.querySelector('.main').appendChild(newBtn);

    newBtn.addEventListener('click', function () {
        newGame()
    });
}

function newGame() {
    const newBtn = document.getElementById('newGame');
    newBtn.remove();

    userInput.disabled = false;
    submit.disabled = false;
    userInput.value = '';
    guesses.innerHTML = '';
    numAttempt = 0;
    remaining.innerHTML = `${5 - numAttempt}`;
    lowOrHi.innerHTML = '';
    previousguesses = [];
    rendomNum = parseInt(Math.random() * 10 + 1);
}

