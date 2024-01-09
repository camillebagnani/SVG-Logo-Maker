class Shape {
    constructor(color) {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
   render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
   }
}

class Triangle extends Shape {
    render(){
     return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
 }

 class Square extends Shape {
    render(){
     return `<rect x="50" y="50" width="150" height="150" fill="${this.color}"/>`
    }
 }


// class Triangle()

// class Square()

// const newCircle = new Circle(
//     'blue',
//     `<svg width="300" height="200"><circle x="50" y="50" cx="25" cy="75" r="20" fill="${questions.shapeColor}"/><text x="150" y="125" font-size="60" color="${questions.textColor}"></svg>`,
//     `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
// );

module.exports = {Circle, Triangle, Square}