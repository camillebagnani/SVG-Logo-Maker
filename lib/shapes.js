class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor (color, dimensions) {
    super (color)
    this.dimensions = dimensions;
    }
}


// class Triangle()

// class Square()

// classes for each shape
// all shapes should have render function and set color function
// set color mehtod in the parent class