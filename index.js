const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path");

const {Circle, Square, Triangle} = require('./lib/shapes');

class Svg{
    constructor(){
        this.textElement = '';
        this.shapeElement = '';
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
}

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

// Function to write data to file
function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Please refer to the 'generated-logo' folder to view the generated file!");
    });
}

// Initialize the SVG logo generation process
function generateLogo() {
    console.log("Starting logo generation process...");

    inquirer.prompt(questions).then(async (answers) => {
        const svg = new Svg();

        // Validate and set user input
        const user_text = answers.text.length > 0 && answers.text.length < 4 ? answers.text : '';
        const user_font_color = answers["text-color"] || 'black';
        const user_shape_color = answers.shape || 'black';
        const user_shape_type = answers["pixel-image"] || 'Circle';

        let user_shape;

        // Create the appropriate shape object based on user input
        if (user_shape_type.toLowerCase() === "square") {
            user_shape = new Square();
        } else if (user_shape_type.toLowerCase() === "circle") {
            user_shape = new Circle();
        } else if (user_shape_type.toLowerCase() === "triangle") {
            user_shape = new Triangle();
        } else {
            console.log("Invalid shape! Using default Circle shape.");
            user_shape = new Circle();
        }

        // Set shape color
        user_shape.setColor(user_shape_color);

        // Set text and shape elements
        svg.setTextElement(user_text, user_font_color);
        svg.setShapeElement(user_shape);

        const svgString = svg.render();

        // Print shape to log
        console.log("Displaying shape:\n\n" + svgString);

        // Write SVG to file
        const svgFile = "logo.svg";
        writeToFile(svgFile, svgString);
    });
}

init()