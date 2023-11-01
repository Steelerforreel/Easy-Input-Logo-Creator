const circle = require("./circle");
const square = require("./square");
const triangle = require("./triangle");

const createShape = (data) => {
  const { logoShape } = data;
  switch (logoShape) {
    case "circle":
      const createCircle = new circle(data);
      return createCircle;
      break;

    case "triangle":
      const createTriangle = new triangle(data);
      return createTriangle;
      break;

    case "square":
      console.log(data);
      const createSquare = new square(data);
      return createSquare;
      break;

    default:
      return `This is not the shape you are looking for.`;
  }
};

module.exports = { createShape };