
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