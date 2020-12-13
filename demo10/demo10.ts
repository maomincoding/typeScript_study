// getter、setter
// 如果在一个类中，我们只想读取某一个属性，而不能直接修改它。可以定义这个属性为私有属性，并且使用getter访问这个私有属性即可。
// 但是如果你想直接修改这个私有属性也有办法，直接在类中定义setter。
class P1 {
  constructor(private _name:string) {}
  get name(){ 
    return this._name + 'xqm';
  }
  set name(name:string){
    const realname = name.split(' ')[0];
    this._name = realname;
  }

}
const p1 = new P1('maomin');
console.log(p1.name);
p1.name = 'hello world';
console.log(p1.name);

// 单例模式

class Demo {
  private static instance: Demo; //定义一个私有属性，存取实例化Demo类
  private constructor(public name: string) {}
  // static 把方法直接挂载到类上，而不是类的实例上面
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo("maomin");
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance(); 
const demo2 = Demo.getInstance();
// demo1与demo2在理论上相等的

console.log(demo1.name); //maomin
console.log(demo2.name); //maomin