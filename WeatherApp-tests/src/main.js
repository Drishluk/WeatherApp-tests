// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = 'f04d936e875decdd75a919955d64a8b6';

function getWeather() {
  const cityElement = document.getElementById('city');
  const city = cityElement.value;

  if (city === '') {
    window.alert('Please enter a city name.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === '404') {
        alert('City not found. Please enter a valid city name.');
        return;
      }

      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = `
<h3>${data.name}, ${data.sys.country}</h3>
<p>Temperature: ${data.main.temp} °C</p>
<p>Weather: ${data.weather[0].description}</p>
`;
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again later.');
    });
}

module.exports = getWeather;
