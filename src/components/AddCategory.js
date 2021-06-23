/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    (inputValue.trim().length > 2) && setCategories(cats => [inputValue,...cats]);


    setInputValue('');
    
  }


  return (
    <form onSubmit={ handleSubmit }>
      <h3>AddCategory</h3>
      <input 
        type='text'
        value={ inputValue }
        onChange={ handleInputChange } 
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;