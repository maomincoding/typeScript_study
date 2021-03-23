// 先执行类中的代码，然后再执行类装饰器内中的内容

function mainDecorator() {
  return function <T extends new (...args:any []) => any >(constructor: T) {
  // 进行拓展
  return class extends constructor {
    name = 'xqm';
    getName(){
      return this.name;
    }
  }
}
}

const Test1 = mainDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
      console.log('1');
    }
  }
);


const test1 = new Test1('maomin');
console.log(test1.getName());
// 打印出的内容
// 1
// xqm