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
    return `${youWin} ${rockWins}`;
  } else if (player === "PAPER" && computer === "ROCK") {
    return `${youWin} ${paperWins}`;
  } else if (player === "SCISSORS" && computer === "PAPER") {
    return `${youWin} ${scissorsWins}`;
  }
  //   if the computer wins
  else if (computer === "ROCK" && player === "SCISSORS") {
    return `${youLose} ${rockWins}`;
  } else if (computer === "PAPER" && player === "ROCK") {
    return `${youLose} ${paperWins}`;
  } else if (computer === "SCISSORS" && player === "PAPER") {
    return `${youLose} ${scissorsWins}`;
  }
}

let playerSelection = "scissors";
console.log(playerSelection);
let computerSelection = computerPlay();
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));
// let userInput = prompt("Select a weapon, rock paper or scissors");
