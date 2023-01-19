function getComputerChoice() {
    const rps = ["Rock", "Paper", "Scissors"]
    let x = (min, max) => {return Math.floor(Math.random() * (max - min)) + min;};

    return rps[x(0,3)]
}   

console.log(getComputerChoice());

