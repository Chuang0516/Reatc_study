import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div style={{ background: '#eee' }}>
                <button onClick={() => {
                    this.props.toShow()
                }}>click</button>
                <span>navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{ background: 'yellow', width: '200px', height: '100vh' }}>
                <ul>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                </ul>
            </div>
        )
    }
}

export default class App extends Component {

    state = {
        isShow: false
    }

    render() {
        return (
            <div>
                <Navbar toShow={() => {
                    this.setState({
                        isShow: !this.state.isShow
                    })
                }} />
                {
                    this.state.isShow && <Sidebar />
                }
            </div>
        )
    }
}
