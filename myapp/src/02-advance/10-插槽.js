import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>
                child
                {/* 插槽 */}

                {this.props.children[0]}
                {this.props.children[2]}
                {this.props.children[1]}
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Child>
                    <div>1111111</div>
                    <div>2222222</div>
                    <div>3333333</div>
                </Child>
            </div>
        )
    }
}
