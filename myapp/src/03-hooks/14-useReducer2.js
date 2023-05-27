import React, { useContext, useReducer } from 'react'

const intialState = {
    a: '11111',
    b: '22222'
}

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'change-a':
            return {
                ...prevState,
                a: action.value
            }
        case 'change-b':
            return {
                ...prevState,
                b: action.value
            }
        default:
            return prevState
    }
}

const GlobalContext = React.createContext()

export default function App() {

    const [state, dispatch] = useReducer(reducer, intialState)

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                <Child1 />
                <Child2 />
                <Child3 />
            </div>
        </GlobalContext.Provider>
    )
}

function Child1() {

    const { dispatch } = useContext(GlobalContext)

    return (
        <div style={{ background: 'red' }}>
            <button onClick={() => {
                dispatch({
                    type: 'change-a',
                    value: '222222'
                })
            }}>改变a</button>
            <button onClick={() => {
                dispatch({
                    type: 'change-b',
                    value: '111111'
                })
            }}>改变b</button>
        </div>
    )
}

function Child2() {

    const { state } = useContext(GlobalContext)

    return (
        <div style={{ background: 'yellow' }}>child2-{state.a}</div>
    )
}

function Child3() {

    const { state } = useContext(GlobalContext)

    return (
        <div style={{ background: 'gray' }}>child3-{state.b}</div>
    )
}
