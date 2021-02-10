function join<ABC>(a:ABC, b:ABC) {
  return `${a}${b}`;
}

join<string>('1','2');


function join1<ABC>(params:Array<ABC>) {
  return params;
}

join1<string>(['123']);