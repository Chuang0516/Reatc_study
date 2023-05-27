import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: [
            { id: 1, value: '111' },
            { id: 2, value: '222' },
            { id: 3, value: '333' }
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(({ id, value }) => <li key={id}>{value}</li>)
                    }
                </ul>
            </div>
        )
    }
}
