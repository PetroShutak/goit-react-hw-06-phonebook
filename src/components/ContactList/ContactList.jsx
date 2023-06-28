// import PropTypes from 'prop-types';
// import { List, ListItem, ContactName, ContactNumber, DeleteButton } from './ContactList.styled';
// import { FaTrash } from 'react-icons/fa';

const ContactList = ({ contacts, onDeleteContact }) => {

return (

  <ul>
    <h2>Contact List</h2>
    {/* {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}:</p>
        <p>{number}</p>
        <button type="button" onClick={() => onDeleteContact(id)}>
        </button>
      </li>
    ))} */}
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
