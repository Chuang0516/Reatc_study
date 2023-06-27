import React, { Component } from 'react'
import axios from 'axios'
import { RouteComponentProps } from 'react-router-dom'

interface IItem {
  filmId: number
  name: string
}

export default class Film extends Component<RouteComponentProps, any> {
  state = {
    list: [],
  }

  componentDidMount() {
    axios({
      url: `https://m.maizuo.com/gateway?cityId=610100&pageNum=1&pageSize=10&type=1&k=7848653`,
      method: 'GET',
      headers: {
        'X-Client-Info':
          '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16845510655359732638351361" }',
        'X-Host': 'mall.film-ticket.film.list',
      },
    }).then(({ data }) => {
      console.log(data.data.films)
      this.setState({
        list: data.data.films,
      })
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item: IItem) => (
            <li
              key={item.filmId}
              onClick={() => {
                this.props.history.push(`/detail/${item.filmId}`)
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
