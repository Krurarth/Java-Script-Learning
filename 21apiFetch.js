async function fetchData(){

    try{
        const name = document.getElementById("myName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        if(!response.ok){
            throw new Error("Not found.");
        }

        const data = await response.json();
        const sprite = data.sprites.front_default;

        const display = document.getElementById("display");
        display.src = sprite;
        display.style.display = "block";
    }
    catch(error){
        console.log(error);
    }
}

