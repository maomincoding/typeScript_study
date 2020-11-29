1. `interface`与`type` 相类似，但并不完全一致。`interface`可以定义对象（属性和方法）和函数类型。`type`定义基础类型。

2. `interface`接口使用`[propName:string]:any`可以代表其他任何类型的属性。

3. `interface`接口在属性后面加上`?`代表这个属性可有可无。`ts`引擎不会去特意判断。

4. `interface`接口在属性前面加上`readonly`代表这个属性只读不能被修改。

5. `interface`接口内可以定义方法。

6. 可以使用`implements`将interface接口应用到class类中。

7. 使用`extends`可以继承`interface`接口。

8. ts编译成js，接口不会在js中，它的作用只是类型校验的。

