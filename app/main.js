console.log("变量的解构赋值");
// -----数组解构赋值
let [a, b, c] = ["a", 2, [1, 2, 3]];
console.log([a, b, c]);

let [x, y, ...head] = ["a"];
console.log([x, y, ...head]);
