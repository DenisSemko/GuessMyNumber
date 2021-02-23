'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;
window.onload = function() {
    document.querySelector('.score').innerHTML = score;
}

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

document.querySelector('.check').addEventListener('click', function() {
    var guessValue = Number(document.querySelector('.guess').value);
    if(!guessValue) {
        displayMessage('😫 Enter the number!');
    } else if(guessValue === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = guessValue;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if(guessValue > secretNumber) {
        if(score > 1) {
            displayMessage('👆 The number is too high!');
            score--;
            document.querySelector('.score').innerHTML = score;
        } else {
            displayMessage("😤 You've lost the game!");
            document.querySelector('.score').innerHTML = 0;
        }
    } else if(guessValue < secretNumber) {
        if(score > 1) {
            displayMessage('👇 The number is too low! ');
            score--;
            document.querySelector('.score').innerHTML = score;
        } else {
            displayMessage("😤 You've lost the game!");
            document.querySelector('.score').innerHTML = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    //for reloading
    /*window.location.reload();
    return false;*/

    //for saving the highScore
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});