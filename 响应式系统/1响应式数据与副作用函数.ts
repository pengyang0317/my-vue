/*
 * @Author: 彭泽 234277894@qq.com
 * @Date: 2022-05-24 09:14:19
 * @LastEditors: 彭泽 234277894@qq.com
 * @LastEditTime: 2022-05-24 09:24:48
 * @FilePath: /web/vue3-study/响应式系统/1.1响应式数据与副作用函数.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

 

/**
 * 一个函数的执行， 直接或者间接的影响其它函数的执行 ， 我们就说这个函数产生了副作用
 */

// 1.1 副作用函数事例一
// function effect() {
//     document.body.innerHTML = "hello vue3"
// }


// 1.2 副作用函数事例二

// var a = 1
// function effect() {
//     a = 2
// }

