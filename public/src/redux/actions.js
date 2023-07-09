export const addContact = contact => {
  return {
    type: 'CONTACTS/ADD_TO_CONTACT',
    payload: contact,
  };
};

export const removeContact = contact => {
  return {
    type: 'CONTACTS/REMOVE_FROM_CONTACT',
    payload: contact,
  };
};
