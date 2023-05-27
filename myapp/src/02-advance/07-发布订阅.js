import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>App</div>
        )
    }
}


const bus = {

    // 缓存列表
    list: [],

    // 订阅
    subscribe(callback) {
        // 缓存回调
        this.list.push(callback)
    },

    // 发布
    publish(text) {
        this.list.forEach(callback => {
            callback && callback(text)
        })
    }
}

// 订阅者
bus.subscribe((value) => {
    console.log(value)
})

bus.subscribe((value) => {
    console.log(value)
})

// 发布者
setTimeout(() => {
    bus.publish('111')
}, 1000)

setTimeout(() => {
    bus.publish('111')
}, 2000)