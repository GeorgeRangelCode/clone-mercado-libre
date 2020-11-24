import React from 'react';
import Breadcrumb from './Breadcrumb';
import Item from './Item';
import '../styles/components/ItemsList.scss';

const ItemsList = ({ categories, items }) => {
  return (
    <div className="ItemsList-container">
      <Breadcrumb categories={categories} />
      {items.slice(0, 4).map((item, idx) => (
        <Item key={idx} info={item} categories={categories} />
      ))}
    </div>
  );
};

export default ItemsList;
