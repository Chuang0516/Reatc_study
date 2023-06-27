import React, { useEffect } from 'react'
import store from '../mobx/store'

export default function Detail(props) {
    console.log(props.match.params.filmId)
    // console.log(props.location.query.id)
    // console.log(props.location.state.id) 

    useEffect(() => {
        console.log('create')
        store.changeHide()

        return () => {
            console.log('destory')
            store.changeShow()
        }
    }, [])

    return (
        <div>Detail</div>
    )
}
