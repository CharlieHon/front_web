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

/* es6导出模块/数据
1. export 可以全部导出，
2. 也可以部分导出
 */
export {
    sum,
    sub,
    name
}