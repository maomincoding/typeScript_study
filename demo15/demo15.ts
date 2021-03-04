// 泛型 泛指的类型
//1. 标准
function join<T>(a: T, b: T) {
    return `${a}${b}`;
}

join<string>('1', '2');

//2. 数组泛型
function join1<T>(params: T[]) {
    return params;
}

join1<string>(['123']);

//3. 多个泛型
function join2<T, P>(a: T, b: P) {
    return `${a}${b}`;
}

join2<number, string>(1, '2');

//4. 返回泛型
function join3<T>(a: T ):T {
    return a;
}

join3<string>( '2');

// 位置：在函数括号前面写<T>