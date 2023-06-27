import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.css'

export default class Tabbar extends Component {
    render() {
        return (
            <div className={style.tabbar}>
                <ul>
                    <li>
                        {/* <a href="#/films">电影</a> */}
                        <NavLink to='/films' activeClassName={style['my-active']}>电影</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cinemas' activeClassName={style['my-active']}>影院</NavLink>
                    </li>
                    <li>
                        <NavLink to='/center' activeClassName={style['my-active']}>我的</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
