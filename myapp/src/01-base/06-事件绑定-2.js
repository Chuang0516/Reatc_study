import React, { Component } from 'react'

export default class App extends Component {
    a = 100
    render() {
        return (
            <div>
                <input type="text" />

                <button onClick={() => {
                    console.log('click1', this.a)
                }}>add1</button>

                <button onClick={this.handleClick2.bind(this)}>add2</button>

                <button onClick={this.handleClick3}>add3</button>

                <button onClick={() => this.handleClick4()}>add4</button>
            </div >
        )
    }

    handleClick2() {
        console.log('click2', this.a)
    }

    handleClick3 = (evt) => {
        console.log('click3', this.a, evt)
    }

    handleClick4 = () => {
        console.log('click4', this.a)
    }

    // React 并不会把事件绑定到标签上，而是采用事件代理的方式，绑定在根节点上
}
