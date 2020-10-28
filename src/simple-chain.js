const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      this.chain = [];
      throw new Error('not number');
    }
    if (!Number.isInteger(position)) {
      this.chain = [];
      throw new Error('not integer');
    }
    if (position <= 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error('wrong position');
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainString = this.chain.map((el, i, arr) => {
      if (i === arr.length - 1) {
        return el = `( ${el} )`;
      } else {
        return el = `( ${el} )~~`;
      }
    
    });
    this.chain = [];
    return chainString.join('');
  }
};


module.exports = chainMaker;
