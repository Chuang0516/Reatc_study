import { observable, configure, action, runInAction } from 'mobx'
import axios from 'axios'
configure({
    enforceActions: 'always'
})

const store = observable({
    isTabbarShow: true,
    list: [],
    cityName: '北京',
    changeShow() {
        this.isTabbarShow = true
    },
    changeHide() {
        this.isTabbarShow = false
    },
    getList() {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6642720',
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16845510655359732638351361", "bc": "110100" }',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            runInAction(() => {
                this.list = res.data.data.cinemas
            })
        }).catch(err => {
            console.log(err)
        })
    }
}, {
    changeShow: action,
    changeHide: action
})

// class Store {
//     @observable isTabbarShow = true
//     @observable list = []

//     @action changeShow() {
//         this.isTabbarShow = true
//     }

//     @action changeHide() {
//         this.isTabbarShow = false
//     }
// }

// const store = new Store()

export default store