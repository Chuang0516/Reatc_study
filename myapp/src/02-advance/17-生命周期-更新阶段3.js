import React, { Component } from 'react'

class Child extends Component {

    state = {
        title: ''
    }

    render() {
        return (
            <div>child-{this.state.title}</div>
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps.text)
        // 最先获得父组件传来的属性，可以利用属性进行网络请求或逻辑处理
        // 把属性转换成自己的状态
        this.setState({
            title: nextProps.text + 'createcoer'
        })
    }
}

export default class App extends Component {
    state = {
        text: '111111111111'
    }
    render() {
        return (
            <div>
                {
                    this.state.text
                }
                <button onClick={() => {
                    this.setState({
                        text: '2222222222'
                    })
                }}>click</button>
                <Child text={this.state.text} />
            </div>
        )
    }
}
