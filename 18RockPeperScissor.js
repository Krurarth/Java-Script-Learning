
const choices = ["stone" , "paper" , "scissor"];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("result");

function value(playerChoice){ 
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result="";

    switch(computerChoice){
        case 'stone' : computerChoice.textContent = `Stone🤜`; break;

        case 'paper' : computerChoice.textContent = `Paper🖐️`; break;

        case 'scissor' : computerChoice.textContent = `Scissor ✂️`; break;
    }

    if(playerChoice === computerChoice){
        result = `IT'S A TIE !`
    }
    else {
        switch(playerChoice){
            case 'paper' : (computerChoice == 'scissor')? result = `You lose!` : result = `You win!` ;
            break;

            case 'scissor' : (computerChoice == 'stone')? result = `You lose!` : result = `You win!` ;
            break;

            case 'stone' : (computerChoice == 'paper') ? result = `You lose!` : result = `You win!` ;
            break;
        }
    }

    result.textContent = result;
}