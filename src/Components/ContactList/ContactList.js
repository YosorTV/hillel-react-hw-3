import React, { Component } from 'react'
import Contact from './Contact';

export default class ContactList extends Component {
  render() {
    const users = this.props.contacts;
    return (
      <div>
        {
        users.map(user => {
          return(
            console.log(user)
          )
        })
        }
        <button>Add</button>
      </div>
    )
  }
}
