import React, { useState } from 'react';
import searchBooks from '../services/searchBooks'
import './InputForm.css'

interface Props {
  onSearch: (items: any[]) => void;
}

const InputForm: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await searchBooks(query);
      onSearch(response.items);
    } catch (error) {
      console.error(error);
      onSearch([]);
    }
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <form className = "input-form" onSubmit={handleSubmit}>
      <input className="user-input" type="text" value={query} onChange={handleQueryChange} />
      <button className ="submit-button" type="submit">Search</button>
    </form>
  );
};

export default InputForm;