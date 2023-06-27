import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'

export default class Detail extends Component<RouteComponentProps> {
  componentDidMount() {
    console.log((this.props.match.params as any).myid)
  }

  render() {
    return <div>Detail</div>
  }
}
