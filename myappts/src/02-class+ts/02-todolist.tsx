import React, { Component, createRef } from 'react'

interface IState {
  text: string
  list: string[]
}

export default class App extends Component<any, IState> {
  state = {
    text: '',
    list: [],
  }

  myref = createRef<HTMLInputElement>()

  render() {
    return (
      <div>
        {/* <input type="text" value={this.state.text} onChange={(evt) => {
                this.setState({
                    text: evt.target.value
                })
            }} /> */}
        <input type='text' ref={this.myref} />
        <button
          onClick={() => {
            // 类型断言语法
            console.log((this.myref.current as HTMLInputElement).value)

            this.setState({
              list: [
                ...this.state.list,
                (this.myref.current as HTMLInputElement).value,
              ],
            })
          }}
        >
          click
        </button>

        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}
