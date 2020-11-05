export const SET_CONTACTS_ACTION = 'SET_CONTACTS_ACTION';
export const setContacts = (payload) => ({type: SET_CONTACTS_ACTION, payload})

export const CHANGE_CONTACT_ACTION = 'CHANGE_CONTACT_ACTION';
export const changeContact = (payload) => ({type: CHANGE_CONTACT_ACTION, payload})

export const ADD_CONTACT_ACTION = 'ADD_CONTACT_ACTION';
export const addContact = (payload) => ({type: ADD_CONTACT_ACTION, payload})

export const SET_SELECTED_CONTACT_ACTION = 'SET_SELECTED_CONTACT_ACTION';
export const setSelectedContact = (payload) => ({type: SET_SELECTED_CONTACT_ACTION, payload})

export const RESET_SELECTED_CONTACT_ACTION = 'RESET_SELECTED_CONTACT_ACTION';
export const resetSelectedContact = (payload) => ({type: RESET_SELECTED_CONTACT_ACTION, payload})

export const DELETE_CONTACT_ACTION = 'DELETE_CONTACT_ACTION';
export const deleteContact = (payload) => ({type: DELETE_CONTACT_ACTION, payload})