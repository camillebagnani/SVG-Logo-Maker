class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor (color, svg) {
    super (color);
    this.svg = svg;
    }
}


// class Triangle()

// class Square()

// classes for each shape
// all shapes should have render function and set color function
// set color mehtod in the parent class

const newCircle = new Circle(
    'blue',
    `<svg width="300" height="200"><circle x="50" y="50" cx="25" cy="75" r="20" fill="${questions.shapeColor}"/><text x="150" y="125" font-size="60" color="${questions.textColor}"></svg>`,
);

module.exports = (Circle)