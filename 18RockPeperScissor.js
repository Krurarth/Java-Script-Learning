
const choices = ["stone" , "paper" , "scissor"];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("result");

function value(playerChoice){ 
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result="";

    switch(computerChoice){
        case 'stone' : 
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

    result.text-Content = result;
}