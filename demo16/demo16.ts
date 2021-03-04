// 1
class DataManager<T> {
    constructor(private data: T[]) {
    }

    getItem(index: number): T {
        return this.data[index]
    }
}

const data = new DataManager<number>([1]);
data.getItem(0);

//2
class DataManager1<T1> {
    constructor(private data: T1[]) {
    }

    getItem(index: number): T1 {
        return this.data[index]
    }
}

interface Test {
    name:string
}

const data1 = new DataManager1<Test>([{
    name:"maomin"
}]);
data1.getItem(0);

//3 只限于number或string
class DataManager2<T2 extends number | string> {
    constructor(private data: T2[]) {
    }

    getItem(index: number): T2 {
        return this.data[index]
    }
}

// interface Test1 {
//     name:string
// }

const data2 = new DataManager2<number>([1]);
data2.getItem(0);