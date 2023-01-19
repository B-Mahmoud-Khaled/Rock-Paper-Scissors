const rps = ["Rock", "Paper", "Scissors"]
let playerScore = 0, computerScore = 0

function getComputerChoice() {
    let rand = (min, max) => {return Math.floor(Math.random() * (max - min)) + min;};

    return rps[rand(0,3)] 
}   

function outcome(playerChoice, computerSelection) {
    if (((computerSelection.toUpperCase() == "ROCK") && (playerChoice.toUpperCase() == "SCISSORS")) || ((computerSelection.toUpperCase() == "SCISSORS") && (playerChoice.toUpperCase() == "PAPPER")) || ((computerSelection.toUpperCase() == "PAPPER") && (playerChoice.toUpperCase() == "ROCK"))) {
        computerScore +=1
        return "You Lose! " + computerSelection + " beats " + playerChoice + "."
    }
    else if (playerChoice === computerSelection) {
        return "It's a Draw! Both played " + playerChoice +  "."
        }
    else {
        playerChoice +=1
        return "You Win! " + playerChoice +  " beats " + computerSelection + "."
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = rps[prompt("Choose : 1. Rock, 2. Paper, 3. Scissors :", 0)-1]
        console.log(outcome(playerChoice,  getComputerChoice()));
    }
    console.log("Score : Player : " + playerScore + " Computer : " + computerScore);
}

game()

