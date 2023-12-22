import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContact, deleteContact, fetchContacts } from './operations';
import { fetchLogoutUsers } from '../auth/operations';

Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '12px',
  opacity: 0.9,
  borderRadius: '5px',
  messageMaxLength: 110,
  fontFamily: 'Quicksand',
  fontSize: '20px',
  closeButton: false,
  useIcon: false,
  failure: {
    background: '#251c1c',
    textColor: '#d6d0d0',
  },
});

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const doubleContact = state.contacts.items.find(
          el =>
            el.name.trim().toLowerCase() ===
            action.payload.name.trim().toLowerCase()
        );

        if (doubleContact) {
          Notify.failure(`${action.payload.name} is already in contacts!`);
          return;
        }
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchLogoutUsers.fulfilled, state => {
        state.contacts.items = [];
        state.contacts.isLoading = false;
        state.contacts.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
