"use strict";
// 3.1、函数的定义
// ts 中定义函数的方法
// 函数声明法
function run() {
    return 'run';
}
// 错误写法
// function run():string {
//     return 123
// }
// 匿名函数
var fun2 = function () {
    return 12;
};
fun2(); // 调用方法
// ts 中定义方法传参
// function getInfo(name:string, age:number):string {
//     return `${name} --- ${age}`
// }
// 没有返回值的方法
// function run():void{
//     console.log('run')
// }
// run()
// 3.2 方法可选参数
// es5 里面方法的实参和形参可以不一样，但是在 ts 中必须一样，如果不一样就需要配置可选参数
// var getInfo = function(name:string, age?:number):string {
//     if (age) {
//         return `${name} --- ${age}`
//     } else {
//         return `${name} --- 年龄保密`
//     }
// }
// alert(getInfo('aa', 15))
// 注意：可选参数必须配置到参数的最后面
// 错误写法：
// var getInfo = function(name?:string, age:number):string {
//     if (age) {
//         return `${name} --- ${age}`
//     } else {
//         return `${name} --- 年龄保密`
//     }
// }
// alert(getInfo('aa', 15))
// 3.3 默认参数 可选参数
// es5 里面没法设置默认参数， es6 和 ts 中都可以设置默认参数
// var getInfo = function(name:string, age:number = 20):string {
//     if (age) {
//         return `${name} --- ${age}`
//     } else {
//         return `${name} --- 年龄保密`
//     }
// }
// alert(getInfo('aa'))
// 3.4 剩余参数
// 三点运算符，接收新参传过来的值
// function sum (...result:number[]):number {
//     var sum = 0
//     for (var i = 0; i < result.length; i++) {
//         sum += result[i]
//     }
//     return sum
// }
// alert(sum(1, 2, 3, 7))
// function sum (a:number, b:number, ...result:number[]):number {
//     var sum = a+b
//     for (var i = 0; i < result.length; i++) {
//         sum += result[i]
//     }
//     return sum
// }
// alert(sum(1, 2, 3, 7))
// 3.5 ts 函数重载
// Java 中方法的重载，重载指的是两个或者两个以上的同名函数，但他们的参数不一样，这是会出现函数重载的情况。
// typeScript 中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的母的
// ts 为了兼容 es5 以及 es6 重载的写法和 java 中有区别
// es 5中出现同名方法，下面的方法会替换上面的方法
// function css(config) {
// }
// function css(config, value) {
// }
// ts 中的重载
// function getInfo(name:string):string;
// function getInfo(age:number):number;
// function getInfo(str:any):any {
//     if (typeof str === 'string') {
//         return str
//     } else {
//         return str
//     }
// }
// alert(getInfo(123))
// 3.6 箭头函数 es6 
// setTimeout(function() {
//     alert('run')
// }, 1000)
//  箭头函数的 this 指向上下文
setTimeout(function () {
    alert('run');
}, 1000);
