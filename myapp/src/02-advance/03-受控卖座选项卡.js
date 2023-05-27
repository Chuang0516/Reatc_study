import React, { Component } from 'react'
import './css/02-maizuo.css'
import { Film } from './maizuo2/Film'
import { Cinema } from './maizuo2/Cinema'
import { Center } from './maizuo2/Center'
import { Tabbar } from './maizuo2/Tabbar'
import { Navbar } from './maizuo2/Navbar'

export default class App extends Component {

    state = {
        list: [
            { id: 1, name: '电影' },
            { id: 2, name: '影院' },
            { id: 3, name: '我的' }
        ],
        currentIndex: 0
    }

    render() {
        return (
            <div>
                <Navbar event={() => {
                    this.setState({
                        currentIndex: 2
                    })
                }} />
                {
                    this.which()
                }
                <Tabbar event={(index) => {
                    this.setState({
                        currentIndex: index
                    })
                }} currentIndex={this.state.currentIndex} list={this.state.list} />
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
}
