// interface接口可以代表对象（属性或者方法）或者函数的通用类型  

interface Person {
  // readonly name: string; //readonly只读，不能改
  name:string;
  age?: number; // 在age属性后面添加?表示age属性可有可无
  [propName:string]:any; // 多出其他属性
  say():string
}

// type 代表基础类型
type Person1 = string;

// 接口可以继承
interface Teacher extends Person{
  teach():string
}

const setTeacherName = (person: Teacher, name: string): void => {
  person.name = name;
};

const getPersonName = (person:Person):void => {
  console.log(person.name);
}

const setPersonName = (person:Person,name:string):void =>{
  person.name = name;
}

const person = {
  name:'maomin',
  sex:'male',
  say(){
    return 'maomin'
  },
  teach(){
    return 'xqm'
  }
}

// getPersonName({
//   name: "maomin",
//   sex: "male",
// }); // 传入字面量会报错，强校验。可以使用 [propName:string]:any 统指其他属性

getPersonName(person);
setPersonName(person,'maomin');
setTeacherName(person, "maomin");

// 接口可以应用到class类
class User implements Person {
  name = 'maomin';
  say(){
    return 'maomin'
  }
  sex = 23
}
// interface 可以定义函数类型
interface SayHi {
  (word:string) :string
}

const say:SayHi = (word:string) => {
  return word;
}