const fs = require("fs");
const inquirer = require("inquirer");
const { createLogo } = require("./lib/createLogo");
const { createShape } = require("./lib/createShape");

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
      message: `Enter a color keyword or a hexadecimal number`,
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
      message: `Enter a color keyword or a hexadecimal number`,
    },
    
])
  .then((data) => {
    const path = "./output/Logo.svg";
    const logo = createShape(data);

    fs.writeFile(path, createLogo(logo), (err) =>
      err ? console.error(err) : console.log("Your Logo.svg has been created!")
    );
  })
  .catch((err) => console.error(err));