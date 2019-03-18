console.log("变量的解构赋值");
// -----数组解构赋值
let [a, b, c] = ["a", 2, [1, 2, 3]];
console.log([a, b, c]);

let [x, y, ...head] = ["a"];
console.log([x, y, ...head]);
// 部分解构也是可以成功的，未匹配到的就是undefined
// 一边是数组一边不是 那么报错-- 不是可遍历的解构会报错iterator
let [foo] = [123];
//let [foo] = 1;
//let [foo] = false;
//let [foo] = NaN;
//let [foo] = undefined;
//let [foo] = null;
//let [foo] = {};

console.log([foo]);

//Set 也可以解构赋值 也可以设置默认值
let [z, v, n = 2] = new Set(["a", "b"]);
console.log([z, v, n]);
