const babelCore = require('@babel/core');
/**
 * babel-loader 作用是调用babelCore
 * babelCore只是提供一个工厂管理功能
 * 把源代码转换成抽象语法树，进行遍历和生成
 * 它并不知道如何转换语法，所以需要引用preset-env
 * @param {*} source: 源文件 let sum = (a, b) => a + b
 * 1、先去把ES6转成ES6的语法数            --- babelCore
 * 2、调用预设preset-env，把ES6语法树转成ES5语法树 --- preset-env
 * 3、在把ES5语法树重新生成ES5代码        --- babelCore
 */
function loader(source) {

}