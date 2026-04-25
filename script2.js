const myName = document.getElementById("myName");
const myCkeck = document.getElementById("myCkeck");
const myRadio1 = document.getElementById("myRadio1");
const myRadio2 = document.getElementById("myRadio2");
const myRadio3 = document.getElementById("myRadio3");
const mySubmit = document.getElementById("mySubmit");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2"); 

mySubmit.onclick = function(){

    if(myCkeck.checked){
        p1.textContent = `You are a student.`
    }
    else{
        p1.textContent = `You are not student.`
    }

    if(myRadio1.checked){
        p2.textContent = `You like Maths.`
    }

    else if(myRadio2.checked){
        p2.textContent = `You like Physics.`
    }

    else if(myRadio3.checked){
        p2.textContent = `You like Chemistry.`
    }

    else{
        p2.textContent = ` You don't like study like me.`
    }
    
}





