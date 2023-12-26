import { useDispatch } from 'react-redux';
import { BtnDeleteContact, CardItem } from './ContactCard.styled';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactCard = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <CardItem id={id}>
      <p style={{ fontWeight: '500', fontSize: '20px' }}>
        {name}: {number}
      </p>
      <BtnDeleteContact
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </BtnDeleteContact>
    </CardItem>
  );
};
