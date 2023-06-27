import React, { useEffect, useState } from 'react'
import store from '../redux/store'
import axios from 'axios'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Cinemas(props) {

    const [cityName, setcityName] = useState(store.getState().CityReducer.cityName)
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

    return (
        <div>
            <div style={{ overflow: 'hidden' }}>
                <div onClick={() => {
                    props.history.push('/city')
                }} style={{ float: 'left' }} >{cityName}</div>
                <div style={{ float: 'right' }} onClick={() => {
                    props.history.push('/cinemas/search')
                }} >搜索</div>
            </div>
            <ul>
                {
                    cinemaList.map(item =>
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
