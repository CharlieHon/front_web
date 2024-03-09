// 在定义sum函数时，就直接导出
// 如果在定义时就导出的数据，在导入时要保持名称一致！
export const sum = function (a, b) {
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
