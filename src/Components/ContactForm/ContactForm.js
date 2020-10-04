import React, { Component } from 'react'
import classes from './ContactForm.module.scss'

export default class ContactForm extends Component {
  render() {
    return (
      <form className={classes.ContactForm} onSubmit={this.props.onFormSubmit}>
        <svg 
        viewBox="0 0 500 500" 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        className={classes.petal1}>
    <path 
      id="blob" 
      d="M430.5,279.5Q362,309,350.5,344Q339,379,305.5,405Q272,431,228.5,426Q185,421,150.5,394.5Q116,368,88.5,332.5Q61,297,70,252.5Q79,208,84.5,158Q90,108,133,81.5Q176,55,224,63.5Q272,72,321.5,73.5Q371,75,384,124Q397,173,448,211.5Q499,250,430.5,279.5Z" 
      fill="rgb(186,192,197)">
    </path>
  </svg>
        <div className={classes.ContactFormWrapper}>

          <label htmlFor="name">Name:
          <input 
            type="text" 
            id="name"
            name="name"
            placeholder="Enter name"
            value={this.props.contact.name}
            onChange={this.props.onChangeInput}
          />
          </label>

          <label htmlFor="surname">Surname:
          <input 
            type="text" 
            id="surname"
            name="surname"
            placeholder="Enter surname"
            value={this.props.contact.surname}
            onChange={this.props.onChangeInput}
          />
          </label>

          <label htmlFor="phone">Phone:
          <input 
            type="tel" 
            id="phone"
            name="phone"
            placeholder="Enter number"
            value={this.props.contact.phone}
            onChange={this.props.onChangeInput}
          />
          </label>

          <label htmlFor="mail">Email:
          <input 
            type="email" 
            id="mail"
            name="mail"
            placeholder="Enter email"
            value={this.props.contact.mail}
            onChange={this.props.onChangeInput}
          />
          </label>
        
      </div>
      <div className={classes.btnWrapper}>
        <button type="submit">Save</button>
        {
          this.props.contact.id ? 
            <button type="button" onClick={this.props.onDelete}>Delete</button> :
          ''
        }
      </div>
        
  <svg 
    viewBox="0 0 500 500" 
    xmlns="http://www.w3.org/2000/svg" 
    width="100%" 
    className={classes.petal2}>
    <path 
      id="blob" 
      d="M430.5,279.5Q362,309,350.5,344Q339,379,305.5,405Q272,431,228.5,426Q185,421,150.5,394.5Q116,368,88.5,332.5Q61,297,70,252.5Q79,208,84.5,158Q90,108,133,81.5Q176,55,224,63.5Q272,72,321.5,73.5Q371,75,384,124Q397,173,448,211.5Q499,250,430.5,279.5Z" 
      fill="#7C8790">
    </path>
  </svg>
      </form>
    )
  }
}
