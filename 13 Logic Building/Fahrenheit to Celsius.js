function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let fahrenheit = 77;
let celsius = toCelsius(fahrenheit);
console.log(fahrenheit + " Fahrenheit = " + celsius + " Celsius")