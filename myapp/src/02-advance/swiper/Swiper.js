import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default class MySwiper extends Component {

    render() {
        return (
            <div>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {
                            this.props.children
                        }
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        new Swiper('.swiper', {
            loop: true,
            modules: [Navigation, Pagination],
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
}
