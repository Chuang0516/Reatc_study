import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communication.css'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            filmList: [],
            info: ''
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
                        <FilmItem key={item.filmId} {...item} onEvent={(value) => {
                            this.setState({
                                info: value
                            })
                        }} ></FilmItem>
                    )
                }
                <FilmDetail info={this.state.info} />
            </div>
        )
    }
}


class FilmItem extends Component {
    render() {
        const { name, poster, grade, synopsis, onEvent } = this.props
        return (
            <div className='filmitem' onClick={() => {
                onEvent(synopsis)
            }}>
                <img src={poster} alt={name} />
                <h4>{name}</h4>
                <div>观众评分：{grade}</div>
            </div>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <div className='filmdetail'>
                {
                    this.props.info
                }
            </div>
        )
    }
}