## 联合类型与类型保护

```js
function trainAnial(animal:Bird | Dog) {
  if(animal.fly){
    (animal as Bird).sing();
  }
  else{
    (animal as Dog).bark();
  }
}
```

`animal:Bird | Dog`这种格式的就是联合类型，但是如果不做类型保护机制的话，会报错。

1. 类型断言
2. in 语法
3. typeof语法
4. instanceof语法