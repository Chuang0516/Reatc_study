import React, { Component } from 'react'
import './css/01-index.css' // 导入 css 模块

export default class App extends Component {
    render() {
        const name = 'createcoder'
        const obj = { color: 'red', backgroundColor: '#00bc8e', fontSize: '30px' }
        return (
            <div>
                {name}
                {/* React 推荐使用行内样式 */}
                <div style={obj}>111111111111</div>
                <div className='active'>3333333333333</div>
                <label htmlFor="username">用户名：</label>
                <input type="text" id='username' />
            </div >
        )
    }
}
