export default {
    dog: {
        name: "tom",
        age: 3,
        say() {
            console.log("hello, ", this.name);
        }
    }
}