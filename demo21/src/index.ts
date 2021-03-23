// 类的装饰器
// 装饰器本身是一个函数
// 装饰器通过 @ 符号使用
// 当类定义时，类的装饰器马上生效
// 类装饰器接受的参数是构造函数constructor

function testDecorator(constructor:any) {
   console.log("maomin");
  // constructor.prototype.getName = () =>{
  //   console.log('maomin')
  // };
}

function testDecorator1(constructor: any) {
  console.log("maomin1");
  // constructor.prototype.getName = () => {
  //   console.log("maomin1");
  // };
}

@testDecorator
@testDecorator1

class Test {}

const test = new Test();
//(test as any).getName();