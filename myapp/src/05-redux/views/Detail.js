import React, { useEffect } from 'react'
import store from '../redux/store'

export default function Detail(props) {
    // console.log(props.match.params.filmId)
    // console.log(props.location.query.id)
    // console.log(props.location.state.id) 

    useEffect(() => {
        // console.log('create')

        store.dispatch({
            type: 'hide-tabbar'
        })

        return () => {
            // console.log('destory')
            store.dispatch({
                type: 'show-tabbar'
            })
        }
    }, [])

    return (
        <div>Detail</div>
    )
}
