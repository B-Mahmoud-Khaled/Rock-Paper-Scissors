const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const rpsContainer = document.querySelector('.rpsContainer');
const display = document.querySelector('.display');
const score = document.createElement('div');
const player = document.createElement('div');
const computerScores = document.createElement('div');
const outcome = document.createElement('div');
const roundCounter = document.createElement('div');
const resultScreen = document.querySelector('.resultScreen');
const result = document.querySelector('.result');
const closeWin = document.querySelector('.close');
const replay = document.querySelector('.replay');

const rps = ["Rock", "Paper", "Scissors"];
let playerChoice;
let pick;
let playerScore = 0;
let computerScore = 0;
let round = 1;
let gameLentgh = prompt("How many rounds do you wish to play? ");


btn1.classList.add("rock", "rpsBtn");
btn2.classList.add("paper", "rpsBtn");
btn3.classList.add("scissors", "rpsBtn");
score.classList.add("score");
outcome.classList.add("outcome");
roundCounter.classList.add("roundCounter");



display.appendChild(roundCounter);
rpsContainer.appendChild(btn1);
rpsContainer.appendChild(btn2);
rpsContainer.appendChild(btn3);
display.appendChild(score);
display.appendChild(outcome);



btn1.textContent = "Rock";
btn2.textContent = "Paper";
btn3.textContent = "Scissors";
roundCounter.textContent = `Round ${round} :`;

btn1.addEventListener('click', () => {
    playerChoice = btn1.textContent;
    game();
});
btn2.addEventListener('click', () => {
    playerChoice = btn2.textContent;
    game();
})
btn3.addEventListener('click', () => {
    playerChoice = btn3.textContent;
    game();
})

function getComputerChoice() {
    let rand = (min, max) => { return Math.floor(Math.random() * (max - min)) + min; };

    return rps[rand(0, 3)]
}

function getOutcome() {
    if (((computerSelection == "Rock") && (playerChoice == "Scissors")) ||
        ((computerSelection == "Scissors") && (playerChoice == "Paper")) ||
        ((computerSelection == "Paper") && (playerChoice == "Rock"))) {
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerChoice + "."
    }
    else if (playerChoice === computerSelection) {
        return "It's a Draw! Both played " + playerChoice + "."
    }
    else {
        playerScore++;
        return "You Win! " + playerChoice + " beats " + computerSelection + "."
    }
}

function getScoreCount() {
    return "Score : Player : " + playerScore + " Computer : " + computerScore;
}

function getWinner() {
    if (computerScore > playerScore) {
        return "You Lost!";
    }
    else if (computerScore < playerScore) {
        return "You Won!";
    }
    else {
        return "It's a Draw!";
    }
}

function game() {
    computerSelection = getComputerChoice();
    outcome.textContent = getOutcome();
    score.textContent = getScoreCount();
    round++;
    if (round == gameLentgh) {
        resultScreen.style.display = "block";
        result.textContent = getWinner();
    }
}

closeWin.addEventListener('click', () => resultScreen.style.display = "none");
replay.addEventListener('click', () => resultScreen.style.display = "none");

