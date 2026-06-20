const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

// Function to fetch data from Weather API
async function getData(cityName) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=ab1f2f6e644fc83406t99f210443592426782006&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

// Event listener for the click action on the search button
button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    
    // Dynamically updating the DOM elements with retrieved API data
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
});