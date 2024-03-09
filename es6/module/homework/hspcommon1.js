const cat = {
    name: "jack",
    age: 3,
    cry() {
        console.log(this.name, "彻底疯狂");
    }
}

const dog = {
    name: "tom",
    age: 5,
    hi() {
        console.log(this.name, "饿啊~");
    }
}

// 批量导出
export {
    cat,
    dog
}
