import React from 'react';
// import PropType from 'prop-types';
// import { Label, Input } from './Filter.styled';


const Filter = ({ value, onChange }) => {

  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <label>
      Find contacts by name:
      <br/>
      <input type="text" value={value} onChange={handleChange} placeholder='search...'/>
    </label>
  );
};

// Filter.propTypes = {
//   value: PropType.string.isRequired,
//   onChange: PropType.func.isRequired,
// };

export default Filter;