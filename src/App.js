import React, {Component} from 'react';

import Wrapper from './Components//HOC/Wrapper';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactService from './ContactService';

export default class App extends Component {
  constructor(){
    super();
      this.state = {
        currentContact: this.getContactTemplate(),
        contacts: [],
    }; 
  }
// Getting contacts from Data
componentDidMount(){
  this.getContacts()
};
// Function achive data from server
getContacts = async () => {
  try {
    let dataContacts = await ContactService.get('/').then(({data}) => data);
      this.setState({ contacts: dataContacts });
  } catch(err) {
    console.log(err)
  }
}
// Function Create Contact Template
getContactTemplate() {
  return {
    name: '',
    surname: '',
    phone: '',
  };
};
// Function handling all input's
handleInput = ({target}) => {
  const value = target.value;
  this.setState({
    currentContact:{
      ...this.state.currentContact,
      [target.name]: value
    }
  })
};
// Function choose a contact
onContactSelect = (contact) => {
  this.setState({
    currentContact: contact,
  });
};
// Function cleaning Form
onClear = () => {
  this.setState({
    currentContact: this.getContactTemplate()
  })
};
// Function creating new contact on server
createContact = async (contact) => {
  await ContactService.post('/', contact);
  this.getContacts();
};
// Function adding new contact
addContact = (e) => {
  e.preventDefault(); 
  if( this.state.currentContact.name && this.state.currentContact.surname !== '') {
    this.onSave(this.state.currentContact);
    this.onClear();
  }
}
// Function updaiting contact on server
updateContact = async (contact) => {
  await ContactService.put(`${contact.id}`, contact);
    return this.getContacts();
}
// Function delete contact from server
onDelete = async (contact) => {
  await ContactService.delete(`${contact.id}`);
  this.getContacts();
  this.onClear();
}
// Function delete contact from UI side
deleteContact = () => this.onDelete(this.state.currentContact);
// Function apply new contact
onSave = (contact) => {
  contact.id 
    ? this.updateContact(contact)
    : this.createContact(contact)
  this.getContacts();
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