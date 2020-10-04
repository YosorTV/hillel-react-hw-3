import React, {Component} from 'react';

import Wrapper from './Components//HOC/Wrapper';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';

export default class App extends Component {
  state = {
    currentContact: this.getTemplateContact(),
    allContacts: [],
  }

  componentDidMount() {
    this.setState({
      allContacts:this.getLocalStateFromData()
    })
  }

  getTemplateContact() {
    return {
      name: "",
      surname: "",
      phone: "",
      mail: "" 
    }
  }

  saveState(contact) {
    localStorage.setItem('contacts', JSON.stringify(contact))
  }

  getLocalStateFromData() {
    const data = localStorage.getItem('contacts');
      return data ? JSON.parse(data) : [];
  }

  handleInput = ({ target }) => {
    this.setState({
        currentContact:{
          ...this.state.currentContact,
          [target.name]: target.value
        }
    })
  }

  createContact = (contact) => {
    contact.id = Date.now();
    this.setState((state) => {
      const contacts = [...state.contacts, contact];
        this.saveState(contact);
          return {
            contacts,
            currentContact: contact,
          }
    })
  }

  updateContact = (contact) => {
    this.setState((state) => {
      const contacts = state.contacts.map((el) => {
        return el.id === contact.id ? contact : el
      });
        this.saveState(contacts);
        return {
          contacts,
          currentContact: contact
        }
    })
  }

  onClear = () => {
    this.setState({
      currentContact: this.getTemplateContact()
    })
  }

  onSave = (contact) => {
    if(contact.id) {
      this.updateContact(contact)
    } else {
      this.createContact(contact)
    }
    this.saveState(contact);
  }

  onSelect = (contact) => {
    this.setState({
      currentContact: contact
    })
  }

  onDelete = (contact) => {
    this.setState((state) => {
      const contacts = state.allContacts.filter((el) => el !== contact);
        this.saveState(contacts);
        return {
          contacts,
          currentContact:this.getTemplateContact()
        }
    })
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.onSave(this.state.currentContact);
  }

  onFormChange = changes => {
    this.setState({
      currentContact:{
        ...this.state.currentContact,
        ...changes
      }
    })
  }

  render(){
    return (
      <Wrapper>
        <ContactList 
          contacts={this.state.allContacts}
          onClear={this.onClear}
          onSelect={this.onSelect}
        />
        <ContactForm
          contact={this.state.currentContact}
          onChangeInput={this.handleInput}
          onFormSubmit={this.onFormSubmit}
          onDelete={this.onDelete}
          onChange={this.onFormChange}
        />
      </Wrapper>
    );
  }
}