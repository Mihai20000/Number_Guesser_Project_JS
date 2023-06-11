// Function timer
(function(){"use strict";


var hoursSpent = document.getElementById("hours-spent");
var minutesSpent = document.getElementById("minutes-spent");
var secondsSpent = document.getElementById("seconds-spent");


requestAnimationFrame(function updateTimeSpent(){
    var timeNow = performance.now();

    hoursSpent.value = round(timeNow/3600000);
    minutesSpent.value = round((timeNow/60000));
    secondsSpent.value = round(timeNow/1000);
    
    
    requestAnimationFrame(updateTimeSpent);
});
var performance = window.performance, round = Math.round;

if (hoursSpent.value >= 1) {
    alert("You spent too much time here");
}

})();


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (user_guess, computer_guess, secret_target) => {
  if ( Math.abs(secret_target - user_guess) > Math.abs(secret_target - computer_guess)) {
    return false;
  } else {
    return true;
  }
  
};

const updateScore = winner => {
  // let humanScore;
  // let computerScore;
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

const advanceRound = () => {
  // let currentRoundNumber;
  currentRoundNumber += 1;
  return currentRoundNumber;
};
