import React from 'react'

export default function Sidebar(props) {

    let { bg, position } = props

    let obj1 = {
        left: 0
    }

    let obj2 = {
        right: 0
    }

    let obj = {
        background: bg,
        width: '120px',
        position: 'fixed'
    }

    let styleObj = position === 'left' ? { ...obj, ...obj1 } : { ...obj, ...obj2 }

    return (
        <div style={styleObj}>
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    )
}
