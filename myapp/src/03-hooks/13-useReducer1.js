import React, { useReducer } from 'react'

export default function App() {

    // 处理值
    const reducer = (prevState, action) => {
        console.log('reducer', prevState, action)
        switch (action.type) {
            case 'minus':
                return {
                    ...prevState,
                    count: --prevState.count
                }
            case 'add':
                return {
                    ...prevState,
                    count: ++prevState.count
                }
            default:
                return prevState
        }
    }

    // 外部的对象
    const intialState = {
        count: 0
    }

    const [state, dispatch] = useReducer(reducer, intialState)

    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: 'minus'
                })
            }}>-</button>
            {state.count}
            <button onClick={() => {
                dispatch({
                    type: 'add'
                })
            }}>+</button>
        </div>
    )
}
