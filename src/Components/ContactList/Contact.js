import React from 'react'
import classes from './ContactList.module.scss';

const Contact = ({contact, onSelect}) => {
  return (
    <li className={classes.users} onClick={() => onSelect(contact)}>
      <i className="fas fa-user"></i>
      <h3>{`${contact.name} ${contact.surname}`}</h3>
    </li>
  )
}

export default Contact