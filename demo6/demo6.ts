// 数组

let arr1 = [1,2,3];

let arr11:number[] =[1,2,3];

let arr2 = ['1','2','3'];

let arr22: string[] = ["1", "2", "3"];

let arr222:undefined[] = [undefined];

let arr3 = ['1',2,3];

let arr33: (string | number)[] = ["1", 2, 3];

let arr333: null[] = [null];

let arr3333: true[] = [true];

// type alias 别名
type User = {
  name:string
}
let arr4:User[] = [{name:'maomin'}];

// 元组

let arr5 = ['maomin','age',23];
let arr55: [string, string, number] = ["maomin", "age", 23]; // 限制每一项的类型和位置就用元祖
// csv
let arr66:[string,string,number][] = [
  ["maomin","age",21],
  ["xqm","age",20]
]


