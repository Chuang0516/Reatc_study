import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'

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

function FilmList(props) {

    const [list, setList] = useState([])

    useEffect(() => {
        if (props.type === 1) {
            // 请求卖座正在热映的数据
            console.log('请求卖座正在热映的数据')
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=610100&pageNum=1&pageSize=10&type=1&k=7848653',
                method: 'GET',
                headers: {
                    'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16845510655359732638351361" }',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((res) => {
                setList(res.data.data.films)
            })
        } else {
            // 请求卖座即将上映的数据
            console.log('请求卖座即将上映的数据')
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=610100&pageNum=1&pageSize=10&type=2&k=7588787',
                method: 'GET',
                headers: {
                    'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16845510655359732638351361" }',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then((res) => {
                setList(res.data.data.films)
            })
        }
    }, [props.type])

    return (
        <div>
            <ul>
                {
                    list?.map(item =>
                        <li key={item.filmId}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    )
}
