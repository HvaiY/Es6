// ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。

// 首先，安装 ESLint。

// $ npm i -g eslint
// 然后，安装 Airbnb 语法规则，以及 import、a11y、react 插件。

// $ npm i -g eslint-config-airbnb
// $ npm i -g eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
// 最后，在项目的根目录下新建一个.eslintrc文件，配置 ESLint。

// {
//   "extends": "eslint-config-airbnb"
// }
// 现在就可以检查，当前项目的代码是否符合预设的规则

// ---------------------------------分割线--------------------------------------------------

console.log("--------------内部函数-----------------------");
//内部函数
function parentFunc() {
  var a = 10;
  function nestedFunc() {
    var b = 20;
    return a + b;
  }
  return nestedFunc();
}

console.log(parentFunc());

console.log("------------------闭包-------------------");
// 闭包 作用域的调用
function makeAdder(a) {
  return function (b) {
    return a + b;
  };
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
console.log(add5(6));
console.log(add20(7));
window.add20 = add20;

console.log("-------------------------------------");
