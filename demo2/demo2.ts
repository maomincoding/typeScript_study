interface Typedata {
  x: number;
  y: number;
}

function fun1(data: Typedata) {
  return data.x + data.y;
}

console.log(fun1({ x: 2, y: 1 }));
