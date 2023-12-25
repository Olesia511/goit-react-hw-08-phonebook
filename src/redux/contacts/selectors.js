import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectFilter = state => state.filter.filter;

export const selectError = state => state.contacts.contacts.error;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    if (filter !== '') {
      return items.filter(el => el.name.toLowerCase().includes(filter));
    }
    return items;
  }
);
