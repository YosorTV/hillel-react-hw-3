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

componentDidMount(){
  this.getContacts()
};

getContacts = async () => {
  try {
    let dataContacts = await ContactService.get('/').then(({data}) => data);
      this.setState({ contacts: dataContacts });
  } catch(err) {
    console.log(err)
  }
}

getContactTemplate() {
    return {
      name: '',
      surname: '',
      phone: '',
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

createContact = async (contact) => {
  await ContactService.post('/', contact);
  this.getContacts();
};

addContact = (e) => {
  e.preventDefault(); 
  if( this.state.currentContact.name && this.state.currentContact.surname !== '') {
    this.onSave(this.state.currentContact);
    this.onClear();
  }
}

updateContact = async (contact) => {
  await ContactService.put(`${contact.id}`, contact);
  this.getContacts();
}


onDelete = async (contact) => {
  await ContactService.delete(`${contact.id}`);
  this.getContacts();
  this.onClear();
}

deleteContact = () => this.onDelete(this.state.currentContact);

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