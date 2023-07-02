const initialState = {
    contacts: [],
    filters: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACTS / ADD_TO_CONTACT':
      console.log('action.type', action.type);
      return state;
    case 'CONTACTS/REMOVE_FROM_CONTACT':
      return state;
    default:
      return state;
  }
};

export default contactsReducer;
