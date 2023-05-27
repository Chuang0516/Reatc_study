import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'


export default class App extends Component {

    state = {
        myname: 'createcoder',
        list: []
    }

    componentDidMount() {
        axios.get('/test.json').then(res => {
            console.log(res.data.data.films)
            this.setState({
                list: res.data.data.films
            })
        })
    }

    render() {
        console.log('render')
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: '123456'
                    })
                }}>click</button>
                <span>{this.state.myname}</span>
                <div id="warpper" style={{ height: '100px', overflow: 'hidden' }} >
                    <ul>
                        {
                            this.state.list.map(item =>
                                <li key={item.filmId}>{item.name}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }

    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')

        console.log(prevState.list)
        if (prevState.list.length === 0) {
            new BetterScroll('#warpper')
        }
    }
}
