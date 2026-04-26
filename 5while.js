const Password = "12345678" ;
let attemps = 5;

const myResult = document.getElementById("myResult");
const myPassword = document.getElementById("myPassword");
const Check = document.getElementById("Check");
let Dots = document.getElementById("Dots");

Check.onclick = function() {

    if(attemps == 0){
        myResult.textContent = (`Your acccount is locked.🔐`);
        Check.disable = true;
        return;
    }

    if(myPassword.value != Password){

        if(attemps > 0){ attemps-- ;}

        myResult.textContent = (`Wrong Password! You have ${attemps+1 } attemps left.`) ;
        Dots.textContent = GenerateDots(attemps);
        myPassword.value = "";

    }

    else{
        myResult.textContent = (`Right Password.`);
        Dots.textContent = `🎉`;
    }
}

function GenerateDots(attemps){

    let dots = "";
   
    while(attemps > 0){
        dots += "🔴 "
        attemps -- ;
       
    }

    return dots;
}