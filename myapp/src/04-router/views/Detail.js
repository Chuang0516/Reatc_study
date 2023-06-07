import React, { useEffect } from 'react'

export default function Detail(props) {
    console.log(props.match.params.filmId)
    // console.log(props.location.query.id)
    // console.log(props.location.state.id) 

    useEffect(() => {
        console.log('create')
        return () => {
            console.log('destory')
        }
    }, [])

    return (
        <div>Detail</div>
    )
}
