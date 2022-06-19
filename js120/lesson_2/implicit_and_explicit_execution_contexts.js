function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
}

obj.num = sumNum.call(obj, 5);
console.log(obj.num);