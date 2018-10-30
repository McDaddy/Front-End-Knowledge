// value: 设置属性的值
// writable: 值是否可以重写。true | false
// enumerable: 目标属性是否可以被枚举。true | false
// configurable: 目标属性是否可以被删除或是否可以再次修改特性 true | false

let a = {};

Object.defineProperty(a, 'val', {
    value: 'hello',
    enumerable: true,
    configurable: true
});

console.log(a);

let b = {};

Object.defineProperty(b, 'val', {
    value: 'world',
    // configurable: true,
    // writable: false,
    // enumerable: false
});
//enumerable/configurable/writable 默认值都是false。 调用了这个方法后即使不设置也会变成false
console.log(b);
delete b.val;
console.log(b);
b.val = 4;
console.log(1,b);
console.log(2,Object.keys(b));

