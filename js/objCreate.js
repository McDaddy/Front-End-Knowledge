let a = {};

a.create = function(obj){
  let temp = function(){};
  temp.prototype = obj;
  let ret = new temp();
  return ret;
}

let test = a.create({a:1});
console.log(test.a);
