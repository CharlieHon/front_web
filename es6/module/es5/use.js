/* 导入模块
1. 在es5中，通过 require 导入对应的.js模块中的数据/对象
2. 使用的时候，通过 m.属性名 就可以使用
3. 如果导入时，不需要所有的数据/对象，可以导入部分数据
 */
const m = require("./function.js");    // 结尾带不带 .js 后缀都可以

const {sub} = require("./function");    // 只导入 sub

// 使用
console.log(m.sum(1, 9));
console.log(m.sub(1, 9));
console.log(m.myname);
console.log(sub(6, 8));