import React, { Component } from 'react'
import axios from 'axios'

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
            })
        }).catch(err => {
            console.log(err)
        })
    }

    state = {
        cinemas: [],
        text: ''
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={(evt) => {
                    this.setState({
                        text: evt.target.value
                    })
                }} />
                {
                    this.getCinemas().map(item =>
                        <dl key={item['cinemaId']}>
                            <dt>{item['name']}</dt>
                            <dd>{item['address']}</dd>
                        </dl>
                    )
                }
            </div>
        )
    }

    getCinemas() {
        const keyWord = this.state.text.toUpperCase()
        return this.state.cinemas.filter(({ name, address }) => name.toUpperCase().includes(keyWord) || address.toUpperCase().includes(keyWord))
    }
}
