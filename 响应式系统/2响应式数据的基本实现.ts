/*
 * @Author: 彭泽 234277894@qq.com
 * @Date: 2022-05-24 09:29:20
 * @LastEditors: 彭泽 234277894@qq.com
 * @LastEditTime: 2022-06-05 12:11:49
 * @FilePath: /web/vue3-study/响应式系统/2响应式数据的基本实现.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */



// 存储副作用函数的桶
const bucket = new Set<Function>();

// 原始数据
const data = { text: "hello world" };

// 对原始数据的代理
const obj = new Proxy(data, {
    //拦截读取操作
  get<T extends typeof data, K extends keyof T>(target: T, key: K): T[K] {
    // 将副作用函数存储 effect 添加到存储副作用函数的桶中    
    console.log(2)
    bucket.add(effect)
  
    // 返回属性值
    return target[key] 
  },
  //拦截设置操作
  set<T extends typeof data, K extends keyof T>(target: T,key: K,newVal: T[K]):  boolean {
    //   设置属性值
    target[key] = newVal;
    // 把副作用函数从通知取出并执行
    bucket.forEach( fun => fun())
    console.log(3)
    // 返回true 代表设置操作成功
    return true
  }
});

// 副作用函数
function effect() { 
    console.log(1)
    document.body.innerText = obj.text
   
}
// 执行副作用函数， 触发读取
effect()

// 1 秒后修改响应式数据
setTimeout( () => {
    obj.text = 'hello vue3'
},2000)