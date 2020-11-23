import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Search.scss';
import logo from '../assets/logo.png';

const Search = () => {
  return (
    <div className="Search">
      <form className="Search-container">
        <Link to={'/'}>
          <img src={logo} alt="Logo Mercado Libre" />
        </Link>
        <input
          className="Search-input"
          type="text"
          placeholder="Nunca dejes de buscar"
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
