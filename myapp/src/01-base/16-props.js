import React, { Component } from 'react'
import Navbar from './Navbar'

export default class App extends Component {

    render() {

        const obj = { title: '我的', leftShow: false }

        return (
            <div>
                <div>
                    <h2>首页</h2>
                    <Navbar title="首页" leftShow={false} rightShow={false} />
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title="列表" />
                </div>
                <div>
                    <h2>购物车</h2>
                    <Navbar title="购物车" rightShow={false} />
                </div>
                <div>
                    <h2>我的</h2>
                    <Navbar {...obj} />
                </div>
            </div>
        )
    }
}
