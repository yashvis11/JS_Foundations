function Car(make, model) {
    if(!new.target){
        throw new Error("Use keyword new to call");
    }
  this.make = make || "";
  this.model = model || "";

}

function ElectricCar(batterCapacity) {
  this.batterCapacity = batterCapacity;
}

let myCar = new Car("BMW", "Ferrari");
// let myCar2 = Car("BMW", "Ferrari");

console.log(myCar);
myCar.make = "Honda";
console.log(myCar);

let myElectricCar = new ElectricCar(10);
Object.setPrototypeOf(myElectricCar, myCar);
console.log(myElectricCar);
console.log(myElectricCar.make);
