//ts中可以使用getters和setters来截取对对象成员的访问
class register {
    constructor(name) {
        this.name = name;
    }
    get test() {
        return "dasd";
    }
    set test(val) {
        console.log("dsfsf");
        this.name = val;
    }
}
let test1 = new register(212);
