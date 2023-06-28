import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <ul>
      <h2>Contact List</h2>
      {contacts.map(({ id, name, number }) => (
        <li
          key={id}
          name={name}
          id={id}
          number={number}
          onClick={() => dispatch(deleteContact(id))}
        >
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
