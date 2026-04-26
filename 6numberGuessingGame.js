const myButton = document.getElementById("myButton");
const myInput = document.getElementById("myInput");
const myResult = document.getElementById("myResult");
const hint = document.getElementById("hint");

let Max = 100;
let Min = 1;
let RandomNumber = Math.floor((Math.random() * (Max-Min )) +1 );
let attemps = 0;

console.log(RandomNumber);

myButton.onclick = function() {

    if(myInput.value == RandomNumber) {
       
        myResult.textContent = `You win the game with ${attemps} attemps. 🎉!`;
    }
    else{
         attemps++;
        myResult.textContent = `Wrong guess !`;
        if(myInput.value < RandomNumber){
            myResult.textContent = `Go higher.`;
        }
        else if(myInput.value > RandomNumber){
             myResult.textContent = `Go lower.`;
        }
    }
}