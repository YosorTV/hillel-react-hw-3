import React, { Component } from 'react'
import Contact from './Contact';
import classes from './ContactList.module.scss'

export default class ContactList extends Component {
  render() {
    const {contacts} = this.props;
    return (
      <ul className={classes.usersList}>
      <h2>Contacts</h2>
      {contacts.map(contact => (
        <Contact
          contact={contact}
          key={contact.id}
          onSelect={this.props.onSelect}
        ></Contact>
      )
    )}
        <button onClick={this.props.onClear}>Add</button>
      </ul>
    )
  }
}
