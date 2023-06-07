import React, { Component } from 'react'
import MRouter from './route/indexRouter'
import Tabbar from './components/Tabbar'
import '././views/css/App.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <MRouter>
                    <Tabbar></Tabbar>
                </MRouter>
            </div>
        )
    }
}
