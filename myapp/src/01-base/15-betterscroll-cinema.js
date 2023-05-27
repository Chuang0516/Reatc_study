import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class Cinema extends Component {

    constructor(props) {
        super(props)
        // axios请求数据
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6642720',
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16845510655359732638351361", "bc": "110100" }',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            this.setState({
                cinemas: res.data.data.cinemas,
                cinemaList: res.data.data.cinemas
            }, () => {
                new BetterScroll('.container')
            })
        }).catch(err => {
            console.log(err)
        })
    }

    state = {
        cinemas: [],
        cinemaList: []
    }

    render() {

        return (
            <div>
                <input type="text" onInput={this.handleInput} />
                <div className='container' style={{ height: '500px', background: '#eee', overflow: 'hidden' }}>
                    <div>
                        {
                            this.state.cinemas.map(item =>
                                <dl key={item['cinemaId']}>
                                    <dt>{item['name']}</dt>
                                    <dd>{item['address']}</dd>
                                </dl>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }

    handleInput = (event) => {
        const serchCinemas = this.state.cinemaList.filter(({ name, address }) =>
            name.toUpperCase().includes(event.target.value.toUpperCase()) || address.toUpperCase().includes(event.target.value.toUpperCase())
        )
        this.setState({
            cinemas: serchCinemas
        })
    }
}
