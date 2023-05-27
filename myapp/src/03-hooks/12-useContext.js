import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './css/index.css'

const GlobalContext = React.createContext() // 创建 context 对象


export default function App() {
    const [filmList, setfilmList] = useState([])
    const [info, setinfo] = useState('')

    useEffect(() => {
        axios.get('/test.json').then(({ data }) => {
            setfilmList(data.data.films)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            info: info,
            changeInfo: (value) => {
                setinfo(value)
            }
        }}>
            <div>
                {
                    filmList.map((item) =>
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

    const value = useContext(GlobalContext)

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


function FilmDetail() {

    const value = useContext(GlobalContext)

    return (
        <div className='filmdetail'>
            {value.info}
        </div>
    )
}