import React, { Component } from 'react'

// 引用赋值
const obj = {
    name: 'createcoder'
}

const obj2 = obj

obj2.name = 'xiaoming'

console.log(obj, obj2)

// 扩展运算符：比浅复制多复制一层
const myobj = {
    name: 'createcoder',
    arr: [1, 2, 3]
}

const myobj2 = {
    ...myobj
}

myobj2.name = 'xiaoming'
myobj2.arr.splice(1, 1)

console.log(myobj, myobj2)

// JSON：深复制，数据不能有 undefined
const jsonobj = {
    name: 'createcoder',
    arr: [1, 2, 3],
    address: undefined
}

const jsonobj2 = JSON.parse(JSON.stringify(jsonobj))

jsonobj2.name = 'xiaoming'
jsonobj2.arr.splice(1, 1)

console.log(jsonobj, jsonobj2)

// deepcopy：递归深复制，影响性能


export default class App extends Component {
    render() {
        return (
            <div>App</div>
        )
    }
}
