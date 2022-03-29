//抽象类当中包含抽象方法，一般没有任何的具体内容的实现，也可以包含实例方法，抽象类是不能被实例化，为了让子类进行实例化及实现内部的抽象方法

abstract class Animal2 {
	//抽象类当中包含抽象方法，一般没有任何的具体内容的实现，也可以包含实例方法，抽象类是不能被实例化，为了让子类进行实例化及实现内部的抽象方法
	abstract eat();
	// abstract eat(){} 报错，抽象方法不能有具体的实现
	//实例方法
	sayhi() {
		console.log("你好");
	}
}
// let a=new Animal2() 无法创建抽象类实例
class Dog2 extends Animal2 {
	eat() {
		console.log(100);
	}
}
