const rps = ["Rock", "Paper", "Scissors"]
let playerChoice
let pick
let playerScore = 0;
let computerScore = 0;

const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const div1 = document.querySelector('.rpsContainer');
const div2 = document.querySelector('.display');
const div3 = document.createElement('div');
const score = document.createElement('div')

btn1.classList.toggle("rock");
btn2.classList.toggle("paper");
btn3.classList.toggle("scissors");
div3.classList.toggle("outcome");
score.classList.toggle("score");

div1.appendChild(btn1);
div1.appendChild(btn2);
div1.appendChild(btn3);
div2.appendChild(score);

btn1.textContent = "Rock";
btn2.textContent = "Paper";
btn3.textContent = "Scissors";
score.textContent = scoreCount();

btn1.addEventListener('click', () => playerChoice = btn1.textContent.toUpperCase())
btn2.addEventListener('click', () => playerChoice = btn2.textContent.toUpperCase())
btn3.addEventListener('click', () => playerChoice = btn3.textContent.toUpperCase())

function getComputerChoice() {
    let rand = (min, max) => { return Math.floor(Math.random() * (max - min)) + min; };

    return rps[rand(0, 3)]
}

function outcome(playerChoice, computerSelection) {
    if (((computerSelection.toUpperCase() == "ROCK") && (playerChoice.toUpperCase() == "SCISSORS")) || 
        ((computerSelection.toUpperCase() == "SCISSORS") && (playerChoice.toUpperCase() == "PAPER")) || 
        ((computerSelection.toUpperCase() == "PAPER") && (playerChoice.toUpperCase() == "ROCK"))) {
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

function scoreCount() {
    return "Score : Player : " + playerScore + " Computer : " + computerScore;
}

function game() {
        pick = (prompt("Choose : 1. Rock, 2. Paper, 3. Scissors :", 0) - 1)
        playerChoice = rps[pick]
        console.log(outcome(playerChoice, getComputerChoice()));
    console.log(scoreCount());
}




