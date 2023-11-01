const shape = require("./shapes");

class square extends shape {
  constructor(data) {
    super(data);
  }
  render() {
    return `<rect x="120" width="100" height="100" rx="15" fill="${this.logoColor}" />`;
  }
}

module.exports = square;