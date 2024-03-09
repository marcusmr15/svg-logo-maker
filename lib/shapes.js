// Defines a class called Shape which has a constructor initializing 'color' and sets the 'color' value.
class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

// Defines a Circle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`;
    }
}

// Defines a Square class that extends Shape and renders an SVG Square with position, size, and fill color based on the current instance's properties.
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`;
    }
}

// Defines a Triangle (Polygon) class that extends Shape and renders an SVG Triangle (Polygon) with position, size, and fill color based on the current instance's properties.
class Triangle extends Shape {
    render() {
        return `<polygon points="0,200 300,200 150,0" fill="${this.color}"></polygon>`;
    }
}

module.exports = { Circle, Square, Triangle };
