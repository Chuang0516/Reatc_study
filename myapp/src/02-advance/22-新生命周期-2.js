import React, { Component } from 'react'

export default class App extends Component {

    state = {
        text: '111'
    }

    render() {
        console.log('render')
        return (
            <div>
                App
                <button onClick={() => {
                    this.setState({
                        text: '222'
                    })
                }}>click</button>
                {this.state.text}
            </div>
        )
    }

    // componentWillUpdate() {
    //     console.log('componentWillUpdate')
    // }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforUpdate')
        return 100
    }

    componentDidUpdate(prevProps, prevState, value) {
        console.log('componentDidUpdate', value)
    }
}
