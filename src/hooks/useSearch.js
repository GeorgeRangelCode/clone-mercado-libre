import { useState } from 'react';

const useSearch = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(search);
  };

  const HandleSearch = (e) => {
    setSearch(e.target.value);
  };

  return {
    handleSubmit,
    HandleSearch,
    search,
  };
};

export default useSearch;
