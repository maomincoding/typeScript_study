# 函数相关类型
1. 
```js
// 第一种
function add(a:number,b:number) {
  return a+b
}

const total = add(1,2);

// 第二种
const fun1:str(string)=>number=(str)=>{
  return parseInt(str,10)
}

```
之前，我们给参数加上类型注解，这样系统就更简单地推断出返回值的类型，但是如果我们不小心在函数内部多写了几行代码的话，推断的类型不会是我们想要的类型，那么我们如何限制呢？
第一种方法就是 给`total:number`
第二种方法是 
```js
function add(a:number,b:number):number{
  // 函数体
}

```
2. 
```js
function fun1():void {
    console.log("无返回值")
}
```
void 限制函数无返回值。

3. 
```js
function fun2():never {
  while (true) {}
}
```
never 限制函数永远执行不完。

4. 
```js
function fun3({a,b}:{a:number,b:number}):number {
  return a+b
}
function fun4({a}:{a:number}):number {
  return a
}

const result = fun3({a:1,b:1});
const result2 = fun4({a:1});
```
遇到解构参数时，应该使用以上方法限制类型。