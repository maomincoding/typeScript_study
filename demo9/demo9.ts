// public 允许在类的内外被调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用

class Person1 {
  // public为公共属性
  public name: string;
  public sayHi() {
    console.log(this.name);
    console.log("hi");
  }
  // private为私有属性
  private age: number;
  public getAge() {
    console.log(this.age);
  }
  protected job:string;
  public getJob(){
    console.log(this.job);
  }
}

class Person2 extends Person1 {
  public getFarName(){
    console.log(this.job) // 可以调用父类的属性
  }
}
const person1 = new Person1();
person1.name = 'maomin';
console.log(person1.name); // maomin
person1.sayHi();// hi
// person1.age = 13; // 不能调用。private为私有属性，不能在类外调用。



// ***
// constructor的使用

class Person3 {
  public name:string
  constructor(name:string) {
    this.name = name;
  }
}

const person3 = new Person3('mamin');
console.log(person3.name) //mamin

class Person4 {
  // constructor简写形式
  constructor(public name: string) {
    this.name = name;
  }
}
// 如果你继承父类，并且子类使用了constructor,
// 不管父类是否也使用了constructor,子类都需要使用super()调用下父类构造函数。如果父类使用了construstor,
// 那么就在子类super()传下参数，否则直接super()。

class Person5 extends Person4{
  constructor (public age:number){
    super('xqm'); // 调用父类的构造函数，
  }
}

//const person4 = new Person4('xqm');
//console.log(person4.name) // xqm

const person5 = new Person5(21);
console.log(person5.age);//21
console.log(person5.name)//xqm