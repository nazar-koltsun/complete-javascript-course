'use strict';

let randomNumber = () => Math.ceil(Math.random() * 20);
let secretNumber = randomNumber();

const message = document.querySelector('.message');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const body = document.querySelector('body');

const againBtn = document.querySelector('.again');

let scoreNumber = 20;
let hightScoreNumber = 0;

const setMessage = (text) => {
  message.textContent = text;
}

const handlePlayAgain = () => {
  guess.value = '';
  number.textContent = '?';
  setMessage('Start guessing...');
  scoreNumber = 20;
  score.textContent = scoreNumber;
  secretNumber = randomNumber();
  body.style.backgroundColor = '';
  number.style.width = '';
}

document.querySelector('.check').addEventListener('click', () => {
  const guessValue = Number(guess.value);

  if (!guessValue) {
    setMessage('⛔️ No number');
  } else if (guessValue === secretNumber) {
    setMessage('🏆 Correct number');
    number.textContent = secretNumber;
    body.style.backgroundColor = 'green';
    number.style.width = '25rem';

    if (scoreNumber > highscore.textContent) {
      highscore.textContent = scoreNumber;
    }
  } else if (guessValue !== secretNumber) {
    guessValue > secretNumber ? setMessage('📈 To hight') : setMessage('📉 To low');
    
    scoreNumber--;
    if (scoreNumber === 0) {
      setMessage('😅 You lose the game, please start again');
    }
  }
  score.textContent = scoreNumber;
})

againBtn.addEventListener('click', handlePlayAgain);