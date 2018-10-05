
//for of 可以遍历字符串
var a='lang'
for (item of a){

   console.log(item);
}

//includes 替代 indexOf判断是否存在
let aa = 'abcd';
console.log(aa.includes('bc'));

//模板字符串
let str = `${aa} is a string ${a}`;
console.log(str);

//padStart padEnd 填充字符串
console.log(aa.padStart(10, '*'));
console.log(aa.padEnd(10, '#$!@'));

//Number.isNaN 对比 window.isNaN 这个只看是不是NaN本身  因为NaN自身不自等
console.log(Number.isNaN(NaN));
console.log(isNaN(NaN));
console.log(Number.isNaN('abc'));
console.log(isNaN('abc'));
console.log(NaN == NaN);
