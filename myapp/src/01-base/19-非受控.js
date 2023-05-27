import React, { Component } from 'react'

export default class App extends Component {

    username = React.createRef()

    render() {
        return (
            <div>
                <h1>登录页</h1>
                <input type="text" ref={this.username} defaultValue='createcoder' />
                <button onClick={() => {
                    console.log(this.username.current.value)
                }}>登录</button>
                <button onClick={() => {
                    this.username.current.value = ''
                }}>重置</button>
            </div>
        )
    }
}
