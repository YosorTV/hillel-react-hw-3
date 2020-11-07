import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { setSelectedContact, resetSelectedContact, deleteContact, getContacts, saveContact } from './Store/Actions/actions';
import ContactService from './ContactService';

import Wrapper from './Components/HOC/Wrapper';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';

function App ({contacts, 
  selectedContact, 
  setSelectedContact, 
  resetSelectedContact, 
  deleteContact,
  getContacts,
  saveContact
}) {  
// getting contacts and watching for updates
useEffect(() => {
  getContacts();
},[getContacts]);
// Function choose a contact
const onContactSelect = contact => setSelectedContact(contact);
// Function delete contact from server
const onDelete = contact => {
  ContactService.delete(contact.id);
    return deleteContact(contact.id);
}
// Function delete contact from UI side
const removeContact = () => onDelete(selectedContact);
// Function apply new contact
const onSave = contact => saveContact(contact);

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
      onSave={onSave}
    />
    </Wrapper>
  );
}

const mapStateToProps = ({contacts, selectedContact}) => ({contacts, selectedContact});

const mapDispatchToProps = {
  setSelectedContact,
  resetSelectedContact,
  deleteContact,
  getContacts,
  saveContact
}

export default connect(mapStateToProps, mapDispatchToProps)(App);