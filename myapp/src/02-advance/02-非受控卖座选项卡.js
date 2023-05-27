import React, { Component } from 'react'
import './css/02-maizuo.css'
import { Film } from './maizuo/Film'
import { Cinema } from './maizuo/Cinema'
import { Center } from './maizuo/Center'
import { Tabbar } from './maizuo/Tabbar'
import { Navbar } from './maizuo/Navbar'

export default class App extends Component {

    state = {
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
                }} />
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
