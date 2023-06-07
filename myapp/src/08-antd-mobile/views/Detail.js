import React, { useEffect } from 'react'
// import store from '../redux/store'
import { connect } from 'react-redux'
import { show, hide } from '../redux/actionCreator/TabbarActionCreator'

function Detail(props) {
    // console.log(props.match.params.filmId)
    // console.log(props.location.query.id)
    // console.log(props.location.state.id) 

    const { show, hide, match } = props

    useEffect(() => {
        // console.log('create')
        console.log(props);

        // store.dispatch({
        //     type: 'hide-tabbar'
        // })

        hide()

        return () => {
            // console.log('destory')
            // store.dispatch({
            //     type: 'show-tabbar'
            // })
            show()
        }
    }, [match.params.filmId, show, hide])

    return (
        <div>Detail</div>
    )
}

const mapDispatchToProps = {
    show,
    hide
}

// connect(属性，回调)
export default connect(null, mapDispatchToProps)(Detail)
