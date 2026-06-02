

async function getAgent() {
    const message = document.getElementById("message");
    const display = document.getElementById("display");
    const agentName = document.getElementById("agentName").value.trim().toLowerCase();

    message.textContent = "";
    display.style.display = "none";

    if (!agentName) {
        message.textContent = "Please enter an agent name.";
        return;
    }

    try {
        const response = await fetch("https://valorant-api.com/v1/agents");
        const data = await response.json();

        const agent = data.data.find(agent =>
            agent.displayName.toLowerCase() === agentName
        );

        if (!agent) {
            message.textContent = "Agent not found. Try a different name like Jett, Sage, or Reyna.";
            return;
        }

        const imageUrl = agent.fullPortrait || agent.displayIcon || "";
        if (!imageUrl) {
            message.textContent = `${agent.displayName} has no portrait available.`;
            return;
        }

        display.src = imageUrl;
        display.alt = agent.displayName;
        display.style.display = "block";
        message.textContent = `Showing ${agent.displayName}.`;
    } catch (error) {
        console.error(error);
        message.textContent = "Failed to load Valorant agent data. Check your network or API URL.";
    }
}