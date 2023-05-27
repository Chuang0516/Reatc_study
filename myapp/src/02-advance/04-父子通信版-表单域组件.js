import React, { Component } from 'react'


class Field extends Component {
    render() {
        return (
            <div style={{ background: 'yellow' }}>
                <label >{this.props.label}
                    <input type={this.props.type} value={this.props.value} autoComplete='true' onChange={(evt) => {
                        this.props.onChange(evt.target.value)
                    }} />
                </label>
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        username: localStorage.getItem('username') || '',
        password: ''
    }

    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <Field label="用户名" type="text" value={this.state.username} onChange={(value) => {
                    this.setState({
                        username: value
                    })
                }} />
                <form action="">
                    <Field label="密码" type="password" value={this.state.password} onChange={(value) => {
                        this.setState({
                            password: value
                        })
                    }} />
                </form>
                <button onClick={() => {
                    console.log(this.state.username, this.state.password)
                }}>登录</button>
                <button onClick={() => {
                    this.setState({
                        username: '',
                        password: ''
                    })
                }} >取消</button>
            </div>
        )
    }
}
