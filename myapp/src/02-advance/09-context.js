import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communication.css'

const GlobalContext = React.createContext() // 创建 context 对象

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
            <GlobalContext.Provider value={{
                info: this.state.info,
                changeInfo: (value) => {
                    this.setState({
                        info: value
                    })
                }
            }}>
                <div>
                    {
                        this.state.filmList.map((item) =>
                            <FilmItem key={item.filmId} {...item} ></FilmItem>
                        )
                    }
                    <FilmDetail />
                </div>
            </GlobalContext.Provider >
        )
    }
}


class FilmItem extends Component {
    render() {
        const { name, poster, grade, synopsis } = this.props
        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        return (
                            <div className='filmitem' onClick={() => {
                                value.changeInfo(synopsis)
                            }}>
                                <img src={poster} alt={name} />
                                <h4>{name}</h4>
                                <div>观众评分：{grade}</div>
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) => (
                        <div className='filmdetail'>
                            {value.info}
                        </div>
                    )
                }
            </GlobalContext.Consumer>
        )
    }
}