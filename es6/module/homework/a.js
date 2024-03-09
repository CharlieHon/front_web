/**
 * a.jd有一个dog对象(含有hi方法)，b.js有一个dag对象(含有say()方法)，使用模块化编程思路，在a.js中能使用到不同的dog对象
 */
import m from "./b"

const dog = {
    name: "jack",
    age:4,
    hi() {
        console.log("hi, ", this.name);
    }
}

dog.hi();
m.dog.say();
