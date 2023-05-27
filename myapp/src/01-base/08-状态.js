import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myShow: true,
        myname: 'createcoder'
    }

    render() {
        // let text = '收藏'
        return (
            <div>
                <h1>欢迎来到React开发-{this.state.myname}</h1>
                <button onClick={() => {
                    this.setState({
                        myShow: !this.state.myShow,
                        myname: '小明'
                    })
                }}>{this.state.myShow ? '收藏' : '取消收藏'}</button>
            </div>
        )
    }
}
