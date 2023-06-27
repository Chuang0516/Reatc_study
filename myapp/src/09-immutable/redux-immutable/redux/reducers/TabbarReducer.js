import { fromJS } from "immutable"

const TabbarReducer = (prevState = fromJS({
    show: true
}), action) => {
    switch (action.type) {
        case 'hide-tabbar':
            return prevState.set('show', false)
        case 'show-tabbar':
            return prevState.set('show', true)
        default:
            return prevState
    }

    return prevState
}

export default TabbarReducer