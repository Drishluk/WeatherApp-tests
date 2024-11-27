//Проверка, что alert вызывается при пустом вводе

const getWeather = require('../src/main');

test('alerts the user when city input is empty', () => {
  document.body.innerHTML = '<input id="city" value="" />';
  global.alert = jest.fn();

  getWeather();

  expect(global.alert).toHaveBeenCalled(); // Проверяем, что alert был вызван
});
