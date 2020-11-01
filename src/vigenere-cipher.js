const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (mode = true) {
    this.mode = mode;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('error');
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encryptWord = "";
    let keyIndConter = 0;

    for (let i = 0; i < message.length; i++) {
      let charIndInAlf = alphabet.indexOf(message[i].toUpperCase());
      let keyIndInAlf = alphabet.indexOf(key.charAt(keyIndConter % key.length).toUpperCase());

      if (charIndInAlf !== -1) {
        encryptWord += alphabet.charAt((charIndInAlf + keyIndInAlf) % alphabet.length);
        keyIndConter++;
      } else {
        encryptWord += message[i];
      }
    }
    if (!this.mode) {
      encryptWord = encryptWord.split('').reverse().join('');
    }
    return encryptWord;
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('error');
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decryptWord = "";
    let keyIndConter = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let charIndInAlf = alphabet.indexOf(encryptedMessage[i].toUpperCase());
      let keyIndInAlf = alphabet.indexOf(key.charAt(keyIndConter % key.length).toUpperCase());

      if (charIndInAlf !== -1) {
        decryptWord += alphabet.charAt(((charIndInAlf + alphabet.length) - keyIndInAlf) % alphabet.length);
        keyIndConter++;
      } else {
        decryptWord += encryptedMessage[i];
      }
    }
    if (!this.mode) {
      decryptWord = decryptWord.split('').reverse().join('');
    }
    return decryptWord;
  }
}

module.exports = VigenereCipheringMachine;
