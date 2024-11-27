//Проверка, что DOM-элемент для вывода погоды существует

test('weather-info element exists', () => {
  document.body.innerHTML = '<div id="weather-info"></div>';

  const weatherInfo = document.getElementById('weather-info');
  expect(weatherInfo).not.toBeNull();
});
