import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, withRouter } from 'react-router-dom'

export default function NowPlaying(props) {

    const [list, setlist] = useState([])

    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=610100&pageNum=1&pageSize=10&type=1&k=7848653',
            method: 'GET',
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16845510655359732638351361" }',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(({ data }) => {
            setlist(data.data.films)
        })
    }, [])

    const history = useHistory()

    const handleChangePage = (id) => {
        // window.location.href = `#/detail/${id}`


        // 1、动态路由传参
        props.history.push(`/detail/${id}`)
        // history.push(`/detail/${id}`)

        // 2、query传参
        // history.push({ pathname: '/detail', query: { id: id } })

        // 3、state传参
        // history.push({ pathname: '/detail', state: { id: id } })
    }


    return (
        <div>
            {
                list.map(item =>
                    <WithFilmItem key={item.filmId} {...item} />
                )
            }
        </div>
    )
}


function FilmItem(props) {
    const { filmId, name } = props
    return (
        <li onClick={() => {
            props.history.push(`/detail/${filmId}`)
        }}>
            {name}
            {/* <NavLink to={'/detail/' + item.filmId} >{item.name}</NavLink> */}
        </li>
    )
}

const WithFilmItem = withRouter(FilmItem)