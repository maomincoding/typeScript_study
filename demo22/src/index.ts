// 普通方法，target 对应的是类的 prototype
// 静态方法，target 对应的是类的构造函数


function getNameDecrator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = true;
  console.log(target);
}

class Test2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecrator
  getName() {
     return this.name;
  }
}

const test2 = new Test2('maomin');
test2.getName = () =>{
  return '123'
};
console.log(test2.getName());
// function getNameDecrator1(target:any, key:string) {
//   console.log(target);
// }

// class Test21 {
//   name:string;
//   constructor(name:string){
//     this.name = name;
//   }
//   @getNameDecrator1
//   static getName(){
//      return '123';
//   }
// }

// const test21 = new Test21('maomin');