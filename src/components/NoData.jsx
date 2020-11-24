import React from 'react';
import '../styles/components/NoData.scss';

const NoData = ({ message }) => {
  return (
    <div className="NoData">
      <div className="NoData-content">
        <h4 className="NoData-title">Lo sentimos!</h4>
        <p className="NoData-text">{message}</p>
      </div>
    </div>
  );
};

export default NoData;
