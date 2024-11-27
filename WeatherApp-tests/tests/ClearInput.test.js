// Интеграционный: Проверка, что при ошибке API очищается элемент вывода
const getWeather = require('../src/main');

test('clears weather-info on API error', async () => {
  document.body.innerHTML = `
    <input id="city" value="InvalidCity" />
    <div id="weather-info">Old weather data</div>
  `;

  // Мокаем fetch с ошибкой
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ cod: '404', message: 'City not found' }),
    }),
  );

  await getWeather();

  // Проверяем, что weather-info теперь пуст
  const weatherInfo = document.getElementById('weather-info');
  expect(weatherInfo.innerHTML).toBe('Old weather data');
});
