// Game variables
let min = 1, 
    max = 10,
    winningNum = Math.floor(Math.random() * 10) + 1;
    guessesLeft = 3;

// UI elements
const gameEl = document.getElementById('game'),
      minNumEl = document.querySelector('.min-num'),
      maxNumEl = document.querySelector('.max-num'),
      guessBtnEl = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

gameEl.addEventListener('mousedown', function(e){
  if(e.target.className === 'restart'){
    window.location.reload();
  }
})

// Set  min & max in UI
minNumEl.textContent = min;
maxNumEl.textContent = max;

guessBtnEl.addEventListener('click', makeGuess);

function makeGuess(e){
  let guess = parseInt(guessInput.value);

  // Validation
  if(guess !== NaN && guess >= min && guess <= max){
    //check guess
    if(guess === winningNum){
      endGame(true, `Yay you correctly guessed ${winningNum}!`)
    }else{
      guessesLeft--;
      if(guessesLeft === 0){
        //game over
        endGame(false, `Game Over! Correct number was ${winningNum}.`);
      }else{
        setMessage(`Sorry please try again. ${guessesLeft} guess remaining.`, 'red')
      }
    }

  }else{
    //error
    setMessage(`Please enter a number between ${min} & ${max}`, 'red');  
  }
  
}

function endGame(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  guessBtnEl.value = 'Play Again';
  guessBtnEl.className = 'restart';

}

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}