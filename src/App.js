import React, {Component} from 'react';

import Wrapper from './Components//HOC/Wrapper';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';

export default class App extends Component {
  constructor(){
    super();
      this.state = {
        currentContact: this.getContactTemplate(),
        contacts: [],
    }; 
  }

componentDidMount(){
    this.setState({
        contacts: this.getStateFromData()
    });
};

getContactTemplate() {
    return {
      name: '',
      surname: '',
      phone: '',
      mail: ''
    };
};

handleInput = ({target}) => {
  const value = target.value;
  this.setState({
    currentContact:{
      ...this.state.currentContact,
      [target.name]: value
    }
  })
};

onContactSelect = (contact) => {
  this.setState({
    currentContact: contact,
  });
};

onClear = () => {
  this.setState({
    currentContact: this.getContactTemplate()
  })
};

onDelete = (contact) => {
  this.setState((state) => {
    const contacts = state.contacts.filter((el) => el !== contact);
      this.saveState(contacts);
        return {
          contacts,
          currentContact: this.getContactTemplate()
        };
    });
};

deleteContact = () => {
  return this.onDelete(this.state.currentContact);
}

onSave = (contact) => {
    contact.id 
      ? this.updateContact(contact)
      : this.createContact(contact)
    this.saveState(contact);
};

addContact = (e) => {
  e.preventDefault(); 
  if( this.state.currentContact.name && this.state.currentContact.surname !== '') {
    return this.onSave(this.state.currentContact);
  }
}

createContact(contact) {
  contact.id = Date.now();
    this.setState((state) => {
      const contacts = [...state.contacts, contact];
        this.saveState(contacts);
          return {
            contacts,
            currentContact: contact,
        };
    });
};

updateContact(contact) {
  this.setState((state) => {
    const contacts = state.contacts.map((el) => {
      return el.id === contact.id ? contact : el
    })
      this.saveState(contacts);
        return {
          contacts,
          currentContact: contact,
      };
    });
};

saveState(contacts) {
  return localStorage.setItem('contacts', JSON.stringify(contacts));
};

getStateFromData() {
  const data = localStorage.getItem('contacts');
    return data ? JSON.parse(data) : [];
};

render(){
  return (
    <Wrapper>
      <ContactList 
        contacts={this.state.contacts}
        onSelect={this.onContactSelect}
        onClear={this.onClear}
      />
      <ContactForm
        contact={this.state.currentContact}
        onDelete={this.deleteContact}
        onFormSubmit={this.addContact}
        handleInput={this.handleInput}
      />
      </Wrapper>
    );
  }
}