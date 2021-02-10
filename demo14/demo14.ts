enum Status {
  ONE,
  TWO,
  THREE = 4 
}

console.log(Status[0]); // ONE 
console.log(Status[1]); // TWO 
console.log(Status[2]); // undefined
console.log(Status[4]); // THREE
console.log(Status.THREE); // 4
console.log(0 === Status.ONE); // true