import React from 'react'
import { Route, Redirect, Switch, NavLink } from 'react-router-dom'
import NowPlaying from './films/NowPlaying'
import Comingsoon from './films/Comingsoon'
import style from './css/Film.module.css'

console.log(style);

export default function Films() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/films/nowplaying' activeClassName={style['my-active']}>
                        正在上映
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/films/comingsoon' activeClassName={style['my-active']}>
                        即将上映
                    </NavLink>
                </li>
            </ul>
            <Switch>
                <Route path='/films/nowplaying' component={NowPlaying} />
                <Route path='/films/comingsoon' component={Comingsoon} />
                <Redirect from='/films' to='/films/nowplaying' />
            </Switch>
        </div>
    )
}
