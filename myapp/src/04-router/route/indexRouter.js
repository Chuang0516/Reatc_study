import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import NowPlaying from '../views/films/NowPlaying'
import Detail from '../views/Detail'
import Login from '../views/Login'

function isAuth() {
    return localStorage.getItem('token')
}


export default class indexRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/films' component={Films} />

                    <Route path='/cinemas' component={Cinemas} />
                    <Route path='/center' render={(props) => {
                        return isAuth() ? <Center {...props} /> : <Redirect to='/login' />
                    }} />
                    <Route path='/detail/:filmId' component={Detail} />
                    <Route path='/login' component={Login} />

                    {/* <Route path='/detail' component={Detail} /> */}
                    {/* 模糊匹配 */}
                    {/* <Redirect from='/' to='/films' /> */}
                    {/* 精确匹配 */}
                    <Redirect from='/' to='/films' exact />
                    <Route component={NotFound} />
                </Switch>
                {this.props.children}
            </Router>
        )
    }
}
