import React, { Component } from 'react'

export default class APP extends Component {
  state = {
    isShow: true,
  }

  render() {
    return (
      <div>
        APP
        <Navbar
          title='首页'
          cb={() => {
            this.setState({
              isShow: !this.state.isShow,
            })
          }}
        />
        {this.state.isShow && <Sidebar />}
      </div>
    )
  }
}

interface IProps {
  title: string
  cb: () => void
}

class Navbar extends Component<IProps, any> {
  render() {
    return (
      <div>
        navbar-{this.props.title}
        <button
          onClick={() => {
            this.props.cb()
          }}
        >
          click
        </button>
      </div>
    )
  }
}

class Sidebar extends Component {
  render() {
    return <div>sidebar</div>
  }
}
