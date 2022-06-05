/*
 * @Author: 彭泽 234277894@qq.com
 * @Date: 2022-05-24 09:49:55
 * @LastEditors: 彭泽 234277894@qq.com
 * @LastEditTime: 2022-05-31 09:40:43
 * @FilePath: /web/vue3-study/响应式系统/2.1响应式的前置只是点代理和反射.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const target = {
    id: "targe"
}

const handler =  {
 
}

// 代理是使用 Proxy 构造函数创建的，   构造函数有两个必传对象  targe 目标对象  handler 处理程序对象 

let proxy=  new Proxy(target,handler)



// 状态标记
// const o  = {}
// try {
//     Object.defineProperty(o,'foo', 'bar' )
//     console.log('sussess');
    
// } catch (error) {
//     console.log(error)
// }


// 可撤销代理
const o  = {}
if(Reflect.defineProperty(o,'foo', {value: 'bar'})){
    console.log('sussess');
}else{
    console.log('fail');
}