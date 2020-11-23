import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Search.scss';
import logo from '../assets/logo.png';
import useSearch from '../hooks/useSearch';

const Search = ({ onSubmit }) => {
  const { handleSubmit, HandleSearch } = useSearch({ onSubmit });

  return (
    <div className="Search">
      <form className="Search-container" onSubmit={handleSubmit}>
        <Link to={'/'}>
          <img src={logo} alt="Logo Mercado Libre" />
        </Link>
        <input
          className="Search-input"
          type="text"
          placeholder="Nunca dejes de buscar"
          onKeyUp={HandleSearch}
        />
        <button
          type="submit"
          className="Search-btn"
          data-testid="Search-icon"
        />
      </form>
    </div>
  );
};

export default Search;
