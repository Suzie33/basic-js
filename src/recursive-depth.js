const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    let counter = 1;
    let depth = 1;

    for (let item of arr) {
      if (Array.isArray(item)) {
        counter = 1 + this.calculateDepth(item);

        if (counter > depth) {
          depth = counter;
        }
      }
    }
    return depth;
  }
};

const depthCalc = new module.exports();

console.log(depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]));