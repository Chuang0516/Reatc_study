import React, { useRef, useState } from 'react'

export default function App() {

    const [list, setList] = useState([])

    const mytext = useRef()

    const handleAdd = () => {
        console.log(mytext.current.value)

        setList([...list, mytext.current.value])

        // 清空输入框
        mytext.current.value = ''
    }

    const handleDel = (index) => {
        console.log(index)
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }

    return (
        <div>
            <input type="text" ref={mytext} />
            <button onClick={handleAdd}>add</button>

            <ul>
                {
                    list.map((item, index) =>
                        <li key={item}>
                            {item}
                            <button onClick={() => handleDel(index)}>del</button>
                        </li>
                    )
                }
            </ul>

            {
                !list.length && <div>暂无代办事项</div>
            }
        </div>
    )
}
