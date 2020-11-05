import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {setContacts, changeContact, addContact, setSelectedContact, resetSelectedContact, deleteContact } from './Store/Actions/actions';
import ContactService from './ContactService';

import Wrapper from './Components/HOC/Wrapper';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';

function App ({contacts, 
  selectedContact, 
  setContacts, 
  changeContact,
  addContact,
  setSelectedContact, 
  resetSelectedContact, 
  deleteContact}) {
  
// getting contacts and watching for updates
useEffect(() => {
  ContactService.get('/').then(({ data }) => setContacts(data));
}, [setContacts]);
// Function choose a contact
const onContactSelect = contact => setSelectedContact(contact);
// Function creating new contact on server
const createContact = contact => {
  ContactService.post('', contact).then(({data}) => addContact(data));
}

const handleInput = ({target}) => {
  const { name, value } = target;
  setSelectedContact({
      ...selectedContact,
      [name]: value,
  })
}

// Function updaiting contact on server
const updateContact = contact => {
  ContactService.put(contact.id, contact);
    changeContact(contact);
}
// Function delete contact from server
const onDelete = contact => {
  ContactService.delete(contact.id);
    deleteContact(contact.id);
}
// Function delete contact from UI side
const removeContact = () => onDelete(selectedContact);
// Function apply new contact
const onSave = contact => {
  contact.id 
    ? updateContact(contact)
    : createContact(contact)
};

const onClear = () => resetSelectedContact();

  return (
  <Wrapper>
    <ContactList 
      contacts={contacts}
      onSelect={onContactSelect}
      onClear={onClear}
    />
    <ContactForm
      key={selectedContact.id}
      contact={selectedContact}
      onDelete={removeContact}
      handleInput={handleInput}
      onSave={onSave}
    />
    </Wrapper>
  );
}

function mapStateToProps({contacts, selectedContact}){
  return {contacts, selectedContact}
}

const mapDispatchToProps = {
  setContacts,
  changeContact,
  addContact,
  setSelectedContact,
  resetSelectedContact,
  deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(App);