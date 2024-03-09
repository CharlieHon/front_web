// 定义对象，变量，函数
const sum = function (a, b) {
    return parseInt(a) + parseInt(b);
}

const sub = function (a, b) {
    return parseInt(a) - parseInt(b);
}

let name = "charlie";

const PI = 3.1415;

const monster = {
    name: "牛魔王",
    age: 612,
    hi() {
        console.log("hi, ", this.name);
    }
}

/* 导出
1. module.exports 导出模块
2. 把需要导出的数据，写入到 {} 中即可
3. 可以全部导出，也可以只导出部分
4. 可以理解为以对象的形式导出。导入 const m = require("./require.js");
    通过 m.xxx 使用
5. 如果属性名和函数/变量/对象/常量名...相同，可以简写
6. 有些前端，简写 module.exports = {} 成 exports = {}
 */
module.exports = {
    sum,   // 属性名和对象名相同，则可以简写
    sub,
    myname: name,
    PI
}
// module.exports = {
//     sum: sum,   // 属性名：属性值
//     sub: sub,
//     myname: name,
//     PI: PI
// }
