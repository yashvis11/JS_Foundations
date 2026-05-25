function Animal(animal) {
  this.animal = animal;
}

  Animal.prototype.speak = function () {  //added method speak to the prototype of Animal so all instances have the same method
    return `${this.animal} speaking`;
  };

function Dog(animal){
  Animal.call(this, animal);  //passing values to the parent constructor as the methods need to be accessed via the Dog class
}

Dog.prototype = Object.create(Animal.prototype);  //link the objects of the Dog prototype to the Animal prototype 
Dog.prototype.constructor = Dog;  //as the above method overwrites the deafult Dog prototype to make sure the compiler
//  knows the instances of Dog is of the class Dog the second line is written

Dog.prototype.bark = function(){  //adding method bark to Dog class
  return `Woof!`;
}

let myDog = new Dog("Animal");
console.log(myDog.bark());
console.log(myDog.speak());

/* Functional Constructor and Errors
Task 1: Create a Functional Constructor

Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".



Task 2: Handle Errors

Modify the Person constructor to throw an error if the age is not a positive number.*/

function Person(name, age) {
  if (age < 0) {
    throw new Error("Age must be a positive number");
  }
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

/*
Classes, Objects, and Inheritance
Task 1: Class Inheritance

Create a class Vehicle with properties make and model, and a method getDetails() that returns 
a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".

Task 2: Method Overriding in Inheritance
Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". 
Then, override the move() method in the Car class to return "The car is driving".

Task 3: Static Methods in Classes
Add a static method isVehicle(obj) to the Vehicle class that checks if 
a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise. */

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
  move() {
    return `The vehicle is moving`;
  }
  static isVehicle(obj) {
    return obj instanceof Vehicle;  //instanceOf cannot use "." as it is not a method the best way to use it is as a constructor
  }
}

class Car extends Vehicle {
  startEngine() {
    return `Engine started`;
  }
  move() {
    return `The car is driving`;
  }
}



