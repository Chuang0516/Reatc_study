import React, { useEffect, useState } from 'react'
import axios from 'axios'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import { connect } from 'react-redux'

function Cinemas(props) {

    const { cityName, list, history, getCinemaListAction } = props

    useEffect(() => {
        if (list.length === 0) {
            getCinemaListAction()
        }
    }, [list, getCinemaListAction])

    return (
        <div>
            <div style={{ overflow: 'hidden' }}>
                <div onClick={() => {
                    history.push('/city')
                }} style={{ float: 'left' }} >{cityName}</div>
                <div style={{ float: 'right' }} onClick={() => {
                    history.push('/cinemas/search')
                }} >搜索</div>
            </div>
            <ul>
                {
                    list.map(item =>
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

const mapStateToProps = (state) => {
    return {
        cityName: state.CityReducer.cityName,
        list: state.CinemaListReducer.list
    }
}

const mapDispatchToProps = {
    getCinemaListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)
