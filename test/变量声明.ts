//可以在ts中使用解构赋值
let input=[1,2];
let [first,second]=input;
//解构用于已经声明的变量会更好
[second,first]=[first,second];
//作用于函数参数
function logNumFn([first,second]:[number,number]){
  console.log(first,second);
}
logNumFn(input);

//用扩展运算符...来创建剩余变量
let [third,...forth]=[1,2,3,4,5];
let [f]=[1,2,3] ;//f=1
let [,s,,,fi]=[1,2,3,4,5];//s=2,fi=5

//对象解构
let o={
  a:2,
  b:'322',
  c:44
}
let {a:n,b:m}=o; //把a,b的值解构出来并重新赋值给你n，m（a作为n,b作为m）
({n,m}={n:22,m:"333"}) //注意，我们需要用括号将它括起来，因为Javascript通常会将以 { 起始的语句解析为一个块。
//对象中使用...来创建剩余变量
let {a,...left}=o
console.log(left.c+left.b.length);
//对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 自身的可枚举属性。 大体上是说当你展开一个对象实例时，你会丢失其方法：

//默认值可以让你在属性为 undefined 时使用缺省值：

function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject;
}
//现在，即使 b 为 undefined ， keepWholeObject 函数的变量 wholeObject 的属性 a 和 b 都会有值。