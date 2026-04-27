
let DiceValue = document.getElementById("DiceValue");
const DiceImage = document.getElementById("DiceImage");

function rollDice(){

    let DiceValue = document.getElementById("DiceValue");
    const DiceImage = document.getElementById("DiceImage");
    let number = Number(document.getElementById("myNumber").value);
    let DiceValues = [];
    let Images = [];

    for(let i = 0; i < number; i++){
        let Random = Math.floor(Math.random() * 6) + 1;
        DiceValues.push(Random);
        Images.push(`<img src=Dice_Images/${Random}.png width="100px">`)
    }

    DiceValue.textContent = DiceValues.join(", ");
    DiceImage.innerHTML = Images.join('');
}

// Callback method

// function sum(callback , x, y){
//     let result = x+y;
//     callback(result);
// }

// function display(result){
//     console.log(result);
// }

// sum(display , 1, 2);

//Ofeach

let fruits = ["apple", "banana", "coconuy", "mango"];

fruits.forEach(capatalize);
fruits.forEach(display);

function display(element){
    console.log(element);
}

function toUpperCase(element, index, array){
    array[index] = element.toUpperCase();
} 

function capatalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1) ;
}