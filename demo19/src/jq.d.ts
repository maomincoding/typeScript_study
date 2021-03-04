// 定义全局变量
// declare var $: (param: () => void) => void;

// 第一种方法
// 函数重载;
interface jqins {
    html: (html: string) => jqins;
}

// interface Jq{
//   (param: () => void): void;
//   (param: string): jqins;
// }

// declare var $:Jq;

// 第二种方法
// 函数重载（一个函数方法可以有多种形式）
declare function $(param: () => void): void;
declare function $(param: string): jqins;

// 定义全局对象
declare namespace $ {
    namespace fn {
        class init {
        }
    }
}

// ES6模块化

// declare module 'jquery' {
//     interface jqins {
//         html: (html: string) => jqins;
//     }
//     混合类型
//     function $(param: () => void): void;
//     function $(param: string): jqins;
//
//     namespace $ {
//         namespace fn {
//             class init {
//             }
//         }
//     }
//
//     export = $
// }