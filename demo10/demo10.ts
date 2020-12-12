// getter、setter
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
  private static instance: Demo;
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