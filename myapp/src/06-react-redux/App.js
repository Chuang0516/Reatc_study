import React, { Component } from 'react'
import MRouter from './route/indexRouter'
import Tabbar from './components/Tabbar'
import '././views/css/App.css'
import store from './redux/store'
import { connect } from 'react-redux'

class App extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <MRouter>
                    {
                        this.props.isShow && <Tabbar />
                    }
                </MRouter>
            </div>
        )
    }
}


export default connect((state) => {
    console.log(state)
    return {
        isShow: state.TabbarReducer.show
    }
})(App)