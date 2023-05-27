import React, { Component } from 'react'

export class Tabbar extends Component {

    state = {
        list: [
            { id: 1, name: '电影' },
            { id: 2, name: '影院' },
            { id: 3, name: '我的' },
        ],
        currentIndex: 0
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(({ id, name }, index) =>
                            <li key={id} className={this.state.currentIndex === index ? 'active' : ''} onClick={() => this.handleClick(index)} >{name}</li>
                        )
                    }
                </ul>
            </div>
        )
    }

    handleClick(index) {
        this.setState({
            currentIndex: index
        })
        this.props.event(index)
    }
}
