type Shape = { color: string; sides: number };
type Square = { color: string; sides: number; sideLength: number };

const redSquare: Square = { color: "red", sides: 4, sideLength: 5 };
const shape: Shape = redSquare;

console.log(shape.sideLength);