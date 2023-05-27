import React, { useState, useRef } from 'react'

export default function App() {

    // useState 记忆函数，能够记忆状态
    const [count, setcount] = useState(0)

    const mycount = useRef(0)

    let value = 0

    return (
        <div>
            <button onClick={() => {
                setcount(count + 1)
                mycount.current++
                value++
            }}>add1</button>
            {count}-{mycount.current}-{value}
        </div>
    )
}
