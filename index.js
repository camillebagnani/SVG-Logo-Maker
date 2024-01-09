const {writeFile} = require('fs/promises');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes');
const SVG = require('./lib/svg');

const questions = [
    {
        type: 'input',
        message: 'Please enter up to three characters.',
        name: 'characters',
    },
    {
        type: 'input',
        message: 'Please enter a color or a hexadecimal number for the text.',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Please choose a shape.',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shapeType',
    },
    {
        type: 'input',
        message: 'Please enter a color or a hexadecimal number for the shape.',
        name: 'shapeColor',
    },
];

const init = () => {
    inquirer.prompt(questions)
    .then(({characters, textColor, shapeType, shapeColor}) => {
        let shape;
        if(shapeType === 'Circle'){
            shape = new Circle();
        } else if (shapeType === 'Triangle'){
            shape = new Triangle();
        } else {
            shape = new Square();
        }
        shape.setColor(shapeColor);
        const svg = new SVG();
        svg.putShape(shape);
        svg.putText(characters, textColor);
        return writeFile('logo.svg', svg.render())
    })
}

init()
