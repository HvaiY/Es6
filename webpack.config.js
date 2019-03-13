const path = require('path');
var config={
     mode:'development',//也可以是production 
      //__dirname 是一个node.js的全局变量 ，表示当前的脚本执行所在目录
     entry:  "./app/main.js",//已多次提及的唯一入口文件
      output: {
        path:__dirname+"/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
      },
      devServer: {
          contentBase:__dirname+'/public/',//本地服务器所加载的页面所在的目录
          historyApiFallback: true,//不跳转
          inline: true,//实时刷新
          host: '127.0.0.1',
          port:9001,
        } ,
        module: {
          rules: [
              {
                  test: /(\.jsx|\.js)$/, //匹配规则
                  use: {
                      loader: "babel-loader",
                      options: {
                          presets: [
                              "env", "react"  // 配置允许使用 ES6 和JSX 语法 (可以编译语法）
                          ]
                      }
                  },
  
                  exclude: /node_modules/  // 屏蔽模块中的文件
              }
          ]
      }
    }

module.exports = (env, argv) => {
  // mode:'development',//也可以是production 
    //在webpack 中约定大于配置 ，约定 默认的打包入口路径是 src->index.js
   // devtool: 'eval-source-map', // 仅仅在开发阶段使用它  作用：生成 Sorece-Map 方便调试； cheap-module-eval-source-map方法构建速度更快，但是不利于调试，推荐在大型项目考虑时间成本时使用。
    if (argv.mode === 'development') {
      config.devtool = 'eval-source-map';
    }
    if (argv.mode === 'production') {
      //...
    }
    return config;
  };