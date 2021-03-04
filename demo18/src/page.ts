// 1
/// <reference path='./components.ts' />
// 依赖于components.ts

namespace Home {
    export class Page {
        user: Components.User = {
            name: 'maomin'
        };

        constructor() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
    }
}

// 2
// 也可使用 import引入
/*
import {Header,Content,Footer} from "./components.ts"

namespace Home {
    export class Page {
        user: Components.User = {
            name: 'maomin'
        };

        constructor() {
            new Header();
            new Content();
            new Footer();
        }
    }
}

*/


// 过多的全局变量会使我们的代码难以维护
// class Header {
//     constructor() {
//         const elem = document.createElement('div');
//         elem.innerText = 'This is Header';
//         document.body.appendChild(elem);
//     }
// }
// class Content {
//     constructor() {
//         const elem = document.createElement('div');
//         elem.innerText = 'This is Content';
//         document.body.appendChild(elem);
//     }
// }
// class Footer {
//     constructor() {
//         const elem = document.createElement('div');
//         elem.innerText = 'This is Footer';
//         document.body.appendChild(elem);
//     }
// }
// class Page {
//     constructor() {
//         new Header();
//         new Content();
//         new Footer();
//     }
// }
