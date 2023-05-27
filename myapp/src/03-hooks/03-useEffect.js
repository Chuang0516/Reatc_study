import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {

    const [list, setList] = useState([])

    // axios.get('/test.json').then(res => {
    //     console.log(res.data)
    //     setList(res.data.data.films)
    // })

    useEffect(() => {
        axios.get('/test.json').then(res => {
            console.log(res.data)
            setList(res.data.data.films)
        })
    }, []) // 空数组

    return (
        <div>
            <ul>
                {
                    list.map(item =>
                        <li key={item.filmId}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    )
}
