

async function getAgent () {

    try{
    const response = await fetch("https://valorant-api.com/v1/agents");
    const data = await response.json();

    const agentName = document.getElementById("agentName").value.toLowerCase();
    const display = document.getElementById("display");

    const agent = data.data.find(
        agent => agent.displayName.toLowerCase() === agentName
    )

    if(!agent){
        console.log(`Agent not found.`) ;
    }
    else{
        display.src = agent.fullPortrait;
        display.style.display = "block";
    }
    }
    catch(error){
        console.error(error);
    }


}