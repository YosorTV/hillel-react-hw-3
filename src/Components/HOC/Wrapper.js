import React, { Component, Fragment } from 'react'

export default class Wrapper extends Component {
  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}
