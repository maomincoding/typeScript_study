# 数组与元组

## 数组

- 基本类型

number、string、undefined、null、true等
```ts
let arr:number[]=[1,3];
```

- 复杂类型

对象
type alias 别名
```ts
type Uer = {
  name:string
}

let arr = [{
  name:"maomin"
}];
```
## 元组

限制每一项的类型和位置就用元祖。

```ts
let arr:[number,number,string] = [1,2,'3'];
```
csv文件格式

```ts
let arr:[string,string,number][] = [
  ["maomin","age","20"]
]
```
