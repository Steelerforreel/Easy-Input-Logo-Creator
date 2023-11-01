const fs = require("fs");
const inquirer = require("inquirer");
const Circle = require('./lib/circle')
const Triangle = require ('./lib/triangle')
const Square = require ('./lib/square')

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter a name that has at least 1-3 characters.",
    },
    {
      type: "input",
      name: "textColor",
      message: `Enter a color for the text using a keyword or a hexadecimal number`,
    },
    {
      type: "list",
      name: "shape",
      message: `Please choose logo shape`,
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: `Enter a color for the background of your logo using a keyword or a hexadecimal number`,
    },

  ])
  .then((data) => {
    const path = "./output/Logo.svg";
    let userChoiceShape;
    switch (data.shape) {
      case "Circle":
        userChoiceShape = new Circle(data.text, data.textColor, data.shapeColor);

        break;

      case "Triangle":
        userChoiceShape = new Triangle(data.text, data.textColor, data.shapeColor);
        
        break;

      case "Square":

        userChoiceShape = new Square(data.text, data.textColor, data.shapeColor);

        break;
    }

    fs.writeFile(path, userChoiceShape.render(), (err) =>
      err ? console.error(err) : console.log("Your Logo.svg has been created!")
    );
  })
  .catch((err) => console.error(err));