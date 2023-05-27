import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Navbar extends Component {

    // 类属性
    static propTypes = {
        title: propTypes.string,
        leftShow: propTypes.bool,
        rightShow: propTypes.bool
    }

    static defaultProps = {
        leftShow: true,
        rightShow: true
    }

    render() {
        let { title, leftShow, rightShow } = this.props
        return (
            <div>
                {
                    leftShow ? <button>返回</button> : null
                }
                {title}
                {
                    rightShow ? <button>home</button> : null
                }
            </div>
        )
    }
}

