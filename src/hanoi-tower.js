const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let iterations = 2 ** disksNumber - 1;
  let seconds = Math.floor(3600 / turnsSpeed * iterations);

  let obj = {
    turns: iterations,
    seconds: seconds
  };
  return obj;
};