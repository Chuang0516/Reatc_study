import React, { useCallback, useState } from 'react'

export default function App() {

    const [text, settext] = useState('')

    const handleChange = useCallback((event) => {
        console.log('handleChange', event.target.value)

        settext(event.target.value)
    }, [])

    const [list, setList] = useState([])

    const handleAdd = useCallback(() => {
        console.log(text)

        setList([...list, text])

        // 清空输入框
        settext('')
    }, [text, list])

    const handleDel = useCallback((index) => {
        console.log(index)
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }, [list])

    return (
        <div>
            <input type="text" onChange={handleChange} value={text} />
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
