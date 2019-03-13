# [ES6入门](http://es6.ruanyifeng.com/)

-  [Redux教程](https://redux.js.org/introduction/getting-started)
-  [NetCore2.1认证](http://jasonwatmore.com/post/2018/06/26/aspnet-core-21-simple-api-for-authentication-registration-and-user-management)
-  [React](http://www.runoob.com/react/react-tutorial.html)
-  [Webpack基础](https://webpack.js.org/concepts)
  #### webpack 初始化 
- npm 安装略
- 全局安装webpack webpack-cli
`npm i -g webpack npm i -g webpack-cli`
- 项目内安装
`npm init`
`npm i --save-dev webpack npm i webpack-cli`
- 创建webpack.config.js 文件配置自动打包及构建本地服务
- package.json 增加启动脚本
``scripts": {
      "start": "webpack"  
 } ``
`npm install --save-dev webpack-dev-server`
- Loaders Babel 安装
`npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react`
- 安装 react react-dom
  `npm install --save react react-dom` 
#### 启动 ：`npm start` `npm run server`