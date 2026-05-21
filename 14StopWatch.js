const display = document.getElementById("time");

let startTime = 0;
let eTime = 0;
let isRunning = false;
let timer = null;

function start(){
    if(!isRunning){
        startTime = Date.now() - eTime;
        timer = setInterval(update , 10);
        isRunning  = true;
    }
}

function stop(){
    if(isRunning ){
        eTime = Date.now() - startTime;
        clearInterval(timer);
        isRunning = false;
    }
}

function reset(){
     startTime = 0;
     eTime = 0;
     isRunning = false;
     timer = null;

     display.textContent = `00:00:00:00`;
}

function update(){
    let currentTime = Date.now() - startTime;

    let hour = Math.floor(currentTime/ (1000 * 60 * 60));
    let min = Math.floor(currentTime/ (1000 * 60 ) %60);
    let sec = Math.floor((currentTime/ 1000) % 60);
    let ms = Math.floor(currentTime/ (10) %100);

    hour = String(hour).padStart(2 , "0");
    min = String(hour).padStart(2 , "0");
    sec = String(sec).padStart(2 , "0");
    ms = String(ms).padStart(2 , "0");

    display.textContent = `${hour}:${min}:${sec}:${ms}`;
}

