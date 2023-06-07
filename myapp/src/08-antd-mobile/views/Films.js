import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import NowPlaying from './films/NowPlaying'
import Comingsoon from './films/Comingsoon'
import style from './css/Film.module.css'
import { Swiper, Tabs } from 'antd-mobile'
import axios from 'axios'

export default class Films extends Component {

    state = {
        looplist: []
    }

    componentDidMount() {
        axios({
            url: 'http://localhost:7592/api/home/banner',
            method: 'POST'
        }).then(res => {
            console.log(res.data.data.bannerList)
            this.setState({
                looplist: res.data.data.bannerList
            })
        })
    }

    render() {
        return (
            <div>
                <Swiper autoplay>
                    {
                        this.state.looplist.map(item =>
                            <Swiper.Item key={item.id} >
                                <img src={item.url} alt={item.title} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                            </Swiper.Item>
                        )
                    }
                </Swiper>
                {/* <ul>
                    <li>
                        <NavLink to='/films/nowplaying' activeClassName={style['my-active']}>
                            正在上映
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/films/comingsoon' activeClassName={style['my-active']}>
                            即将上映
                        </NavLink>
                    </li>
                </ul> */}

                <div style={{ position: 'sticky', top: 0, background: '#fff', zIndex: '999' }}>
                    <Tabs onChange={(value) => {
                        this.props.history.push(value)
                    }} activeKey={this.props.location.pathname}>
                        <Tabs.Tab title='正在热映' key='/films/nowplaying'></Tabs.Tab>
                        <Tabs.Tab title='即将上映' key='/films/comingsoon'></Tabs.Tab>
                    </Tabs>
                </div>

                <Switch>
                    <Route path='/films/nowplaying' component={NowPlaying} />
                    <Route path='/films/comingsoon' component={Comingsoon} />
                    <Redirect from='/films' to='/films/nowplaying' />
                </Switch>
            </div >
        )
    }
}
