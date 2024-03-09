// 默认导出
export default {
    cat: {
        name: "jack",
        age: 3,
        cry() {
            console.log(this.name, "彻底疯狂");
        }
    },

    dog: {
        name: "tom",
        age: 5,
        hi() {
            console.log(this.name, "饿啊~");
        }
    }
}
