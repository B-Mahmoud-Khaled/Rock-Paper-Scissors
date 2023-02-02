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
const outcome = document.createElement('div')


btn1.classList.add("rock", "rpsBtn");
btn2.classList.add("paper", "rpsBtn");
btn3.classList.add("scissors", "rpsBtn");
div3.classList.add("outcome");
score.classList.add("score");
outcome.classList.add("outcome")

div1.appendChild(btn1);
div1.appendChild(btn2);
div1.appendChild(btn3);
div2.appendChild(score);
div2.appendChild(outcome);

btn1.textContent = "Rock";
btn2.textContent = "Paper";
btn3.textContent = "Scissors";

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

function game() {
    computerSelection = getComputerChoice();
    outcome.textContent = getOutcome();
    score.textContent = getScoreCount();
}




