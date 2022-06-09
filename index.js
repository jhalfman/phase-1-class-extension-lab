// Your code here
class Polygon {
    constructor(intArray) {
        this.intArray = intArray;
    }

    get countSides() {
       return this.intArray.length;
    }

    get perimeter() {
        return this.intArray.reduce((acc, current) => {
            return acc + current;
        }, 0)
        
    }
}

class Triangle extends Polygon {
    get isValid() {
        return (this.intArray[0] + this.intArray[1] > this.intArray[2] && this.intArray[0] + this.intArray[2] > this.intArray[1] && this.intArray[2] + this.intArray[1] > this.intArray[0])
    }
}

class Square extends Polygon {
    get isValid() {
        return (this.intArray [0] === this.intArray[1] && this.intArray [0] === this.intArray[2] && this.intArray [0] === this.intArray[3])
    }

    get area() {
        return this.intArray[0] * this.intArray[0];
    }
}