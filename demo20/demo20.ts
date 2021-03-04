interface Person {
    name:string,
    age:number,
    gender:string
}


/*
type T = 'name';
key:'name';
Person['name'];

type T = 'age';
key:'age';
Person['age'];

type T = 'gender';
key:'gender';
Person['gender'];
 */

class Teacher {
    constructor(private info:Person) {}
    getInfo<T extends keyof Person>(key:T):Person[T] {
        return this.info[key];
    }
}

const teacher = new Teacher({
    name:'maomin',
    age:18,
    gender:'male'
});

// 没法保证传入的类型，key不确定。所以我们需要使用keyof
const test = teacher.getInfo('name');