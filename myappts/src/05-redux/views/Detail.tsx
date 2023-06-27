import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import store from '../redux/store'

export default class Detail extends Component<RouteComponentProps> {
  componentDidMount() {
    console.log((this.props.match.params as any).myid)
    store.dispatch({
      type: 'hide',
    })
  }

  componentWillUnmount(): void {
    store.dispatch({
      type: 'show',
    })
  }

  render() {
    return <div>Detail</div>
  }
}
