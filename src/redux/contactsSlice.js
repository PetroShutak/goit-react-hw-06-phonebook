import { createSlice } from '@reduxjs/toolkit';
import { CONTACTS } from './constants';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: CONTACTS,
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    addContact: (state, action) => {
      const { name } = action.payload;
      const isExistingContact = state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (isExistingContact) {
        return;
      }
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setContacts, addContact, deleteContact, setFilter } =
  contactsSlice.actions;

export default contactsSlice.reducer;
