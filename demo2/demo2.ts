interface Typedata {
  x: number;
  y: number;
}

function fun1(data: Typedata) {
  return data.x + data.y;
}

console.log(fun1({ x: 2, y: 1 }));


/*
当限制一个对象内具体的属性值时，可以使用interface
*/