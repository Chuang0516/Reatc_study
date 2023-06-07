import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'createcoder',
    storage,
    whitelist: ['CityReducer']
}

const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose
// 利用store来保存状态（state）
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))

const persistor = persistStore(store)

export {
    store,
    persistor
}