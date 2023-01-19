const rps = ["Rock", "Paper", "Scissors"]
let playerChoice
let pick
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rand = (min, max) => { return Math.floor(Math.random() * (max - min)) + min; };

    return rps[rand(0, 3)]
}

function outcome(playerChoice, computerSelection) {
    if (((computerSelection.toUpperCase() == "ROCK") && (playerChoice.toUpperCase() == "SCISSORS")) || ((computerSelection.toUpperCase() == "SCISSORS") && (playerChoice.toUpperCase() == "PAPER")) || ((computerSelection.toUpperCase() == "PAPER") && (playerChoice.toUpperCase() == "ROCK"))) {
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

function game() {
    for (let i = 0; i < 5; i++) {
        pick = (prompt("Choose : 1. Rock, 2. Paper, 3. Scissors :", 0) - 1)
        console.log(outcome(playerChoice, getComputerChoice()));
    }
    console.log("Score : Player : " + playerScore + " Computer : " + computerScore);
}

game()

