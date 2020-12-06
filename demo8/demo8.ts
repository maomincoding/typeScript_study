class Person {
  name = 'maomin'; //属性
  getName() { // 方法
    return this.name;
  }
}

class  Teacher  extends Person{ // 继承父类
  getTeacherName(){
    return 'Teacher';
  }
  getName(){ // 覆盖父类的方法 getName()方法
    return 'min';
  }
  getAddName(){
    return super.getName()+'xqm';// super指父类
  }
}

const person = new Person();
console.log(person.getName());//dell
const teacher = new Teacher();
console.log(teacher.getTeacherName());//Teacher
console.log(teacher.getName());//min 重写父类的方法
console.log(teacher.getAddName()); //maominxqm