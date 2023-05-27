import React, { Component } from 'react'


class Field extends Component {
    state = {
        value: ''
    }

    clear() {
        this.setState({
            value: ''
        })
    }

    setValue(value) {
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div style={{ background: 'yellow' }}>
                <label >{this.props.label}
                    <input type={this.props.type} autoComplete='true' value={this.state.value} onChange={(evt) => {
                        this.setState({
                            value: evt.target.value
                        })
                    }} />
                </label>
            </div>
        )
    }
}

export default class App extends Component {

    username = React.createRef()
    password = React.createRef()

    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <Field label="用户名" type="text" ref={this.username} />
                <form action="">
                    <Field label="密码" type="password" ref={this.password} />
                </form>
                <button onClick={() => {
                    console.log(this.username.current.state.value, this.password.current.state.value)
                }}>登录</button>
                <button onClick={() => {
                    this.username.current.clear()
                    this.password.current.clear()
                }} >取消</button>
            </div>
        )
    }
}
