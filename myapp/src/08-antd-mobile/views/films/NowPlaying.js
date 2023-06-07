import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useHistory, withRouter } from 'react-router-dom'
import { List, Image, InfiniteScroll } from 'antd-mobile'

export default function NowPlaying(props) {

    const [list, setlist] = useState([])

    const [hasMore, sethasMore] = useState(true)

    const count = useRef(0)

    // useEffect(() => {
    //     axios({
    //         url: 'https://m.maizuo.com/gateway?cityId=610100&pageNum=1&pageSize=10&type=1&k=7848653',
    //         method: 'GET',
    //         headers: {
    //             'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16845510655359732638351361" }',
    //             'X-Host': 'mall.film-ticket.film.list'
    //         }
    //     }).then(({ data }) => {
    //         setlist(data.data.films)
    //         console.log(data.data.films)
    //     })
    // }, [])

    const history = useHistory()

    const handleChangePage = (id) => {
        // window.location.href = `#/detail/${id}`


        // 1、动态路由传参
        props.history.push(`/detail/${id}`)
        // history.push(`/detail/${id}`)

        // 2、query传参
        // history.push({ pathname: '/detail', query: { id: id } })

        // 3、state传参
        // history.push({ pathname: '/detail', state: { id: id } })
    }

    const loadMore = () => {
        console.log('到底了')
        count.current++
        sethasMore(false)
        axios({
            url: `https://m.maizuo.com/gateway?cityId=610100&pageNum=${count.current}&pageSize=10&type=1&k=7848653`,
            method: 'GET',
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16845510655359732638351361" }',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(({ data }) => {
            setlist([...list, ...data.data.films])
            sethasMore(data.data.films.length > 0)
        })
    }


    return (
        <div>
            <List>
                {
                    list.map(item =>
                        <List.Item
                            key={item.filmId}
                            prefix={
                                <Image
                                    src={item.poster}
                                    height={100}
                                    width={65}
                                    fit='cover'
                                />
                            }
                            description={
                                <>
                                    <div>观众评分：{item.grade ? `${item.grade}分` : '暂无'}</div>
                                    <div style={{ width: '260px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        主演：
                                        {
                                            item.actors.map((actor, index) => actor.name + ' ')
                                        }
                                    </div>
                                    <div>
                                        {item.nation} | {item.runtime}分钟
                                    </div>
                                </>
                            }
                        >
                            {item.name}
                        </List.Item>
                    )
                }
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
    )
}