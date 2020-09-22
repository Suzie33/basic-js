const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  const MODERN_ACTIVITY = 15;
  const REACTION_RATE = 0.00012094;

  if (typeof sampleActivity !== 'string') return false;
  let activityNumber = Number(sampleActivity);
  if (isNaN(sampleActivity) || 
      sampleActivity === Infinity || 
      sampleActivity < 1 || 
      sampleActivity > MODERN_ACTIVITY) 
        return false;
  
  let result = Math.log(MODERN_ACTIVITY/activityNumber)/REACTION_RATE;
  return Math.ceil(result);
};
