var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//接口
//这是一个需要传入对象参数的函数
function printLabel(obj) {
    console.log(obj.name);
}
var obj2 = { sex: 'female', name: 'ting' };
printLabel(obj2);
function printLabel2(obj) {
    console.log(obj.name);
}
printLabel2(obj2);
function Building(obj) {
    var building = { price: "10000", area: 100 }; //默认值在里面给
    if (obj.price) {
        building.price = obj.price;
    }
    ;
    if (obj.width) {
        building.area = obj.width * obj.width;
    }
    return building;
}
console.log(Building({ width: 100 }));
function getFriends(obj) {
    var age = obj.name;
    var hobby = obj.sex;
    age = 10;
    return [age, hobby];
}
console.log(getFriends({ name: 21212 }));
var xg = { name: 222, sex: 'nan' }; //你可以通过赋值一个对象字面量来构造一个onlyYou。 赋值后， x和y再也不能被改变了。
//xg.name=333; //error
//TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
var arrt1 = [1, 2, 3, 4];
var arrt2 = arrt1;
arrt1 = arrt2;
//最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。
function getFriends2(obj) {
    var age = obj.name;
    var hobby = obj.sex;
    return [age, hobby];
}
//let something=getFriends2({name:555,hoppy:'2222'}) //这里会报错因为接口里并没有hoppy
//可以使用类型声明来避免这个报错
var something2 = getFriends2({ name: 555, hoppy: '2222' });
//对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子
var fnSearch;
fnSearch = function (n1, s2) {
    console.log(n1, s2);
    return true;
};
fnSearch('zz', 'ss');
var arr5 = ['11', '22'];
//TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myArray = ["Alice", "Bob"];
var Time = /** @class */ (function () {
    function Time(h, m) {
    }
    Time.prototype.getTime = function (time) {
        this.time = time;
    };
    return Time;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    } //静态部分，入参符合接口
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var square = {}; //变量使用接口
square.color = "blue";
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
