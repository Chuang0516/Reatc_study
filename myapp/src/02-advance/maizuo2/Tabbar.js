import React, { Component } from 'react'

// export class Tabbar extends Component {

//     render() {
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.props.list.map(({ id, name }, index) =>
//                             <li key={id} className={this.props.currentIndex === index ? 'active' : ''} onClick={() => this.handleClick(index)} >{name}</li>
//                         )
//                     }
//                 </ul>
//             </div>
//         )
//     }

//     handleClick(index) {
//         this.props.event(index)
//     }
// }

export const Tabbar = (props) => {

    const handleClick = (index) => {
        props.event(index)
    }

    return (
        <div>
            <ul>
                {
                    props.list.map(({ id, name }, index) =>
                        <li key={id} className={props.currentIndex === index ? 'active' : ''} onClick={() => handleClick(index)} >{name}</li>
                    )
                }
            </ul>
        </div>
    )
}
