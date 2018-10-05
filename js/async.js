async function testAsync() {
  let r1 = await new Promise(resolve => {
    setTimeout(resolve, 500, 'first');
  });
  console.log('in the mid');
  let r2 = await new Promise(resolve => {
    setTimeout(resolve, 5000, 'second');
  })
  console.log(r1,r2);
  return [r1,r2];
}

let result = testAsync();//.then(ret => console.log(ret));
console.log(result);



function testGenAsync(){
  return run(function* () {
    let r1 = yield new Promise(resolve => {
      setTimeout(resolve, 500, 'third');
    });
    console.log('in the mid2');
    let r2 = yield new Promise(resolve => {
      setTimeout(resolve, 5500, 'forth');
    });
    console.log(r1,r2);
    return [r1,r2];
  });
}

let result2 = testGenAsync();//.then(ret => console.log(ret));
console.log(result2);

function run(gen){
  return new Promise(resolve => {
    const it = gen();
    step();
    function step(x){
      let value = it.next(x);
      if (value.done) {
        resolve(value.value);
        return
      }
      Promise.resolve(value.value).then(x => step(x));
    }
  })

}
