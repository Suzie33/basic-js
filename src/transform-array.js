const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('error');

  let transformedArr = arr.slice();
  let deleted = {};

  for (let i = 0; i < transformedArr.length; i++) {
    if (transformedArr[i] === '--discard-next') {
      if (i === transformedArr.length - 1) {
        transformedArr.splice(i, 1, deleted);
      } else {
        transformedArr.splice(i, 2, deleted);
      }
    }
    if (transformedArr[i] === '--discard-prev') {
      if (i === 0) {
        transformedArr.splice(0, 1, deleted);
      } else {
        transformedArr.splice(i-1, 2, deleted);
      };
    }
    if (transformedArr[i] === '--double-next') {
      if (i === transformedArr.length - 1) {
        transformedArr.splice(i, 1);
      } else {
        transformedArr.splice(i, 1, transformedArr[i + 1]);
      }
    }
    if (transformedArr[i] === '--double-prev') {
      if (i === 0) {
        transformedArr.splice(i, 1);
      } else if (transformedArr[i - 1] === deleted) {
        transformedArr.splice(i, 1);
      } else {
        transformedArr.splice(i, 1, transformedArr[i - 1]);
      }
    }
  }

  let filteredArray = transformedArr.filter((item) => {
    return item !== deleted;
  })
  // console.log(filteredArray);
  return filteredArray;
};

// module.exports(['--discard-next','DEF','--discard-prev',8.963,NaN,'--double-next']);