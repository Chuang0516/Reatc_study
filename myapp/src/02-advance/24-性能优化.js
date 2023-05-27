import React, { PureComponent } from 'react'

export default class App extends PureComponent {

    state = {
        name: 'createcoder'
    }

    render() {
        console.log('render')
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        name: 'xiaoming'
                    })
                }}>click</button>
                <span>{this.state.name}</span>
            </div>
        )
    }

    // 是否更新组件
    // shouldComponentUpdate(nextProps, nextState) {
    //     // this.state 老的状态
    //     // nextState 新的状态
    //     if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
    //         return true
    //     }
    //     return false
    // }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
}
