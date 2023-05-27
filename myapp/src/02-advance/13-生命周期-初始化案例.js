import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {

    state = {
        list: ['111', '222', '333', '444', '555', '666', '777', '888', '999']
    }

    // componentWillMount() {
    //     // console.log(document.querySelectorAll('li'))
    // }

    render() {
        return (
            <div id='wrapper' style={{ height: '100px', background: 'yellow', overflow: 'hidden' }}>
                <ul>
                    {
                        this.state.list.map(item =>
                            <li key={item}>{item}</li>
                        )
                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        // console.log(document.querySelectorAll('li'))
        console.log('componentDidMount')
        new BetterScroll('#wrapper')
    }
}
