import React, { Component } from 'react'
import { observable, autorun } from 'mobx'

// 普通类型数据的监听
const observableNumber = observable.box(10)
const observableName = observable.box('createcoder')

// 监听函数，第一次执行，之后每次改变都会执行
autorun(() => {
    console.log(observableNumber.get())
})

autorun(() => {
    console.log(observableName.get())
})

setTimeout(() => {
    observableNumber.set(20)
}, 1000)

setTimeout(() => {
    observableName.set('xiaoming')
}, 2000)

// 复杂数据类型
// const myobj = observable.map({
//     name: 'createcoder',
//     age: 100
// })

// autorun(() => {
//     console.log('对象的name属性改变了' + myobj.get('name'))
// })

// setTimeout(() => {
//     myobj.set('name', 'xiaoming')
// }, 3000)

const myobj = observable({
    name: 'createcoder',
    age: 100
})

autorun(() => {
    console.log('对象的name属性改变了' + myobj.name)
})

setTimeout(() => {
    myobj.name = 'xiaoming'
}, 3000)

export default class App extends Component {
    render() {
        return (
            <div>App</div>
        )
    }
}
