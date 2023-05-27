import React, { useState } from 'react'

export default function App() {

    // useState 记忆函数，能够记忆状态
    const [count, setcount] = useState(0)

    return (
        <div>
            <button onClick={() => {
                setcount(count + 1)
            }}>add1</button>
            {count}
        </div>
    )
}
