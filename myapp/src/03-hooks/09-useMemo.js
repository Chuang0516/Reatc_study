import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

export default function Cinema(props) {

    const [text, settext] = useState('')
    const [cinemas, setcinemas] = useState([])


    useEffect(() => {
        // axios请求数据
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6642720',
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16845510655359732638351361", "bc": "110100" }',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            setcinemas(res.data.data.cinemas)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const getCinemas = useMemo(() => {
        return cinemas.filter(({ name, address }) => name.toUpperCase().includes(text.toUpperCase()) || address.toUpperCase().includes(text.toUpperCase()))
    }, [text, cinemas])

    return (
        <div>
            <input type="text" value={text} onChange={(evt) => {
                settext(evt.target.value)
            }} />
            {
                getCinemas.map(item =>
                    <dl key={item['cinemaId']}>
                        <dt>{item['name']}</dt>
                        <dd>{item['address']}</dd>
                    </dl>
                )
            }
        </div>
    )
}
