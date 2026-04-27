// let Fruits  = ["Apple", "Banana", "Coconut"];
// let Vagetables = ["Onion", "Garlic"];

// let EatableThings = [...Fruits ,...Vagetables];


// for(Fruit of EatableThings){
// console.log(Fruit);
// }

// const sum = getAllSum(1,2,3,4);

// console.log(sum);

// function getAllSum(...numbers){

//     let result = 0;

//     for(number of numbers){
//          result+=number;
//     }

//     return result;
// }

function toAddStrings (...strings){
    return strings.join(" ");
}

console.log(toAddStrings("Krutarth", "Patel"));