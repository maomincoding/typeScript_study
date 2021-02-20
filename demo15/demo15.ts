// 泛型 泛指的类型
//1.
function join<T>(a:T, b:T) {
  return `${a}${b}`;
}

join<string>('1','2');

//2.
function join1<T>(params:T[]) {
  return params;
}

join1<string>(['123']);

//3.
function join2<T,P>(a: T, b: P) {
  return `${a}${b}`;
}

join2<number,string>(1,'2');