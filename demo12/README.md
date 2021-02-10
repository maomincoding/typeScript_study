tsc命令会先到tsconfig.json，如果没有找到配置文件项，然后到根目录下找。
1. 包含编译文件
```json
{
"include":["./demo.ts"]
}
```
或
```json
{
  "files":["./demo.ts"]
}
```
2. 排除编译文件
```json
{
  "exclude":"[./demo.ts]" 
}


compilerOptions配置详解
```json
{
  "compilerOptions":{
    "removeComments": true, // 编译过程中，删除代码注释
    "noImplicitAny": true,  // 不能不明确指定any类型
    "strictNullChecks": true, // 启用严格的null检查
    "outDir":"./build", // 编译之后文件地址
    "rootDir":"./src", // 编译输入文件地址
    "incremental": true, // 渐进式编译或者增量编译，就是之前编译过的内容不再编译，只编译新增的内容。
    "target": "es5", // 编译成es5语法
    "allowJs":true, // 允许编译js文件
    "checkJs": true, // 允许检查js语法
    "noUnusedLocals": true, // 报告未使用的局部变量的错误
    "noUnusedParameters": true, // 报告未使用参数的错误
    "baseUrl": "./", // 项目根路径
  }
```
