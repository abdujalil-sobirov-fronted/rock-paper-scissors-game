const paper = document.getElementById("paper_img");
const scissors = document.getElementById("scissors_img");
const rock = document.getElementById("rock_img");
const scoreSpan = document.getElementById("score");
const computerChoiceDiv = document.getElementById("computer_choice");
const computerChoiceImg = document.getElementById("computer_choice_img");
const playAgainButton = document.getElementById("play-again");

const yourPick = document.getElementById("your_pick");
const computerPick = document.getElementById("computer_pick");
const computerWin = document.getElementById("computer_win");
const youWin = document.getElementById("you_win");
const draw = document.getElementById("draw");


paper.addEventListener("click", function () {
  paper.style.left = "-220px";
  paper.style.top = "150px";
  paper.style.opacity = 1;
  scissors.style.opacity = 0;
  rock.style.opacity = 0;
  yourPick.style.opacity = 1;
  computerPick.style.opacity = 1;
});

scissors.addEventListener("click", function () {
  scissors.style.left = "-220px";
  scissors.style.top = "150px";
  scissors.style.opacity = 1;
  paper.style.opacity = 0;
  rock.style.opacity = 0;
  yourPick.style.opacity = 1;
  computerPick.style.opacity = 1;
});

rock.addEventListener("click", function () {
  rock.style.left = "-220px";
  rock.style.top = "150px";
  rock.style.opacity = 1;
  scissors.style.opacity = 0;
  paper.style.opacity = 0;
  yourPick.style.opacity = 1;
  computerPick.style.opacity = 1;
});

let score = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  displayComputerChoice(computerChoice);

  const result = determineWinner(playerChoice, computerChoice);

  if (result === 'You win!') {
    score++;
  } else if (result === 'Computer wins!') {
    score--;
  }

  scoreSpan.textContent = score;

  showPlayAgainButton();
}

function determineWinner(player, computer) {
  if (player === computer) {
    draw.style.opacity = 1;
    return "It's a tie!";
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    youWin.style.opacity = 1;
    return 'You win!';
  } else {
    computerWin.style.opacity = 1;
    return 'Computer wins!';
  }
}

function displayComputerChoice(choice) {
  computerChoiceImg.src = `images/${choice}.png`;
  computerChoiceDiv.style.display = "block";
}

function showPlayAgainButton() {
  playAgainButton.style.display = "block";
}

function resetGame() {
  computerChoiceDiv.style.display = "none";
  playAgainButton.style.display = "none";
  // scissors.style.opacity = 1;
  // paper.style.opacity = 1;
  // rock.style.opacity = 1;
  // paper.style.position = "absolute";
  // paper.style.top = "1px";
  // paper.style.left = "20px";
  paper.style.cssText = '';

  scissors.style.cssText = '';

  rock.style.cssText = '';

  yourPick.style.opacity = 0;
  computerPick.style.opacity = 0;
  draw.style.opacity = 0;
  youWin.style.opacity = 0;
  computerWin.style.opacity = 0;

  // scissors.style.position = "absolute";
  // scissors.style.top = "1px";
  // scissors.style.left = "300px";

  // rock.style.position = "absolute";
  // rock.style.top = "210px";
  // rock.style.left = "180px";
}
