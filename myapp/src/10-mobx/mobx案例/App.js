import React, { Component } from 'react'
import MRouter from './route/indexRouter'
import Tabbar from './components/Tabbar'
import '././views/css/App.css'
import { autorun } from 'mobx'
import store from './mobx/store'
import { inject, observer } from 'mobx-react'


const APP = inject('myStore')(observer(
    class App extends Component {

        state = {
            isShow: false
        }

        componentDidMount() {
            autorun(() => {
                console.log(store.isTabbarShow)
                this.setState({
                    isShow: store.isTabbarShow
                })
            })
            console.log(this.props.myStore)
        }

        render() {
            return (
                <div>
                    <MRouter>
                        {
                            this.state.isShow && <Tabbar></Tabbar>
                        }
                    </MRouter>
                </div>
            )
        }
    }))


export default APP
