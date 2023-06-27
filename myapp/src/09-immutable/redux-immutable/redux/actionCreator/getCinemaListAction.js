import axios from "axios"


// redux-thunk
// function getCinemaListAction() {

//     return (dispatch) => {
//         axios({
//             url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6642720',
//             headers: {
//                 'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16845510655359732638351361", "bc": "110100" }',
//                 'X-Host': 'mall.film-ticket.cinema.list'
//             }
//         }).then(res => {
//             dispatch({
//                 type: 'change-list',
//                 payload: res.data.data.cinemas
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     }
// }

// redux-promise
function getCinemaListAction() {

    return axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6642720',
        headers: {
            'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16845510655359732638351361", "bc": "110100" }',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res => {
        return {
            type: 'change-list',
            payload: res.data.data.cinemas
        }
    }).catch(err => {
        console.log(err)
    })
}

export default getCinemaListAction