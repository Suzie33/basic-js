const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if ((Object.prototype.toString.call(date) === '[object Date]') === false) throw new Error('error');

  let season = '';

  let month = date.getMonth();
  if (month >= 8 && month <= 10) {
    season = 'fall';
  } else if (month >= 2 && month <= 4) {
    season = 'spring';
  } else if (month >= 5 && month <= 7) {
    season = 'summer';
  } else {
    season = 'winter';
  }
  return season;
};
