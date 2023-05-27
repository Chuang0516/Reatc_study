import React, { Component } from 'react'

export default class App extends Component {

    state = {
        name: 'createcoder'
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount', this.state.name)
        // 可以最后一次修改 state
        this.setState({
            name: 'xxxxxxx'
        })
        // 初始化数据
    }

    componentDidMount() {
        console.log('componentDidMount')
        // 数据请求 axios
        // 订阅函数调用
        // setInterval
        // 等待 DOM 创建完成后的操作...
    }

    render() {
        console.log('render')
        return (
            <div>{this.state.name}</div>
        )
    }
}
