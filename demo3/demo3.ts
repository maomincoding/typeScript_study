// 基础类型 null、undefined、symbol、boolean、void

const count:number = 123;
const authorName:string = 'Maomin';

//对象类型
const author:{
  name:string,
  age:number
} = {
  name:'maomin',
  age:23
}

const numbers: number[] = [1,2,3];

class Person {};

const maomin:Person = new Person();

const fn:()=>number=()=>{
  return 123;
}

