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
