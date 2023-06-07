import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class App extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>col1</Col>
                    <Col span={8} offset={8}>col2</Col>
                </Row>
            </div>
        )
    }
}
