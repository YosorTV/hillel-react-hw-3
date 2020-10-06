import React, { Component } from 'react'
import classes from './ContactList.module.scss';

export default class Contact extends Component {
  render() {
    const {contact, onSelect} = this.props;
    return (
      <li className={classes.users} onClick={() => onSelect(contact)}>
        <i className="fas fa-user"></i>
        <h3>{`${contact.name} ${contact.surname}`}</h3>
      </li>
    )
  }
}
