//类型注解，一种轻量级的为函数或变量添加约束
let isShow: boolean = false;
let num: number[] = [1, 2, 3, 4]; //支持十进制，八进制，十六进制和二进制
let num2: Array<number> = [21, 31, 21]; //数组泛型
let x: [number, string]; //联合申明,类型及数据个数一开始就已经限定了
x = [11, "11"];
enum Color {
	purple = 10,
	green,
} //枚举（适用于一些已知的元素，比如字典）
let y: Color = Color.purple;
console.log(Color[11]);
let z: any = 10;
function voidtest(): void {
	//void只接受null和undefined，此处表示该函数没有返回值
	console.log(200000);
}
let p: number | string | boolean = 20; //联合类型符号|
//类型断言方式一 （可以解决多类型的报错）
let xxx: any = "ssss2";
let nlength: number = (<string>xxx).length;
//类型断言方式二
let n2length: number = (xxx as string).length; //jsx中只能使用此方法

//ts类型推断，在没有明确指定一个类型的时候会进行类型推断
let ts = 100;
