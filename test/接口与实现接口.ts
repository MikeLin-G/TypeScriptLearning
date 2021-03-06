//接口，用接口来定义对象的类型，接口是对象的状态和行为的抽象
//这是一个需要传入对象参数的函数
function printLabel(obj: { name: string }) {
	console.log(obj.name);
}
let obj2 = { sex: "female", name: "ting" };
printLabel(obj2);

//使用接口来定义上面的函数
interface custimizeValue {
	name: string;
}
function printLabel2(obj: custimizeValue) {
	console.log(obj.name);
}
printLabel2(obj2);

//可选属性
//接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。
//带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。
//可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。

interface optionBags {
	price?: string;
	width?: number;
	//height:number, //如果不使用缺省符号且不在函数内传值，那么编译时会报错
}
function Building(obj: optionBags): { price: string; area: number } {
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

//readonly只读属性 使用该属性后，就不能对该属性进行赋值操作了，变量readonly，属性const
interface onlyYou {
	readonly name?: number;
	readonly sex?: string;
}

function getFriends(obj: onlyYou): [age: number, hobby: string] {
	let age = obj.name;
	let hobby = obj.sex;
	age = 10;
	return [age, hobby];
}
console.log(getFriends({ name: 21212 }));

let xg: onlyYou = { name: 222, sex: "nan" }; //你可以通过赋值一个对象字面量来构造一个onlyYou。 赋值后， x和y再也不能被改变了。
//xg.name=333; //error

//TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：

let arrt1: number[] = [1, 2, 3, 4];
let arrt2: ReadonlyArray<number> = arrt1;
arrt1 = arrt2 as number[];
//最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。

function getFriends2(obj: onlyYou): [age: number, hobby: string] {
	let age = obj.name;
	let hobby = obj.sex;
	return [age, hobby];
}
//let something=getFriends2({name:555,hoppy:'2222'}) //这里会报错因为接口里并没有hoppy
//可以使用类型声明来避免这个报错

let something2 = getFriends2({ name: 555, hoppy: "2222" } as onlyYou);

//接口除了描述普通类型外，还可以用来描述函数类型
interface seachFn {
	(name: string, sex: string): boolean;
}

//对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子
let fnSearch: seachFn;
fnSearch = function (n1: string, s2: string): boolean {
	console.log(n1, s2);
	return true;
};
fnSearch("zz", "ss");
//TODO传参string结果报错Argument of type 'string' is not assignable to parameter of type '"string"'. //已解决，给类型打了双引号。。。

//与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap["daniel"]。 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。

interface oneArray {
	[index: number]: string; //表示使用数字索引最后会返回字符串类型
}
let arr5: oneArray = ["11", "22"];

//TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。

class Animal {
	name: string;
}
class Dog extends Animal {
	breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
	// [x: number]: Animal;  //但是数字索引的返回值必须是字符串索引返回值类型的子类型。
	[x: string]: Dog;
}

interface numberDictionary {
	[x: string]: number;
	length: number;
	//height:string,  //err(返回值不匹配number) 字符串索引签名能够很好的描述dictionary模式，并且它们也会确保所有属性与其返回值类型相匹配。
}

//最后，你可以将索引签名设置为只读，这样就防止了给索引赋值：

interface ReadonlyStringArray {
	readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
//myArray[2] = "Mallory"; // error!

//实现接口 类的类型可以通过接口来实现
//写一个接口，并用类去实现它implement

interface doit {
	time: Date;
	getTime(time: Date); //函数的调用签名
}
class Time implements doit {
	time: Date;
	getTime(time: Date) {
		this.time = time;
	}
	constructor(h: number, m: number) {}
}

//接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。

interface ClockConstructor {
	new (hour: number, minute: number);
}

// class Clock implements ClockConstructor {
//   currentTime: Date;
//   constructor(hour: number, minute: number) { }
// }
//当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型。 你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误：
//这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。
//因此，我们应该直接操作类的静态部分(constructor)。

interface ClockConstructor {
	new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
	tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
	return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
	constructor(h: number, m: number) {}
	tick() {
		console.log("beep beep");
	}
}
class AnalogClock implements ClockInterface {
	constructor(h: number, m: number) {} //静态部分，入参符合接口
	tick() {
		console.log("tick tock");
	}
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

//继承接口

//接口可以相互继承
interface Shape {
	color: string;
}

interface Square extends Shape {
	sideLength: number;
}

let square = <Square>{}; //变量使用接口
square.color = "blue";
square.sideLength = 10;

interface Counter {
	(start: number): string;
	interval: number;
	reset(): void;
}

function getCounter(): Counter {
	let counter = <Counter>function (start: number) {};
	counter.interval = 123;
	counter.reset = function () {};
	return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

interface one {}
interface two {}
interface three extends one, two {}
class four implements three {}
//接口和接口之间叫继承，类和接口之间叫实现（implements）

//类可以理解为模板，可以通过模板来进行实例化
//类的构造函数中可以对只读属性进行修改
//如果构造函数中没用任何参数，但类中的成员已经用readonly修饰了
