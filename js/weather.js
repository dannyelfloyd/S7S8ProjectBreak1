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

    weatherDiv.innerHTML = `
    <h2>${name} / ${country}</h2>
    <p>${text}</p>
    <img src="${icon}" alt="${icon}"> 
    <p>${temp_c}ºC</p>
    <p>Humedad: ${humidity}%</p>
    <p>Viento: ${wind_kph}km/h</p>
    <p>Precipitaciones: ${precip_mm} mm</p>
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
        <li>
            <p>${hour}<p>
            <img class="weather-icon" src="http:${icon}" alt="">
            <p>${temp_c} °C</p>
        </li>
        `
    });

};

getDataAPI();