const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerCount = document.getElementById("pWin");
const computerCount = document.getElementById("cWin");
let playerScore = 0;
let computerScore = 0;


const choices = ["stone", "paper", "scissor"];

function playGame (playerChoice){

    const computerChoice = choices[Math.floor(Math.random()*3)];

    switch(computerChoice){
        case 'stone' : computerDisplay.textContent = `COMPUTER  : Stone🤜`; break;
        case 'paper' : computerDisplay.textContent = `COMPUTER  : Paper🖐️`; break;
        case 'scissor' : computerDisplay.textContent = `COMPUTER  : Scissor ✂️`; break;
    }

    switch(playerChoice){
        case 'stone' : playerDisplay.textContent = `PLAYER : Stone🤜`; break;
        case 'paper' : playerDisplay.textContent = `PLAYER : Paper🖐️`; break;
        case 'scissor' : playerDisplay.textContent = `PLAYER : Scissor ✂️`; break;
    }

    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE.";
    }
    else{
        switch(playerChoice){
            case 'stone' : result = (computerChoice === 'paper') ? "YOU LOSE." : "YOU WIN."; break;
            case 'paper' : result = (computerChoice === 'scissor') ? "YOU LOSE." : "YOU WIN."; break;
            case 'scissor' : result = (computerChoice === 'stone') ? "YOU LOSE." : "YOU WIN."; break;
        }
    }

    resultDisplay.textContent = result;

    resultDisplay.classList.remove("green" , "red");

    if(result === "YOU WIN."){
        resultDisplay.classList.add("green");
        playerScore++;
        playerCount.textContent = playerScore;
    }
    else if(result === "YOU LOSE."){
        resultDisplay.classList.add("red");
        computerScore++;
        computerCount.textContent = computerScore;
    }
}