const Shape = require("./shapes");

class triangle extends shape {
  constructor(data) {
    super(data);
  }
  render() {
    return `<polygon points="0,200 100,0 200,200" fill="${this.logoColor}" />`;
  }
}

module.exports = triangle;