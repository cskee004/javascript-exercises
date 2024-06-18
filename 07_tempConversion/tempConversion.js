const convertToCelsius = function(farTemp) {
  
  let celTemp = (farTemp - 32) * (5/9)
  return Number(celTemp.toFixed(1))

};

const convertToFahrenheit = function(celTemp) {
  
  let farTemp = (celTemp * (9/5) + 32)
  return Number(farTemp.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
