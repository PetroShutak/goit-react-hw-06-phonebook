import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts } from 'redux/selectors';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';

const notify = {
  error: message => toast.error(message),
  success: message => toast.success(message),
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);


  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
  
    if (name.trim() !== '' && number.trim() !== '') {
      const isExistingContact = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
  
      if (isExistingContact) {
        toast.error(`${name} is already in contacts`);
        return;
      }
  
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };
  
      dispatch(addContact(newContact));
      setName('');
      setNumber('');
  
      notify.success(`${newContact.name} added to contacts`);
    }
  };
  

  return (
    <section>
    <ToastContainer />
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name:</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <Label htmlFor="number">Number:</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      <br />
      <Button type="submit">Add Contact</Button>
    </Form>
  </section>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onSubmit: PropTypes.func,
  
};

export default ContactForm;
