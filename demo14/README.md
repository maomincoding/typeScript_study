枚举类型中项是默认从 0 开始的，但是你可以修改。

序号跟值是相互映射的。
```js
enum Status{
  ONE,
  TWO,
  THREE
}
function getResult(status){
  if(status === Status.ONE){
    return 'one';
  } else if(status === Status.TWO){
    return 'two';
  } else if(status === Status.THREE){
    return 'three';
  } else {
    return 'error';
  }
} 
getResult(0) // one
```