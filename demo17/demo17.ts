// 如何使用泛型作为一个具体的类型注解
function hello<T>(params:T){
    return params;
}

const func:<T>(param:T) => T = hello;