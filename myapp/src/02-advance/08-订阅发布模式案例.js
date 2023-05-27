import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communication.css'

const bus = {

    // 缓存列表
    list: [],

    // 订阅
    subscribe(callback) {
        // 缓存回调
        this.list.push(callback)
    },

    // 发布
    publish(text) {
        this.list.forEach(callback => {
            callback && callback(text)
        })
    }
}

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            filmList: []
        }
        axios.get('/test.json').then(({ data }) => {
            this.setState({
                filmList: data.data.films
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.filmList.map((item) =>
                        <FilmItem key={item.filmId} {...item} ></FilmItem>
                    )
                }
                <FilmDetail />
            </div>
        )
    }
}


class FilmItem extends Component {
    render() {
        const { name, poster, grade, synopsis, onEvent } = this.props
        return (
            <div className='filmitem' onClick={() => {
                bus.publish(synopsis)
            }}>
                <img src={poster} alt={name} />
                <h4>{name}</h4>
                <div>观众评分：{grade}</div>
            </div>
        )
    }
}

class FilmDetail extends Component {
    constructor() {
        super()
        this.state = {
            synopsis: ''
        }
        bus.subscribe((value) => {
            this.setState({
                synopsis: value
            })
        })
    }

    render() {
        return (
            <div className='filmdetail'>
                {
                    this.state.synopsis
                }
            </div>
        )
    }
}