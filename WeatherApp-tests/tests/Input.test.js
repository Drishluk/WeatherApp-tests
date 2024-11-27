test('reads the city value from input field', () => {
  // Подготавливаем DOM с вводом города
  document.body.innerHTML = '<input id="city" value="Moscow" />';

  const cityElement = document.getElementById('city');
  expect(cityElement.value).toBe('Moscow'); // Проверяем, что значение корректно
});
