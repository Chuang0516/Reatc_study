// 1、引入 redux
// 2、createStore
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose
// 利用store来保存状态（state）
const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))


// function createStore_1(reducer) {

//     const list = []

//     let state = reducer(undefined, {})

//     function subscribe(callback) {
//         list.push(callback)
//     }

//     function dispatch(action) {
//         state = reducer(state, action)
//         for (let i in list) {
//             list[i] && list[i]()
//         }
//     }

//     function getState() {
//         return state
//     }

//     return {
//         subscribe,
//         dispatch,
//         getState
//     }
// }


export default store