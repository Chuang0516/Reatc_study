import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {
    state = {
        list: []
    }
    render() {
        return (
            <div>
                <button onClick={() => this.getData()}>获取数据</button>
                <div className='wrapper' style={{ height: '200px', background: '#00bc8e', overflow: 'hidden' }}>
                    <ul className='content'>
                        {
                            this.state.list.map((item, index) =>
                                <li key={index}>{item}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }

    getData() {
        const list = Math.floor(Math.random() * 10 ** 15).toString().split('')
        this.setState({
            list,
        }, () => {
            new BetterScroll('.wrapper')
        })
    }
}
