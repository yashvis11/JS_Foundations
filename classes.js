class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Alto extends Vehicle {
  drive() {
    return `${this.make}-inheritance example`;
  }
}

let Car = new Alto(`Maruti Suzuki`, `Alto`);
// console.log(Car.start());
// console.log(Car.drive());

//Encapsulation

class BankAccount {
  #balance = 0; //the # encapsulates the variable so that it is not available outside the class

  deposit(amount) {
    this.#balance += amount; //can access balance here as it is still inside the class
    return this.#balance; //this keyword means the property #balance of the particular object, here accdetails
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let accdetails = new BankAccount();
// console.log(accdetails.deposit(1000));
// console.log(accdetails.getBalance());
//accdetails.#balance will throw an error due to encapsulation of balance

//Abstraction

class Coffee {
  start() {
    return `Starting machine...`;
  }
  brew() {
    return `Brewing coffee`;
  }

  pressStartButton() {
    console.log(
      this.start(),
    ); /*the class includes the this keyword because when you create an object with the blueprint of the class 
                                this would act as a variable holding the reference of that objects*/
    console.log(this.brew()); //here if the console statement is missing, then
    // there is nothing to grab the outputs of start and brew, so a return statement is necessary to
    //store the output
  }
}

let myCoffee = new Coffee();
myCoffee.pressStartButton();

//Plymorphism

/*The extends keyword does not copy the parent method into the chil. It creates a link. The controller
searches from bottom up if it sees a local method in the child class it executes it but if it does 
not see one it climbs the ladder to the parent class' method. 
The child class does not contain the parent class' method*/
class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins cannot fly...`;
  }
}

let myBird = new Bird();
let myPenguin = new Penguin();
// console.log(myBird.fly());
// console.log(myPenguin.fly());

//static methods

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

let summation = new Calculator();
//console.log(summation.add());  does not work as static makes the method private such that no objects of the method can access it
console.log(Calculator.add(2, 3)); //only class can access
