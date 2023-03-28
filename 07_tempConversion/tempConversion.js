const convertToCelsius = function(tempInFahrenheit) {
  let tempInCelsius = (tempInFahrenheit-32)*(5/9);
  tempInCelsius = Math.round(tempInCelsius*10)/10;
  return tempInCelsius;
  // (°F - 32) x 5/9 = °C
};

const convertToFahrenheit = function(tempInCelsius) {
  // (°C x 9/5) + 32 = °F
  let tempInFahrenheit = (tempInCelsius*9/5)+32;
  tempInFahrenheit = Math.round(tempInFahrenheit*10)/10;
  return tempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
