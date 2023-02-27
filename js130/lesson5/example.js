// Questions to do again:

// https://launchschool.com/gists/43161e36 <- problem 1, 

// 1) 

function startCounting() {
  let num = 0;
  let id = setInterval(() => {
    num += 1;
    console.log(num);
  }, 1000);
  return id;
}

function stopCounting(identifier) {
  clearInterval(identifier);
}

let id = startCounting();
stopCounting(id);