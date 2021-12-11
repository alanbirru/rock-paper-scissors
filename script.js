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
// Scores
let playerScore = 0;
let computerScore = 0;

let messages = document.querySelector(".messages");

// play one round
function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toUpperCase();
  let computer = computerSelection.toUpperCase();
  let youWin = "You Win!";
  let youLose = "You Lose!";

  let rockWins = "Rock beats Scissors";
  let paperWins = "Paper beats Rock";
  let scissorsWins = "Scissors beats Paper";

  if (player === computer) {
    messages.textContent = `its a tie!, you both picked: ${computer}`;
    // if the player wins
  } else if (player === "ROCK" && computer === "SCISSORS") {
    playerScore++;
    messages.textContent = `${youWin} ${rockWins}`;
  } else if (player === "PAPER" && computer === "ROCK") {
    playerScore++;
    messages.textContent = `${youWin} ${paperWins}`;
  } else if (player === "SCISSORS" && computer === "PAPER") {
    playerScore++;
    messages.textContent = `${youWin} ${scissorsWins}`;
  }
  //   if the computer wins
  else if (computer === "ROCK" && player === "SCISSORS") {
    computerScore++;
    messages.textContent = `${youLose} ${rockWins}`;
  } else if (computer === "PAPER" && player === "ROCK") {
    computerScore++;
    messages.textContent = `${youLose} ${paperWins}`;
  } else if (computer === "SCISSORS" && player === "PAPER") {
    computerScore++;
    messages.textContent = `${youLose} ${scissorsWins}`;
  }
}

let playerScoreTag = document.querySelector(".playerScore");
let computerScoreTag = document.querySelector(".computerScore");
// buttons variables
let buttonRock = document.querySelector("#Rock");
let buttonPaper = document.querySelector("#Paper");
let buttonScissors = document.querySelector("#Scissors");

// checking who score more points
function Score() {
  if (playerScore >= 5) {
    // playerScore = 0;
    // computerScore = 0;
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
    messages.textContent = "player wins!";
  } else if (computerScore >= 5) {
    // playerScore = 0;
    // computerScore = 0;
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
    messages.textContent = "computer Wins!";
  }
}

function ResetButton() {
  playerScoreTag.textContent = 0;
  computerScoreTag.textContent = 0;
  buttonRock.disabled = false;
  buttonPaper.disabled = false;
  buttonScissors.disabled = false;
  playerScore = 0;
  computerScore = 0;
  messages.textContent = "Waiting..";
}

// Rock Button
document.querySelector("#Rock").addEventListener("click", function (e) {
  console.log(playRound("Rock", computerPlay()));
  console.log(playerScore);
  console.log(computerScore);
  console.log(Score());

  playerScoreTag.textContent = playerScore;
  computerScoreTag.textContent = computerScore;
});
// Paper Button
document.querySelector("#Paper").addEventListener("click", function (e) {
  console.log(playRound("Paper", computerPlay()));
  console.log(playerScore);
  console.log(computerScore);
  console.log(Score());

  playerScoreTag.textContent = playerScore;
  computerScoreTag.textContent = computerScore;
});
// Scissors Button
document.querySelector("#Scissors").addEventListener("click", function (e) {
  console.log(playRound("Scissors", computerPlay()));
  console.log(playerScore);
  console.log(computerScore);
  console.log(Score());

  playerScoreTag.textContent = playerScore;
  computerScoreTag.textContent = computerScore;
});

document.querySelector("#reset").addEventListener("click", function (e) {
  ResetButton();
});
