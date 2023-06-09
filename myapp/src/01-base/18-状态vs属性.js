import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>Child-{this.props.text}
                <button onClick={() => {
                    // this.props.text = '3333333333333'
                }}>click-子</button>
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        text: '222222'
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        text: '111111'
                    })
                }}>click-父</button>
                <Child text={this.state.text} />
            </div>
        )
    }
}
