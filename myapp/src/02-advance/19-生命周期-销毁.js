import React, { Component } from 'react'

export default class App extends Component {

    state = {
        isCreated: true
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        isCreated: !this.state.isCreated
                    })
                }}>click</button>
                {this.state.isCreated && <Child />}
            </div>
        )
    }
}

class Child extends Component {

    render() {
        return (
            <div>Child</div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount')
        window.onresize = () => {
            console.log('resize')
        }

        this.timer = setInterval(() => {
            console.log('111')
        }, 100)
    }

    // 组件即将销毁
    componentWillUnmount() {
        console.log('componentWillUnmount')
        window.onresize = null
        clearInterval(this.timer)
    }
}
