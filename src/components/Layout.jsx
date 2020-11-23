import React from 'react';
import Search from './Search';

const Layout = ({ children }) => (
  <div className="Main">
    <Search />
    {children}
  </div>
);

export default Layout;
