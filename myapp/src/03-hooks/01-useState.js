import React, { useState } from 'react'

export default function App() {

    const [name, setName] = useState('createcoder')
    const [age, setAge] = useState(100)

    return (
        <div>
            <button onClick={() => {
                // console.log(name)
                setName('xiaoming')
                setAge(18)
            }}>click</button>
            App-{name}-{age}
        </div>
    )
}
