function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toUpperCase();
  let computer = computerSelection.toUpperCase();
  let youWin = "You Win!";
  let youLose = "You Lose!";

  let rockWins = "Rock beats Scissors";
  let paperWins = "Paper beats Rock";
  let scissorsWins = "Scissors beats Paper";

  if (player === computer) {
    return "tie";
    // if the player wins
  } else if (player === "ROCK" && computer === "SCISSORS") {
    playerScore++;
    return `${youWin} ${rockWins}`;
  } else if (player === "PAPER" && computer === "ROCK") {
    playerScore++;
    return `${youWin} ${paperWins}`;
  } else if (player === "SCISSORS" && computer === "PAPER") {
    playerScore++;
    return `${youWin} ${scissorsWins}`;
  }
  //   if the computer wins
  else if (computer === "ROCK" && player === "SCISSORS") {
    computerScore++;
    return `${youLose} ${rockWins}`;
  } else if (computer === "PAPER" && player === "ROCK") {
    computerScore++;
    return `${youLose} ${paperWins}`;
  } else if (computer === "SCISSORS" && player === "PAPER") {
    computerScore++;
    return `${youLose} ${scissorsWins}`;
  }
}
let playerScore = 0;
let computerScore = 0;

// console.log(playerSelection);
let computerSelection = computerPlay();
// console.log(computerSelection);

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(`ROUND: ${i}`);

    console.log(playRound(prompt("rock paper or Scissors"), computerSelection));
  }
  console.log(`computer: ${computerScore} You: ${playerScore}`);
  if (playerScore > computerScore) {
    return "Player Wins!";
  } else if (playerScore < computerScore) {
    return "Computer Wins!  ";
  } else {
    return "No one Wins, its a tie!";
  }
}
console.log(game());
// let userInput = prompt("Select a weapon, rock paper or scissors");
let playerWin;
