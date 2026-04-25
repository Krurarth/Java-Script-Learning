const myAge = document.getElementById("myAge");
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");

let age  ;

mySubmit.onclick = function(){
    age = myAge.value;
    age = Number(age); 

    if (age >= 18){
    myText.textContent = `You can enter the website.`;
    }
    else{
     myText.textContent = `You can not enter the website.`;
    }
    }

