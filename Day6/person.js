class Person {
    constructor(firstName, lastName, age, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    displayDetails() {
      console.log(`Name: ${this.getFullName()}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
    }
  }
  
  const person1 = new Person("Marcus", "Mathuram", 23, "Male");
  
  person1.displayDetails();
  