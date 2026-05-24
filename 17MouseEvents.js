const click = document.getElementById("click");

click.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "tomato";
        event.target.textContent = "Don't touch 🤡";
})

click.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "blue";
        event.target.textContent = "Do it...!😎";
})

click.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "greenyellow";
        event.target.textContent = "click me!😁";
})

    const move = 10;
    let y=0;
    let x=0;
document.addEventListener("keydown" , (event) =>{
   
    event.preventDefault();

    if(event.key.startsWith("Arrow")){

        switch(event.key){
            
            case "ArrowLeft" : x -= move;  break;
            case "ArrowRight" : x += move;  break;
            case "ArrowUp" : y -= move;  break;
            case "ArrowDown" : y += move;  break;

        }

        click.style.top = `${y}px`;
        click.style.left = `${x}px`;
        click.textContent = "Nooo...! 😨";
        click.style.backgroundColor = "yellow"
    }
})

document.addEventListener("keyup", (event) => {
        click.style.backgroundColor = "greenyellow";
        click.textContent = "click me!😁";
})