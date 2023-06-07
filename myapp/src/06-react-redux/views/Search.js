import React, { useEffect, useState, useMemo } from 'react'
import { store } from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Search() {

    const [text, settext] = useState('')
    const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)

    useEffect(() => {
        if (store.getState().CinemaListReducer.list.length === 0) {
            store.dispatch(getCinemaListAction())
        } else {
            console.log('store 缓存')
        }

        const unSubscribe = store.subscribe(() => {
            setCinemaList(store.getState().CinemaListReducer.list)
        })

        return () => {
            // 取消订阅
            unSubscribe()
        }
    }, [])

    const getCinemas = useMemo(() => {
        return cinemaList.filter(({ name, address }) => name.toUpperCase().includes(text.toUpperCase()) || address.toUpperCase().includes(text.toUpperCase()))
    }, [text, cinemaList])

    return (
        <div>
            <input type="text" value={text} onChange={(evt) => {
                settext(evt.target.value)
            }} />
            <ul>
                {
                    getCinemas.map(item =>
                        <li key={item.cinemaId} style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }} >
                            <span style={{ fontSize: '21px' }}>{item.name}</span>
                            <span >{item.address}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
