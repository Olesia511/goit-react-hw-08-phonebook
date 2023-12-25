import { ContactCard } from 'components/ContactCard/ContactCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterContacts } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = useSelector(selectFilterContacts);

  return (
    <>
      <ul style={{ maxWidth: 680 }}>
        {filterContacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};
