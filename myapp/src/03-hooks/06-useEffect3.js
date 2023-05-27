import React, { Component, useEffect, useLayoutEffect } from 'react'

export default class App extends Component {

    state = {
        isCreated: true
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        isCreated: !this.state.isCreated
                    })
                }}>click</button>
                {this.state.isCreated && <Child />}
            </div>
        )
    }
}

function Child(props) {
    useEffect(() => {
        window.onresize = () => {
            console.log('resize')
        }

        const timer = setInterval(() => {
            console.log('111')
        }, 1000)

        return () => {
            console.log('组件销毁')

            window.onresize = null

            clearInterval(timer)
        }
    }, [])

    return (
        <div>Child</div>
    )
}