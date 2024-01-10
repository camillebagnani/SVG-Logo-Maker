const {Circle, Triangle, Square} = require('./shapes')

describe('Shape', () => {
    describe('Cirlce', () => {
        it ('should render a circle', () => {
            const shape = new Circle();
            shape.setColor('green');
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>')
        })
    })
    describe('Triangle', () => {
        it('should render a triangle', () => {
            const shape = new Triangle();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        });
    });
    describe('Square', () => {
        it('should render a square', () => {
            const shape = new Square();
            shape.setColor('pink');
            expect(shape.render()).toEqual('<rect x="50" y="50" width="150" height="150" fill="pink"/>')
        })
    })
});