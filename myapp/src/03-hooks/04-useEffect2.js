import React, { useEffect, useState } from 'react'

export default function App() {

    const [name, setname] = useState('cratecoder')

    useEffect(() => {
        setname(name.substring(0, 1).toUpperCase() + name.substring(1))
        // 第二个参数为依赖项，若数组中的值变化时，就会重新执行回调
    }, [name])

    return (
        <div>
            app-{name}
            <button onClick={() => {
                setname('xiaoming')
            }}>click</button>
        </div>
    )
}
