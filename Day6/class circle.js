class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    display() {
      console.log(`Circle with radius ${this.radius}`);
    }
  }
  
  // Creating an instance of Circle class
  const circleInstance = new Circle(2);
  circleInstance.display();
  console.log("Area:", circleInstance.getArea());
  console.log("Circumference:", circleInstance.getCircumference());
  