import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 1
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleAdd1}>add1</button>
                <button onClick={this.handleAdd2}>add2</button>
            </div>
        )
    }

    handleAdd1 = () => {
        // setState 处于同步逻辑中，异步更新状态、异步渲染DOM

        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })

        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })

        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })
    }

    handleAdd2 = () => {
        // setState 处于异步逻辑中，同步更新状态、同步渲染DOM
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })

            this.setState({
                count: this.state.count + 1
            })

            this.setState({
                count: this.state.count + 1
            })
        }, 0)
    }
}
