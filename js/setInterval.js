function myInterval(fn, ms) {
  function interval(){
    fn()
    return setTimeout(interval, ms);
  }
  return interval();
}

function say() {
  console.log(123);
}

myInterval(say, 1000);
