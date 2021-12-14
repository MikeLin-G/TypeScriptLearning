let isShow:boolean=false;
let num:number[]=[1,2,3,4]
let num2:Array<number>=[21,31,21] //数组泛型
let x:[number,string] //联合申明
x=[11,'11']
enum Color{purple=10,green} //枚举
let y:Color=Color.purple
console.log(y);
let z:any=10
function voidtest():void{ //void只接受null和undefined
  console.log(200000);
}
let p:number|string|boolean=20 //联合类型符号|
//类型断言方式一
let xxx:any='ssss2'
let nlength:number=(<string>xxx).length 
//类型断言方式二
let n2length:number=(xxx as string).length //jsx中只能使用此方法