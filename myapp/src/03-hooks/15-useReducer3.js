import React, { useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import './css/index.css'

const GlobalContext = React.createContext() // 创建 context 对象

const intialState = {
    info: '',
    filmList: []
}

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'getFilmList':
            return {
                ...prevState,
                filmList: action.value
            }
        case 'getInfo':
            return {
                ...prevState,
                info: action.value
            }
        default:
            return prevState
    }
}

export default function App() {

    const [state, dispatch] = useReducer(reducer, intialState)

    useEffect(() => {
        axios.get('/test.json').then(({ data }) => {
            dispatch({
                type: 'getFilmList',
                value: data.data.films
            })
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                {
                    state.filmList.map((item) =>
                        <FilmItem key={item.filmId} {...item} ></FilmItem>
                    )
                }
                <FilmDetail />
            </div>
        </GlobalContext.Provider >
    )
}

function FilmItem(props) {
    const { name, poster, grade, synopsis } = props

    const { dispatch } = useContext(GlobalContext)

    return (
        <div className='filmitem' onClick={() => {
            dispatch({
                type: 'getInfo',
                value: synopsis
            })
        }}>
            <img src={poster} alt={name} />
            <h4>{name}</h4>
            <div>观众评分：{grade}</div>
        </div>
    )
}


function FilmDetail() {

    const { state } = useContext(GlobalContext)

    return (
        <div className='filmdetail'>
            {state.info}
        </div>
    )
}