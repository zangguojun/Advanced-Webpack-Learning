// import './index.css'
// import './less.less'
// import React from 'react'
// import ReactDOM from 'react-dom'

const promise = new Promise((resolve, reject) => {
  resolve('OK');
});
console.log(promise);
/**
 *
 * @param {*} target ：装饰的目标
 * @param {*} key ：装饰的key，PI
 * @param {*} descriptor ：属性描述
 */
function readonly(target, key, descriptor) {
  descriptor.writeable = false;
}
class Person {
  @readonly PI = 3.14
}
const p = new Person();
p.PI = 3.15;
console.log(p.PI);

// ReactDOM.render(<h1>hello</h1>,document.getElementById('root'))

const text = require('../static/text.txt');

console.log('hello');
console.log(text.default);

const logo = require('./images/pic.jpg');
// import logo from './images/pic.jpg'
const img = new Image();
/**
 * esModule: true，需要使用logo.default
 * 使用require时，必须这样，使用import需要
 */
img.src = logo;
document.body.appendChild(img);
