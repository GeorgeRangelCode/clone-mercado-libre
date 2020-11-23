import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Home = () => {
  const { state } = useContext(AppContext);
  console.log('🚀 ~ file: Home.jsx ~ line 6 ~ Home ~ state', state);

  return (
    <div className="Home">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
