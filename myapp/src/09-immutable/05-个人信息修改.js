import { List, Map } from 'immutable'
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        info: Map({
            name: 'createcoder',
            location: Map({
                province: '陕西',
                city: '西安'
            }),
            favor: List(['读书', '看报', '写代码'])
        })
    }

    render() {
        return (
            <div>
                <h1>个人信息修改</h1>
                <button onClick={() => {
                    this.setState({
                        info: this.state.info.set('name', '小明').set('location', this.state.info.get('location').set('city', '北京'))
                    })
                }}>修改</button>
                <div>
                    {this.state.info.get('name')}
                    <br />
                    {this.state.info.get('location').get('province')}
                    -
                    {this.state.info.get('location').get('city')}
                    <br />
                    <ul>
                        {
                            this.state.info.get('favor').map((item, index) =>
                                <li key={item}>
                                    {item}
                                    <button onClick={() => {
                                        console.log(index)
                                        this.setState({
                                            info: this.state.info.set('favor', this.state.info.get('favor').splice(index, 1))
                                        })
                                    }}>del</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
