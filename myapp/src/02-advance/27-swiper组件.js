import React, { Component } from 'react'
import MySwiper from './swiper/Swiper'
import MySwiperItem from './swiper/SwiperItem'
import axios from 'axios'

export default class App extends Component {

    state = {
        list: []
    }

    render() {
        return (
            <div>
                <MySwiper>
                    {
                        this.state.list.map(item =>
                            <MySwiperItem key={item.id}>
                                {/* <div style={{ width: '500px', height: '200px' }}>{item}</div> */}
                                <img src={item.url} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            </MySwiperItem>
                        )
                    }
                </MySwiper>
            </div>
        )
    }

    componentDidMount() {
        axios({
            url: 'http://localhost:7592/api/home/banner',
            method: 'post'
        }).then(res => {
            console.log(res.data.data.bannerList)
            this.setState({
                list: res.data.data.bannerList
            })
        })
    }
}
