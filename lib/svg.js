class SVG {
    constructor(){
        this.textEl = '';
        this.shapeEl = '';
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }
    putShape(shape){
        this.shapeEl = shape.render();
    }
    putText(msg, color){
        if (msg.length > 3) {
            throw new Error("Please enter 3 or fewer characters");
        }
        this.textEl = `<text x="150" y="130" font-size="50" text-anchor="middle" fill="${color}">${msg}</text>`
    }
}

module.exports = SVG;