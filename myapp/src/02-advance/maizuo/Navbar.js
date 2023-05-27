import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '32px', background: 'yellow' }}>
                <button>back</button>
                <span>卖座电影</span>
                <button onClick={() => {
                    this.props.event()
                }}>center</button>
            </div>
        )
    }
}
