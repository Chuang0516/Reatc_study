import React, { Component } from 'react'
import './css/02-maizuo.css'
import { Film } from './maizuo/Film'
import { Cinema } from './maizuo/Cinema'
import { Center } from './maizuo/Center'


export default class App extends Component {

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
                {/* {
                    this.state.currentIndex === 0 && <Film></Film>
                }
                {
                    this.state.currentIndex === 1 && <Cinema></Cinema>
                }
                {
                    this.state.currentIndex === 2 && <Center></Center>
                } */}

                {
                    this.which()
                }

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

    which() {
        switch (this.state.currentIndex) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null
        }
    }

    handleClick(index) {
        this.setState({
            currentIndex: index
        })
    }
}
