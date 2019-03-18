console.log("----------Test--------------");

var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function() {
    console.log("value=" + i);
  };
}
a[5]();
// 使用var 定义的变量i是全局有效的，因此啊a[i]也是一个全局的，循环结束i最后等于10  最后赋值的都是一样 打印的都是10

// 使用 let 作用范围是块级有效的
for (let i = 0; i < 10; i++) {
  a[i] = function() {
    console.log("value=" + i);
  };
}
a[5](); //value=5

// 然而在for循环中 循环变量与函数内变量不在同一个作用域，有各自单独的作用域
for (let i = 0; i < 3; i++) {
  console.log(i); // 第一个无法访问到，变量存在了其实是var 未给值那么输出undefined，循环一次之后let i 重新变量定义。因此后面可以打印 总打印5次hello
  let i = "hello";
  console.log(i);
}
console.log("----------Test--------------");
//

{
  tmp = "abc"; //
  console.log(tmp); // abc
  let tmp;
  console.log(tmp); // 未赋值打印undefine,let变量定义之前的赋值在变量定义后可以使用
}

if (true) {
  // TDZ开始
  tmp = "abc"; //
  console.log(tmp); // abc

  let tmp; // TDZ结束  var tmp  那么都是打印abc，自动提升变量，但是是tmp 那么tmp 未赋值无法使用，定义之前的赋值有效
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}

// 变量自动提升
function bar(x = y, y = 2) {
  return [x, y];
}
console.log(bar());

function bar(x = 2, y = x) {
  return [x, y];
}
console.log(bar());

{
  var x = 1;
  let x = 2;
  var x = 3;
  // let x = 5; // let 在同一个块级不允许申明同一个变量
  console.log(x);
}

// function fun(args) {
//   let args;  // 报错 块级作用域同一个变量
// }

{
  var tmp = new Date();

  function f() {
    console.log(tmp);
    if (false) {
      var tmp = "hello world";
    }
  }
  f();
}

// ------------------const--------------------------

const 常量 = "常量值";
console.log(常量);
// const 申明的常量可以指向一个对象，其实指向的是对象的地址  对象属性可以改变
{
  const a = [];
  a.push("hello");
  a.push("world");
  a.length = 3;
  console.log(a);

  // 常量说是不可改变仅仅是指向的地址不可改变，但是属性值是可以改变，想让常量测试冻结可以使用Object.freeze({});
  const b = Object.freeze({});
  //   b.prop = "111"; // 报错
  console.log(b);
  //彻底冻结的方法 。递归冻结常量对象及属性
  var constantize = obj => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, i) => {
      if (typeof obj[key] === "object") {
        constantize(obj[key]);
      }
    });
  };
}
console.log("-----------------------aaaaaaaa---------------------");
{
  //变量的六种申明方式
  // 顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。ES5 之中，顶层对象的属性与全局变量是等价的。
  // window.a = 1;
  //   ES6 为了改变这一点，一方面规定，为了保持兼容性，
  //   var命令和function命令声明的全局变量，依旧是顶层对象的属性；
  //   另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
  //   也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。
  a = 2;
  console.log(a);
}
