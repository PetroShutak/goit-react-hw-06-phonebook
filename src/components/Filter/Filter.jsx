import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { FilterContainer, FilterInput } from './Filter.styled';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterContainer>
      Find contacts by name:
      <br />
      <FilterInput
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="search..."
      />
    </FilterContainer>
  );
};

export default Filter;
