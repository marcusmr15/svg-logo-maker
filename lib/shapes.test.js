//! Import the Circle, Square, and Triangle shape classes from the 'shapes.js' module
const { Circle, Square, Triangle } = require("./shapes");

//* Test suite for the Circle shape
describe('Circle', () => {
    test('renders correctly', () => {
        // Create  Circle object
        const shape = new Circle();
        // Define color
        const color = 'blue';
        // Set the color to the shape
        shape.setColor(color);
        // Check if the rendered SVG matches the expected SVG string for a blue Circle
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"></circle>`);
    });
});

describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        const color = 'green';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"></rect>`);
    });
});

describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        const color = 'pink';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="0,200 300,200 150,0" fill="${color}"></polygon>`);
    });
});

