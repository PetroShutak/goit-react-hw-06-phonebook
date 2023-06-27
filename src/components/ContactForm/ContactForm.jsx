// import React, { useState } from 'react';
// import { nanoid } from 'nanoid';


const ContactForm = () => {


 
  return (
    <div>
      <h1>Phonebook</h1>
      <form >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          required
          value
          onChange
        />
        <label htmlFor="number">Number:</label>
        <input
          type="tel"
          name="number"
          required
          value
          onChange
        />
        <br />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};



export default ContactForm;
