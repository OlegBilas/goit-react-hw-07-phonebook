import { List, Item, Name, Number } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  };

  return (
    <List>
      {filteredContacts().map(({ id, name, phone }) => (
        <Item key={id}>
          <Name>{name}:</Name>
          <Number>{phone}</Number>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
