const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix ) {
  let catsCounter = 0;
  
  for (let array of matrix) {
    for (let item of array) {
      if (item === "^^") {
        catsCounter++;
      }
    }
  }
  return catsCounter;
};
