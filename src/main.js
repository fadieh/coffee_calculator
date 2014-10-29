var Main;

Main = (function() {
  function Main() {}

  Main.prototype.addition = function(number1, number2) {
    return number1 + number2;
  };

  Main.prototype.subtraction = function(number1, number2) {
    return number1 - number2;
  };

  Main.prototype.division = function(number1, number2) {
    return number1 / number2;
  };

  Main.prototype.multiply = function(number1, number2) {
    return number1 * number2;
  };

  return Main;

})();

module.exports = Main;
