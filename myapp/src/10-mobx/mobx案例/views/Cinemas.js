import React, { useEffect } from 'react'
import store from '../mobx/store'
import { autorun, unsubscribe } from 'mobx'
import { Observer } from 'mobx-react'

export default function Cinemas() {

 
    useEffect(() => {
        // if (store.list.length === 0) {
        //     store.getList()
        // }

        // const unsubscribe = autorun(() => {
        //     console.log(store.list, store.isTabbarShow)

        //     setCinemaList(store.list)
        // })

        return () => {
            // 取消订阅
            // unsubscribe()
        }
    })

    return (
        <div>
            <Observer>
                {
                    () => (
                        <ul>
                            {
                                store.list.map(item =>
                                    <li key={item.cinemaId} style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }} >
                                        <span style={{ fontSize: '21px' }}>{item.name}</span>
                                        <span >{item.address}</span>
                                    </li>
                                )
                            }
                        </ul>
                    )
                }
            </Observer>
        </div>
    )
}
