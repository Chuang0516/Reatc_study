import axios from 'axios'
import React, { Component } from 'react'

export default class Comingsoon extends Component {

    componentDidMount() {
        axios.get('/ajax/mostExpected?limit=10&offset=0&token=&optimus_uuid=23C8E8A0FD2511ED82E30F36889418A3B68D055ECF064C6CB3A5DCAF142D5361&optimus_risk_level=71&optimus_code=10')
            .then(res => {
                // console.log(res)
            })
    }

    render() {
        return (
            <div>Comingsoon</div>
        )
    }
}
