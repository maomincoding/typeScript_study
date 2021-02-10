// 联合类型

interface Bird {
  fly:boolean;
  sing:() => {

  };
}

interface Dog {
  fly: boolean,
  bark: () =>{

  };
}

// 类型保护

// 1.类型断言的方式
function trainAnial(animal:Bird | Dog) {
  if(animal.fly){
    (animal as Bird).sing();
  }
  else{
    (animal as Dog).bark();
  }
}

// 2.in 语法
function trainAnial1(animal:Bird | Dog) {
  if('sing' in animal){
    animal .sing();
  }
  else{
    animal.bark();
  }
}

// 3.typeof语法
function add(a:string|number, b:string|number) {
  if(typeof a === 'string' || typeof b === 'string'){
    return `${a}${b}`;
  }
  return a+b
}

// 4. instanceof语法
class NumberOBj {
  count:number;
}

function add1(a: object | NumberOBj, b: object | NumberOBj) {
  if(a instanceof NumberOBj &&b instanceof NumberOBj){
    // 因为只有类才具有instanceof属性
    return a.count + b.count;
  }
  return 0
}