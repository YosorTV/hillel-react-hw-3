import React, { Component, Fragment } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <h3>{this.props.contacts.name}</h3>
        <span>{this.props.contacts.surname}</span>
      </Fragment>
    )
  }
}
