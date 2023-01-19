const rps = ["Rock", "Paper", "Scissors"]


function getComputerChoice() {
    let rand = (min, max) => {return Math.floor(Math.random() * (max - min)) + min;};

    return rps[rand(0,3)] 
}   

function outcome(playerChoice, computerSelection) {
    playerChoice = playerChoice.toUpperCase();
    computerSelection = getComputerChoice().toUpperCase();
    if ((computerSelection == "ROCK") && (playerChoice == "SCISSORS") || (computerSelection == "SCISSORS") && (playerChoice == "PAPPER") || (computerSelection == "PAPPER") && (playerChoice == "ROCK")) {
        return "You Lose! " + computerSelection + " beats " + playerChoice + "."
    }
    else if (playerChoice == computerSelection) {
        return "It's a Draw! Both played " + playerChoice +  "."
        }
    else {
        return "You Win! " + playerChoice +  " beats " + computerSelection + "."
    }
}




console.log(getComputerChoice());

console.log(outcome("Scissors", getComputerChoice()));
