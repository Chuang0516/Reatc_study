import React, { Component } from 'react'
import { Map } from 'immutable'

const obj = {
    name: 'createcoder',
    age: 100
}

const oldImmuObj = Map(obj)

// set 修改 immutable
const newImmuObj = oldImmuObj.set('name', 'xiaoming')

// console.log(oldImmuObj, newImmuObj)

// get 获取 immutable
console.log(oldImmuObj.get('name'), newImmuObj.get('name'))

// immutable ==> 普通对象
console.log(oldImmuObj.toJS(), newImmuObj.toJS())

// export default class App extends Component {

//     state = {
//         info: Map({
//             name: 'createcoder',
//             age: 18
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={() => {
//                     this.setState({
//                         info: this.state.info.set('name', '小明').set('age', '100')
//                     })
//                 }}>click</button>
//                 {
//                     this.state.info.get('name')
//                 }
//                 --------
//                 {
//                     this.state.info.get('age')
//                 }
//             </div>
//         )
//     }
// }


export default class App extends Component {

    state = {
        info: {
            name: 'createcoder',
            age: 18
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    const old = Map(this.state.info)
                    const newImmu = old.set('name', 'xiaoming').set('age', 100)
                    this.setState({
                        info: newImmu.toJS()
                    })
                }}>click</button>
                {
                    this.state.info.name
                }
                --------
                {
                    this.state.info.age
                }
            </div>
        )
    }
}