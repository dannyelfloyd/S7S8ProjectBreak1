console.log('HTML & JS conected');

const apiKey = '9f50dee8475d494aa6993528251004';
const city = 'Berlin';
const ENDPOINT = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;

const weatherDiv = document.getElementById('weatherDiv');
const forestcastDiv = document.getElementById('forestcastDiv');

async function getDataAPI () {
    try {
      const response = await fetch(ENDPOINT);

      if (!response.ok) {
        throw new Error('Ha surgido un error', response.status);
      }

      const data = await response.json();
      console.log(data);
      getWeather(data);
      console.log(data.forecast.forecastday[0].hour);
      getForestcast(data);
      

      return data;
    } catch (error) {
      console.log('Error al obtener los datos', error);
    }
};

function getWeather(data) {
    const {name, country} = data.location;
    console.log(name,country);
    const {condition: {text, icon}, temp_c, humidity, wind_kph, precip_mm} = data.current;

    weatherDiv.innerHTML += `
    <div class="location-date-container">
      <div class="location">
        <span class="material-symbols-rounded">
          location_on
        </span>
        <h4 class="country-txt">${name}, ${country}</h4>
      </div>
      <h5 class="current-date-tx">We, 07 Aug</h5>
    </div>
    <div class="weather-summary-container">
      <img src="${icon}" alt="${icon}">
      <div class="weather-summary-info">
        <h3 class="temp-txt">${temp_c}ºC</h3>
        <h4 class="condition-txt">${text}</h4>
      </div>
    </div>
    <div class="weather-conditions-container">
      <div class="condition-item">
        <span class="material-symbols-rounded">
          humidity_percentage
        </span>
        <div class="condition-info">
          <h5>Humidity</h5>
          <h5>${humidity}%</h5>
        </div>
      </div>
      <div class="condition-item">
        <span class="material-symbols-rounded">
          air
        </span>
        <div class="condition-info">
          <h5>Wind</h5>
          <h5>${wind_kph} Km/h</h5>
        </div>
      </div>
      <div class="condition-item">
        <span class="material-symbols-rounded">
          water_drop
        </span>
        <div class="condition-info">
          <h5>Rain</h5>
          <h5>${precip_mm} mm</h5>
        </div>
      </div>
    </div>
    `;
};

function getForestcast(data) {
    const forecastArray = data.forecast.forecastday[0].hour;
    console.log(forecastArray);
    forecastArray.forEach(element => {
        const {condition: {icon}, time, temp_c} = element;
        console.log('time.split',time.split(" "));
        const hour = time.split(" ")[1];
        console.log('time.split(" ")[1]',hour);
        forestcastDiv.innerHTML += `
        <div class="forestcast-item">
          <h5 class="forestcast-item-hour">${hour}</h5>
          <img src="${icon}" alt="${icon}">
          <h5 class="forestcast-item-temp">${temp_c}ºC</h5>
        </div>
        `
    });

};

getDataAPI();