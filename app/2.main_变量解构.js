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

//------------对象解构赋值------------------------
console.log("-------------对象解构赋值-----------");

{
  // 直接找的是变量的名称 然后取得值赋予
  let { a, b } = { a: "123", b: "456" };
  console.log(a + "   " + b);

  let obj = { f: 1, t: 2 };
  let { t, f } = obj;
  console.log({ t, f });

  let { foos: baz } = { foos: "aaa", bar: "ccc" };
  // 先找到属性foo 然后将值aaa 赋值给baz   其实就是给baz 赋值
  console.log(baz); // aaa
  //console.log(foos); // 未定义的
}
{
  // 可以嵌套赋值  p 只是个匹配属性
  let obj = {
    p: ["Hello", { y: "World" }]
  };

  let {
    p: [x, { y }]
  } = obj;
  console.log(x); // "Hello"
  console.log(y); // "World"

  //--------给p 也赋值-------
  {
    let obj = {
      p: ["Hello", { y: "World" }]
    };

    let {
      p,
      p: [x, { y }]
    } = obj;
    x; // "Hello"
    y; // "World"
    p; // ["Hello", {y: "World"}]
  }

  //----------可以给对象的解构赋值默认值
  {
    var { x1 = 3 } = {};
    x1; // 3

    var { x1, y1 = 5 } = { x1: 1 };
    x1; // 1
    y1; // 5

    var { x1: y1 = 3 } = {};
    y1; // 3

    var { x1: y1 = 3 } = { x1: 5 };
    y1; // 5

    var { message: msg = "Something went wrong" } = {};
    msg; // "Something went wrong"
  }
  {
    // 如果要将一个已经声明的变量用于解构赋值，必须非常小心。
    // 错误的写法
    // let x;
    //  {x} = {x: 1};
    // SyntaxError: syntax error
    // 上面代码的写法会报错，因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。

    // 正确的写法
    let x;
    ({ x } = { x: 1 });
  }

  {
    // 数组是特殊的对象 ，可以使用对象解构数组
    let arr = [1, 2, 3];
    let { 0: first, [arr.length - 1]: last } = arr;
    console.log(first); // 1
    console.log(last); // 3
  }
}
//----------------字符串的解构赋值-----------------
{
  const [a, b, c, d, e] = "hello";
  console.log([a, b, c, d, e]);

  console.log("hello".length);
  //可以解构长度 len=5
  let { length: len } = "hello";
  console.log(len);
}

//----------数值和Boolean------------
// 如果等号的右边是数值和布尔类型 都会先转为对象，然后解构
let { toString: xx } = 123;
console.log(xx === Number.prototype.toString); // true

let { toString: s } = true;
console.log(s === Boolean.prototype.toString); // true

//--------------函数参数也可可以解构----
var maptest = [[1, 2], [3, 4]].map(([a, b]) => a + b); //[3,7]
console.log(maptest);
{
  function move({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
  }

  move({ x: 3, y: 8 }); // [3, 8]
  move({ x: 3 }); // [3, undefined]
  move({}); // [undefined, undefined]
  move(); // [0, 0]

  [1, undefined, 3].map((x = "yes") => x);
  // [ 1, 'yes', 3 ]
}

{
  //-------------圆括号的使用----------------
  // 不能使用圆括号的情况
  // 以下三种解构赋值不得使用圆括号。
  // （1）变量声明语句
  // // 全部报错
  // let [(a)] = [1];
  // let {x: (c)} = {};
  // let ({x: c}) = {};
  // let {(x: c)} = {};
  // let {(x): c} = {};
  // let { o: ({ p: p }) } = { o: { p: 2 } };
  // 上面 6 个语句都会报错，因为它们都是变量声明语句，模式不能使用圆括号。
  // （2）函数参数
  // 函数参数也属于变量声明，因此不能带有圆括号。
  // // 报错
  // function f([(z)]) { return z; }
  // // 报错
  // function f([z,(x)]) { return x; }
  // （3）赋值语句的模式
  // // 全部报错
  // ({ p: a }) = { p: 42 };
  // ([a]) = [5];
  // 上面代码将整个模式放在圆括号之中，导致报错。
  // // 报错
  // [({ p: a }), { x: c }] = [{}, {}];
  // 上面代码将一部分模式放在圆括号之中，导致报错。
  // 可以使用圆括号的情况
  // 可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。
  // [(b)] = [3]; // 正确
  // ({ p: (d) } = {}); // 正确
  // [(parseInt.prop)] = [3]; // 正确
  // 上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是p，而不是d；第三行语句与第一行语句的性质一致。

  //-----------------------变量 解构赋值的作用------------
  {
    //     用途
    // 变量的解构赋值用途很多。
    // （1）交换变量的值
    // let x = 1;
    // let y = 2;
    // [x, y] = [y, x];
    // 上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。
    // （2）从函数返回多个值
    // 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。
    // // 返回一个数组
    // function example() {
    //   return [1, 2, 3];
    // }
    // let [a, b, c] = example();
    // // 返回一个对象
    // function example() {
    //   return {
    //     foo: 1,
    //     bar: 2
    //   };
    // }
    // let { foo, bar } = example();
    // （3）函数参数的定义
    // 解构赋值可以方便地将一组参数与变量名对应起来。
    // // 参数是一组有次序的值
    // function f([x, y, z]) { ... }
    // f([1, 2, 3]);
    // // 参数是一组无次序的值
    // function f({x, y, z}) { ... }
    // f({z: 3, y: 2, x: 1});
    // （4）提取 JSON 数据
    // 解构赋值对提取 JSON 对象中的数据，尤其有用。
    // let jsonData = {
    //   id: 42,
    //   status: "OK",
    //   data: [867, 5309]
    // };
    // let { id, status, data: number } = jsonData;
    // console.log(id, status, number);
    // // 42, "OK", [867, 5309]
    // 上面代码可以快速提取 JSON 数据的值。
    // （5）函数参数的默认值
    // jQuery.ajax = function (url, {
    //   async = true,
    //   beforeSend = function () {},
    //   cache = true,
    //   complete = function () {},
    //   crossDomain = false,
    //   global = true,
    //   // ... more config
    // } = {}) {
    //   // ... do stuff
    // };
    // 指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。
    // （6）遍历 Map 结构
    // 任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。
    // const map = new Map();
    // map.set('first', 'hello');
    // map.set('second', 'world');
    // for (let [key, value] of map) {
    //   console.log(key + " is " + value);
    // }
    // // first is hello
    // // second is world
    // 如果只想获取键名，或者只想获取键值，可以写成下面这样。
    // // 获取键名
    // for (let [key] of map) {
    //   // ...
    // }
    // // 获取键值
    // for (let [,value] of map) {
    //   // ...
    // }
    // （7）输入模块的指定方法
    // 加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
    // const { SourceMapConsumer, SourceNode } = require("source-map");
  }
}
