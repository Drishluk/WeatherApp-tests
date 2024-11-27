const getWeather = require('../src/main');

test('fetch is called when a city name is entered', () => {
  // Подготавливаем DOM и замоканный fetch
  document.body.innerHTML = '<input id="city" value="London" />';
  global.fetch = jest.fn(); // Мокаем fetch

  getWeather();

  expect(global.fetch).toHaveBeenCalled(); // Проверяем, что fetch был вызван
});
