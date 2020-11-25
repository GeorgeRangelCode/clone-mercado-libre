import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import useSearch from '../hooks/useSearch';
import '../styles/components/Search.scss';

const Search = ({ onSubmit }) => {
  const { handleSubmit, HandleSearch } = useSearch({ onSubmit });

  return (
    <div className="Search">
      <form className="Search-container" onSubmit={handleSubmit}>
        <Link to={'/'}>
          <img src={logo} alt="Logo Mercado Libre" width="53" height="36" />
        </Link>
        <input
          className="Search-input"
          type="text"
          placeholder="Nunca dejes de buscar"
          onKeyUp={HandleSearch}
        />
        <button
          aria-label="Buscar Articulos"
          type="submit"
          className="Search-btn"
          data-testid="Search-icon"
        />
      </form>
    </div>
  );
};

export default Search;
