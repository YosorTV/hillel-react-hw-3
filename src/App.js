import React, {useState, useEffect} from 'react';

import Wrapper from './Components/HOC/Wrapper';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactService from './ContactService';

const App = () => {
  // Function Create Contact Template
  const getContactTemplate = () => {
    return {
      name: '',
      surname: '',
      phone: '',
    };
  };
// Our local states
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(getContactTemplate())
// Getting contacts from Data
const getContacts = async () => {
  try {
    let dataContacts = await ContactService.get('/').then(({data}) => data);
    setContacts(dataContacts);
  } catch(err) {
    console.log(err)
  }
}
// getting contacts and watching for updates
useEffect(() => {
  getContacts()
},[contacts, currentContact])
// Function handling all input's
const handleInput = ({target}) => {
  const { name, value } = target;
  setCurrentContact({
    ...currentContact,
    [name]: value
  })
};
// Function choose a contact
const onContactSelect = (contact) => {
  setCurrentContact(contact)
};
// Function cleaning Form
const onClear = () => setCurrentContact(getContactTemplate())
// Function creating new contact on server
const createContact = async (contact) => {
  await ContactService.post('/', contact);
  getContacts();
};
// Function adding new contact
const addContact = (e) => {
  e.preventDefault(); 
  if( currentContact.name && currentContact.surname !== '') {
    onSave(currentContact);
    onClear();
  }
}
// Function updaiting contact on server
const updateContact = async (contact) => {
  await ContactService.put(`${contact.id}`, contact);
    return getContacts();
}
// Function delete contact from server
const onDelete = async (contact) => {
  await ContactService.delete(`${contact.id}`);
  getContacts();
  onClear();
}
// Function delete contact from UI side
const deleteContact = () => onDelete(currentContact);
// Function apply new contact
const onSave = (contact) => {
  contact.id 
    ? updateContact(contact)
    : createContact(contact)
};
  return (
  <Wrapper>
    <ContactList 
      contacts={contacts}
      onSelect={onContactSelect}
      onClear={onClear}
    />
    <ContactForm
      contact={currentContact}
      onDelete={deleteContact}
      onFormSubmit={addContact}
      handleInput={handleInput}
    />
    </Wrapper>
  );
}

export default App