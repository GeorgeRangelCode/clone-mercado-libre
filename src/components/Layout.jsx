import React from 'react';
import useGetItems from '../hooks/useGetItems';
import Search from './Search';

const Layout = ({ children }) => {
  const { getResults } = useGetItems();

  return (
    <div className="Main">
      <Search onSubmit={getResults} />
      {children}
    </div>
  );
};

export default Layout;
