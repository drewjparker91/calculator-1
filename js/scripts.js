function add(number1, number2) {
  return number1 + number2;
};

funtction subtract(number1, number2) {
  return number1 - number2;
};

funtction multiply(number1, number2) {
  return number1 * number2;
};

funtction divide(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  const number1 = parseInt(prompt("Enter a number:"));
  const number2 = parseInt(prompt("Enter another number:"));
  
  alert(add(number1, number2));
});
