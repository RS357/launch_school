function startCounting() {
  let num = 1;
  return setInterval(() => {
    console.log(num);
    num += 1;
  }, 1000);
}

let id = startCounting();
clearInterval(id);