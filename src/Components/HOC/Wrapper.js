import React, { Component } from 'react'
import classes from './Wrapper.module.scss'

export default class Wrapper extends Component {
  render() {
    return (
      <div className={classes.Wrapper}>
        {this.props.children}
      </div>
    )
  }
}
