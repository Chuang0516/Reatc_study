import { fromJS } from "immutable"

const CityReducer = (prevState = {
    cityName: '北京'
}, action) => {
    console.log(action)

    switch (action.type) {
        case 'change-city':
            return fromJS(prevState).set('cityName', action.payload).toJS()
        default:
            return prevState
    }

    return prevState
}

export default CityReducer