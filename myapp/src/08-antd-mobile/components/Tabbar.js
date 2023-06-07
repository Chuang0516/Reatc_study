import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import style from './Tabbar.module.css'
import { TabBar } from 'antd-mobile'
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'

class MyTabbar extends Component {

    state = {
        tabs: [
            {
                key: '/films',
                title: '电影',
                icon: <AppOutline />,
            },
            {
                key: '/cinemas',
                title: '影院',
                icon: <UnorderedListOutline />,
            },
            {
                key: '/center',
                title: '我的',
                icon: <UserOutline />,
            },
        ]
    }

    render() {
        return (
            <div className={style.tabbar}>
                <TabBar onChange={(value) => {
                    this.props.history.push(value)
                }} activeKey={`/${this.props.location.pathname.split('/')[1]}`} >
                    {this.state.tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                </TabBar>
            </div>
        )
    }
}

export default withRouter(MyTabbar)