// import PropTypes from 'prop-types';
// import { List, ListItem, ContactName, ContactNumber, DeleteButton } from './ContactList.styled';
// import { FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <ul>
      <h2>Contact List</h2>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}:</p>
          <p>{number}</p>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;


// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
