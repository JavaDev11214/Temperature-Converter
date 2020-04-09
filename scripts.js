// reference to the fahrenheit input
var fInput = document.querySelector(".fInput");
// reference to the celsius input
var cInput = document.querySelector(".cInput");
// create a function that calculates celsius
function calcCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
// create a function that calculates fahrenheit
function calcFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// add an event listener to fahrenheit input field
fInput.addEventListener("input", function() {
  var cTemp = calcCelsius(fInput.value);
  cInput.value = cTemp + "C";
  if (fInput.value === "") {
    fInput.placeholder = 0;
  }
});

// add an event listener to celsius input field
cInput.addEventListener("input", function() {
  var fTemp = calcFahrenheit(cInput.value);
  fInput.value = fTemp + "F";
  if (cInput.value === "") {
    cInput.placeholder = 0;
  }
});
