import React, { useEffect } from 'react'

function _connect(cb, obj) {

    const value = cb()

    return (MyComponent) => (props) => (
        <div>
            <MyComponent {...value} {...props} {...obj} />
        </div>
    )
}

function NotFound(props) {

    useEffect(() => {
        console.log(props)
    }, [props])

    return (
        <div>
            404 not found
        </div>
    )
}

export default _connect(() => {
    return {
        a: 1
    }
}, {
    a() { }
})(NotFound)