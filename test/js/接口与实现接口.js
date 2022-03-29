//接口，用接口来定义对象的类型，接口是对象的状态和行为的抽象
//这是一个需要传入对象参数的函数
function printLabel(obj) {
    console.log(obj.name);
}
let obj2 = { sex: "female", name: "ting" };
printLabel(obj2);
function printLabel2(obj) {
    console.log(obj.name);
}
printLabel2(obj2);
function Building(obj) {
    let building = { price: "10000", area: 100 }; //默认值在里面给
    if (obj.price) {
        building.price = obj.price;
    }
    if (obj.width) {
        building.area = obj.width * obj.width;
    }
    return building;
}
console.log(Building({ width: 100 }));
function getFriends(obj) {
    let age = obj.name;
    let hobby = obj.sex;
    age = 10;
    return [age, hobby];
}
console.log(getFriends({ name: 21212 }));
let xg = { name: 222, sex: "nan" }; //你可以通过赋值一个对象字面量来构造一个onlyYou。 赋值后， x和y再也不能被改变了。
//xg.name=333; //error
//TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
let arrt1 = [1, 2, 3, 4];
let arrt2 = arrt1;
arrt1 = arrt2;
//最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。
function getFriends2(obj) {
    let age = obj.name;
    let hobby = obj.sex;
    return [age, hobby];
}
//let something=getFriends2({name:555,hoppy:'2222'}) //这里会报错因为接口里并没有hoppy
//可以使用类型声明来避免这个报错
let something2 = getFriends2({ name: 555, hoppy: "2222" });
//对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子
let fnSearch;
fnSearch = function (n1, s2) {
    console.log(n1, s2);
    return true;
};
fnSearch("zz", "ss");
let arr5 = ["11", "22"];
//TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
class Animal {
}
class Dog extends Animal {
}
let myArray = ["Alice", "Bob"];
class Time {
    constructor(h, m) { }
    getTime(time) {
        this.time = time;
    }
}
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock {
    constructor(h, m) { } //静态部分，入参符合接口
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
let square = {}; //变量使用接口
square.color = "blue";
square.sideLength = 10;
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
class four {
}
//接口和接口之间叫继承，类和接口之间叫实现（implements）
//类可以理解为模板，可以通过模板来进行实例化
//类的构造函数中可以对只读属性进行修改
//如果构造函数中没用任何参数，但类中的成员已经用readonly修饰了
