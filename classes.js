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
console.log(accdetails.deposit(1000));
console.log(accdetails.getBalance());
//accdetails.#balance will throw an error due to encapsulation of balance
