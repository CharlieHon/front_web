// 演示默认导出
// 如果是默认导出，在导入时使用的语法是 import m from "./common3"
// 可以理解为，把 {} 当作一个对象导出，使用方式就是 m.xxx
export default {
    sum(a, b) {
        return parseInt(a) + parseInt(b);
    },
    sub(a, b) {
        return parseInt(a) - parseInt(b);
    }
}
