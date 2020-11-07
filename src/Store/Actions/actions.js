import ContactService from "../../ContactService";

const actionTypeCreator = type => payload => ({type, payload});

// actions
export const SET_CONTACTS_ACTION = 'SET_CONTACTS_ACTION';
export const setContacts = actionTypeCreator(SET_CONTACTS_ACTION)

export const CHANGE_CONTACT_ACTION = 'CHANGE_CONTACT_ACTION';
export const changeContact = actionTypeCreator(CHANGE_CONTACT_ACTION)

export const ADD_CONTACT_ACTION = 'ADD_CONTACT_ACTION';
export const addContact = actionTypeCreator(ADD_CONTACT_ACTION);

export const SET_SELECTED_CONTACT_ACTION = 'SET_SELECTED_CONTACT_ACTION';
export const setSelectedContact = actionTypeCreator(SET_SELECTED_CONTACT_ACTION);

export const RESET_SELECTED_CONTACT_ACTION = 'RESET_SELECTED_CONTACT_ACTION';
export const resetSelectedContact = actionTypeCreator(RESET_SELECTED_CONTACT_ACTION)

export const DELETE_CONTACT_ACTION = 'DELETE_CONTACT_ACTION';
export const deleteContact = actionTypeCreator(DELETE_CONTACT_ACTION);

// thunks
export const getContacts = () => dispatch => ContactService.get('/').then(({data}) => dispatch(setContacts(data)));

export const saveContact = contact => dispatch => {
//update contact
  const updateContact = (contact, dispatch) =>
    ContactService.put(contact.id, contact).then(({data}) => dispatch(changeContact(data)))
//save contact
  const createContact = (contact, dispatch) =>
    ContactService.post('', contact).then(({data}) => dispatch(addContact(data)))
// checking action type
  if (contact.id) updateContact(contact, dispatch);
  else createContact(contact, dispatch);
}
