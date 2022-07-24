/*
Practice problems 
1)


const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}
Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}
Object.assign(Truck.prototype, Speed);

let car = new Car();
car.goFast();

let truck = new Truck();
truck.goFast();

console.log('goFast' in truck);
console.log('goFast' in car);

2)

the goFast method in the Speed object calls console.log() and within the output references this.constructor.name.
When goFast is called, it is given a method execution context (in this case  an instance of either Car or Truck).
this.constructor references the constructor function of those instances - in this case the Car or Truck classes) and the name 
property of each of those constructor functions references the function's name when it was created (in this case Car or Truck).
Classes are syntatical sugar and in are constructor functions under the hood, so this applies to classes too. 

3)
*/

const Moveable = {
  range: function () {
    return this.fuelCap *  this.fuelEfficiency;
  }
}

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }

}

Object.assign(WheeledVehicle.prototype, Moveable);

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.kmTravelledPerLiter = kmTravelledPerLiter;
    this.fuelCapInLiter = fuelCapInLiter;
  }
}
Object.assign(Catamaran.prototype, Moveable);
