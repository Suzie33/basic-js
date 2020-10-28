const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  repetingStr = str;
  let addition = String(options.addition);
  let repeatingString = String(str);

  if (options.addition || String(options.addition) === 'false' || String(options.addition) === 'null') {
    let additionWithSeparator = addition;
    let separator = '|'
    
    if (options.additionRepeatTimes) {
      if (options.additionSeparator) {
        separator = options.additionSeparator;
      } 

      for (let i = 1; i <= options.additionRepeatTimes - 1; i++) {
        additionWithSeparator = additionWithSeparator + separator + addition;
      }
    }
    repetingStr += additionWithSeparator;
  }

  if (options.repeatTimes) {
    let separator = '+'
    if (options.separator) {
      separator = options.separator;
    } 

    repeatingString = repetingStr;

    for (let i = 1; i <= options.repeatTimes-1; i++) {
      repeatingString = repeatingString + separator + repetingStr;
    }
  }

  if (!options.repeatTimes && options.addition) {
    repeatingString += addition;
  }

  return repeatingString;
};

console.log(module.exports(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }))