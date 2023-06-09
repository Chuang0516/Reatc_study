const CinemaListReducer = (prevState = {
    list: []
}, action) => {
    switch (action.type) {
        case 'change-list':
            return {
                ...prevState,
                list: action.payload
            }
        default:
            return prevState
    }
}

export default CinemaListReducer