class Shape {
    constructor() {}

    circleArea(radius) {
        console.log("Circle Area Value:", 3.14 * radius * radius);
        document.querySelector (".Circle").innerHTML = "Circle Area Value : " + 3.14 * radius * radius;

    }


    rectangleArea(width, height) {
        console.log("Rectangle Area Value:", width * height);
        document.querySelector (".Rectangle").innerHTML = "Rectangle Area Value : " + width * height;
    }
}


const shape = new Shape();

shape.circleArea(7);
shape.rectangleArea(6 ,8);