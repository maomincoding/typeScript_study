let num = 123; //可类型推断 ，number
let a = 2;
let b = 3;
let c = a+b; // 可类型推断，number
let str = '2' // 可类型推断，string

// 参数不可类型推断
function fn(frist:number,second:number) {
  return frist + second
}

const ff = fn(1, 2);

// 可类型判断
const obj = {
  name:"maomin",
  age:23
}