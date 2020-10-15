import React from 'react'
import Contact from './Contact';
import classes from './ContactList.module.scss'

const ContactList = ({contacts, onSelect, onClear}) => {
  return (
    <ul className={classes.usersList}>
      <h2>Contacts</h2>
      {contacts.map(contact => (
        <Contact
          contact={contact}
          key={contact.id}
          onSelect={onSelect}
        ></Contact>
      ))}
      <button onClick={onClear}>Add</button>
    </ul>
  )
}

export default ContactList;