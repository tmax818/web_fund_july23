// GLOBAL VARS
// https://openweathermap.org/api/one-call-3#start
var weather_api_key = "fill in your API key / token";

// get pokemon
async function getCoderData(pokemonName) {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName);
    console.log(response)
    // catch the error
    if (!response.ok) {
        console.log("HOUSTON WE HAVE A PROBLEM")
    } else {
        var pokeData = await response.json();
        console.log("===============")
        console.log(pokeData)
        console.log("===============")
        console.log(pokeData.sprites.front_shiny);
        // go to the DOM and change the source
        var imgElement = document.querySelector("#pokeImage")
        imgElement.src = pokeData.sprites.front_shiny
    }
}

// get input
function getInput() {
    // get the input's value
    var pokemonNameInput = document.querySelector("#userInput");
    console.log(pokemonNameInput.value)

    // now get that pokemon
    getCoderData(pokemonNameInput.value);
}

// get weather:
async function getWeather() {
    var cityName = document.querySelector("#cityName").value;

    var serverResponse = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + weather_api_key + "&units=imperial")
    // console.log(serverResponse)
    var weatherData = await serverResponse.json();
    // console.log(weatherData.weather[0].description)
    // console.log(weatherData.weather[0].icon)
    // console.log(weatherData.main.feels_like)

    var desc = weatherData.weather[0].description
    var icon = weatherData.weather[0].icon
    var temp = weatherData.main.feels_like
    var iconLink = `https://openweathermap.org/img/wn/${icon}@2x.png`

    document.getElementById("results").innerHTML = `
        <p>${desc}</p>
        <p>${temp} F</p>
        <img src=${iconLink} alt="icon">
    `

    // get the icon
    // https://openweathermap.org/img/wn/10d@2x.png
    // console.log(weatherData)

}