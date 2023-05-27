import React, { Component } from 'react'

export default class App extends Component {

    state = {
        name: 'createcoder'
    }

    // 在调用 render方法之前调用，在初始化和后续更新都会被调用
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('getDirvedStateFromProps')
        return {
            name: nextState.name.toUpperCase()
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        name: 'xiaoming'
                    })
                }}>click</button>
                App={this.state.name}
            </div>
        )
    }
}
