'use strict';
// function foo() {
//   console.log(a);
// }
//
// function bar() {
//   var a = 3;
//   foo();
// }
//
// // let a = 4;
//
// bar();


function queryURLParameters(){
  let regx = /([^&=?]+)=([^&=?]+)/g;
  this.replace(regx, (...arg)=>{
    console.log(arg);
  })
}

// queryURLParameters('https://movie.douban.com/subject/3075983?wd=123&kk=hhh');


String.prototype.queryURLParameters = queryURLParameters;

let str = 'https://movie.douban.com/subject/3075983?wd=123&kk=hhh';
str.queryURLParameters();


a = 10;
if (1) {
  console.log(a);
  // let a = 2;
  // console.log(a);
}
