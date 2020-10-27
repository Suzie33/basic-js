const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
  let dreamTeam = '';

  for (let name of members) {
    if (typeof name === 'string') {
      name = name.trim();
      dreamTeam += name[0];
      console.log(dreamTeam);
    }
  }
  
  let sortedDreamTeam = dreamTeam.toUpperCase().split('').sort().join('');
  return sortedDreamTeam;
};
