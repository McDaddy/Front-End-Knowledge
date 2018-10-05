function MyPromise(executor) {
  this.state = 'pending';
  this.value = null;
  this.reason = null;
  this.resolveFuncs = [];
  this.rejectFuncs = [];

  resolve = (data) => {
    this.state = 'fullfilled';
    this.value = data;
    if (this.resolveFuncs.length > 0) {
      this.resolveFuncs.forEach(x => {
        x(this.value);
      })
    }
  }
  reject = (reason) => {
    this.state = 'rejected';
    this.reason = reason;
    this.rejectFuncs.forEach(x => {
      x(this.reason);
    });
  }

  executor(resolve,reject);

}
MyPromise.prototype.then = function(res, rej){
  let promise2 = new MyPromise((resolve, reject) => {
    if (this.state === 'fullfilled') {
      setTimeout(function() {
        let x = res(this.value);
        reslovePromise(promise2,x, resolve, reject);
      },0);

    }
    if (this.state === 'pending') {
      this.resolveFuncs.push(function() {
        setTimeout(function(){
          let x = res(this.value);
          reslovePromise(promise2,x, resolve, reject);
        },0);
      });
    }

  });
  // if (this.state === 'fullfilled') {
  //   if (typeof res === 'function') {
  //     let x = res(this.value);
  //   }
  // }else if (this.state === 'rejected') {
  //   if (typeof rej === 'function') {
  //     rej(this.reason);
  //   }
  // }else
  // if (this.state === 'pending') {
  //   if (typeof res === 'function') {
  //     this.resolveFuncs.push(res);
  //   }
  //   if (typeof rej === 'function') {
  //     this.rejectFuncs.push(rej);
  //   }
  // }
  return promise2;

}

function reslovePromise(promise, x, reslove, reject) {
  if (typeof x === 'function') {
    resolve(x(this.value));
  }else {
    resolve(x);
  }

}

// let promise = new MyPromise((resolve,reject) => {
//   resolve(1);
// })
// promise.then((v) => console.log(v));
// let promise2 = new MyPromise((resolve,reject) => {
//   setTimeout(resolve,0,2);
// })
// promise2.then((v) => console.log(v));
let promise3 = new MyPromise((resolve,reject) => {
  // setTimeout(resolve,0,3);
  resolve(3);
})
promise3.then((x) => {
  return x + 4;
}).then((v) => console.log(v));
