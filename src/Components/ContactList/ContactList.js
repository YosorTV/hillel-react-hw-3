import React, { Component } from 'react'
import Contact from './Contact';
import classes from './ContactList.module.scss'

export default class ContactList extends Component {
  render() {
    const allContacts = this.props.contacts;
    console.log('allContacts: ', allContacts);
    return (
      <ul className={classes.usersList}>
        <h2>Contacts</h2>
        {
        allContacts.map(contact => {
          return(
            <Contact
              key={contact.id}
              name={contact.name}
              surname={contact.surname}
              onSelect={this.props.onSelect}
            />
            )
          })
        }
        <button onClick={this.props.onClear}>Add</button>
      </ul>
    )
  }
}
