class P2 {
  private _name:string
  constructor(name:string) {
    this._name = name;
  }
  get name (){
    return this._name;
  }

}
const p2 = new P2("maomin");
// p2.name = 'xqm';  // 只能读取name, 不能修改
console.log(p2.name);

// 另一种方法
class P3 {
  public readonly name: string; // 也可以使用 readonly只读属性
  constructor(name: string) {
    this.name = name;
  }
}
const p3 = new P3("maomin");
// p3.name = 'xqm';
console.log(p3.name);