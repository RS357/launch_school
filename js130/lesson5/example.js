function delayLog() {
  for (let idx = 0; idx < 10; idx += 1) {
    console.log('idx: ',idx);
    setInterval(() => console.log(idx), 1000 * idx);
  }
}
delayLog();
