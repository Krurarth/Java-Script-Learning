// Wheather app

const form = document.querySelector(".myForm");
const cityName = document.querySelector(".input");
const myBox = document.querySelector(".myBox");
const apiKey = "ddd92b5a1833c2259d3f64c9de36f6e6";

form.addEventListener("submit" , async (event)=>{
    event.preventDefault();

    const city = cityName.value;
    if(city){
       try{

        const wheatherData = await getWheatherData(city);
        displayWheatherData(wheatherData);

    }catch(error){
        console.error(error);
        displayerror(error.message);
    }

    }
    else{
        displayerror("Please enter a city");
        
}});

async function getWheatherData(city){

    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const responce = await fetch(apiUrl);

    if(!responce.ok){
        throw new Error("Didn't found the city");
    }
    return await responce.json();

}

function displayWheatherData(data){
    
    const {
    name: city,
    main: { temp, humidity: humidityValue },
    weather: [{ description, id }]
                                    } = data;

        myBox.textContent = "";
        myBox.style.display = "flex";

        const cityName = document.createElement("h1");
        const myTemp = document.createElement("h1");
        const humidity = document.createElement("p");
        const characteristics = document.createElement("p");
        const imogi = document.createElement("p");


        cityName.textContent = city;
        cityName.classList.add("cityDisplay");
        myBox.appendChild(cityName);

        myTemp.textContent = `${(temp - 273.15).toFixed(1)}°C`;
        myTemp.classList.add("myTemp");
        myBox.appendChild(myTemp);

        humidity.textContent = `Humidity: ${humidityValue}%`;
        humidity.classList.add("humidity");
        myBox.appendChild(humidity);

        characteristics.textContent = description;
        characteristics.classList.add("characteristics");
        myBox.appendChild(characteristics);

        imogi.textContent = displayimogi(id);
        imogi.classList.add("imogi");
        myBox.appendChild(imogi);


}

function displayerror(message){
    const error = document.createElement("p");
    error.textContent = message;
    error.classList.add("error");

    myBox.textContent = "";
    myBox.style.display = "flex";
    myBox.appendChild(error);

}

function displayimogi(id){

    if(id >= 200 && id < 300){
        return "⛈️";
    }
    else if(id >= 300 && id < 500){
        return "🌦️";
    }
    else if(id >= 500 && id < 600){
        return "🌧️";
    }
    else if(id >= 600 && id < 700){
        return "❄️";
    }
    else if(id >= 700 && id < 800){
        return "🌫️";
    }
    else if(id === 800){
        return "☀️";
    }
    else if(id > 800){
        return "☁️";
    }

    return "❓";
}