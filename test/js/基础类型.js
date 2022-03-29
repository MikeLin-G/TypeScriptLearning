//类型注解，一种轻量级的为函数或变量添加约束
let isShow = false;
let num = [1, 2, 3, 4]; //支持十进制，八进制，十六进制和二进制
let num2 = [21, 31, 21]; //数组泛型
let x; //联合申明,类型及数据个数一开始就已经限定了
x = [11, "11"];
var Color;
(function (Color) {
    Color[Color["purple"] = 10] = "purple";
    Color[Color["green"] = 11] = "green";
})(Color || (Color = {})); //枚举（适用于一些已知的元素，比如字典）
let y = Color.purple;
console.log(Color[11]);
let z = 10;
function voidtest() {
    //void只接受null和undefined，此处表示该函数没有返回值
    console.log(200000);
}
let p = 20; //联合类型符号|
//类型断言方式一 （可以解决多类型的报错）
let xxx = "ssss2";
let nlength = xxx.length;
//类型断言方式二
let n2length = xxx.length; //jsx中只能使用此方法
//ts类型推断，在没有明确指定一个类型的时候会进行类型推断
let ts = 100;
