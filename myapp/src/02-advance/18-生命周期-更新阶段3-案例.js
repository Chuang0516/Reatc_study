import React, { Component } from 'react'

export default class App extends Component {

    state = {
        type: 1
    }

    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState({
                            type: 1
                        })
                    }}>正在热映</li>
                    <li onClick={() => {
                        this.setState({
                            type: 2
                        })
                    }}>即将上映</li>
                </ul>

                <FilmList type={this.state.type}></FilmList>
            </div>
        )
    }
}

class FilmList extends Component {

    // 初始化阶段才执行，只执行一次
    componentDidMount() {
        if (this.props.type === 1) {
            // 请求卖座正在热映的数据
            console.log('请求卖座正在热映的数据')
        } else {
            // 请求卖座即将上映的数据
            console.log('请求卖座即将上映的数据')
        }
    }

    // 父组件传来的属性即将更新
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.type === 1) {
            // 请求卖座正在热映的数据

        } else {
            // 请求卖座即将上映的数据
        }
    }

    render() {
        return (
            <div>
                FilmList-{this.props.type}
            </div>
        )
    }
}
