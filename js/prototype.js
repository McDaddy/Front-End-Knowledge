function a (){
  this.name1 = 'aa';
  this.xjj = 'xjj';
}

function b(){
  a.call(this);
  // this.name1 = 'bb';
}
b.prototype = Object.create(a);

let t1 = new b();
console.log(t1.xjj);
for (let item of Object.keys(t1)) {
  console.log(11,item);
}
for (let item of Object.getOwnPropertyNames(t1)) {
  console.log(22,item);
}
