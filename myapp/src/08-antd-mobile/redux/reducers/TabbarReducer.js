const TabbarReducer = (prevState = {
    show: true
}, action) => {
    switch (action.type) {
        case 'hide-tabbar':
            return {
                ...prevState,
                show: false
            }
        case 'show-tabbar':
            return {
                ...prevState,
                show: true
            }
        default:
            return prevState
    }

    return prevState
}

export default TabbarReducer