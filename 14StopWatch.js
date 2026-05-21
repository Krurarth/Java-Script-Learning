const display = document.getElementById("time");

let startTime = 0;
let isRunning = false;
let eTime = 0;
let timer = null;

function start(){
    
    if(!isRunning){
        startTime = Date.now() - eTime;
        timer = setInterval(update , 10);
        isRunning=true; 
    }
}

function stop(){

    if (isRunning){
        clearInterval(timer);
        eTime = Date.now() - startTime;
        isRunning = false;
    }

}  

function reset(){
    
     startTime = 0;
     isRunning = false;
     eTime = 0;
     timer = null;
     display.textContent = `00:00:00:00`;
}

function update(){

    const currentTime = Date.now();

    eTime = currentTime - startTime;

    let hour = Math.floor(eTime / (1000*60*60)) ;
    let min = Math.floor((eTime / (1000*60) ) % 60 );
    let sec = Math.floor((eTime / 1000 ) % 60) ;
    let ms = Math.floor((eTime / 10 ) % 100) ;

    hour = String(hour).padStart(2 , "0");
    min = String(min).padStart(2 , "0");
    sec = String(sec).padStart(2 , "0");
    ms = String(ms).padStart(2 , "0");

    display.textContent = `${hour}:${min}:${sec}:${ms}`;


}