/* eslint-disable */

const Car = require("./car");

// describe("The car class", () => {
//   test("has four wheels", () => {
//     let car = new Car();
//     expect(car.wheels).toBe(4);
//   });

//   xtest("bad wheels", () => {
//     let car = new Car();
//     expect(car.wheels).toBe(3);
//   });
// });

describe("The car class", () => {
  let car;

  beforeEach(() => {
    car = new Car();
  });

  test("two new cars are equal objects", () => {
    let car1 = new Car();
    let car2 = new Car();
  
    expect(car1).toEqual(car2);
  });
  
  test("raises an error when called drive on it", () => {
    let car = new Car();
    expect(() => car.drive()).toThrow();
  });
  
  test("raises a TypeError when called drive on it", () => {
    let car = new Car();
    expect(() => car.drive()).toThrow(TypeError);
  });
  
  test("a new car has no mileage info", () => {
    let car = new Car();
    expect(car.mileageInfo).toBeNull();
  });
  
  test("wheels is truthy", () => {
    let car = new Car();
    expect(car.wheels).toBeTruthy();
  });
  
  test("array contains car", () => {
    let car = new Car();
    let arr = [1, 2, 3];
    arr.push(car);
    expect(arr).toContain(car);
  });
  
  test("string contains 'car'", () => {
    let man = "His scars have healed";
    expect(man).toContain('car');
  });
  
  test("car has wheels", () => {
    let car = new Car();
    expect(car.wheels).not.toBeUndefined();
  });
});

/* eslint-enable */