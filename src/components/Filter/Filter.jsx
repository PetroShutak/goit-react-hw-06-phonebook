import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name:
      <br />
      <input type="text" value={value} onChange={handleChange} placeholder="search..." />
    </label>
  );
};

export default Filter;


// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from 'redux/contactsSlice';
// import { getFilter } from 'redux/selectors';


// const Filter = () => {
//   const dispatch = useDispatch();
//   const value = useSelector(getFilter);

//   const handleChange = e => {
//     dispatch(setFilter(e.target.value));
//   };

//   return (
//     <label>
//       Find contacts by name:
//       <br />
//       <input
//         type="text"
//         value={value}
//         onChange={handleChange}
//         placeholder="search..."
//       />
//     </label>
//   );
// };

// export default Filter;
