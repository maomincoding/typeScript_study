// function nameDecorator(
//   target: any,
//   key: string
// ):any {
//   const descriptor: PropertyDescriptor = {
//     writable:true
//   }
//   return descriptor
// }

// 修改的并不是实例上的 name, 而是原型中的name
function nameDecorator(
  target: any,
  key: string
):any {
  target[key] = 'lee';
}

class Test233 {
  @nameDecorator
  name = 'maomin';
}

const test233 = new Test233();
console.log((test233 as any).__proto__.name);
