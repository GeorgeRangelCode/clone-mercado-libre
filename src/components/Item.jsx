import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Item.scss';

const Item = ({ info, categories }) => {
  return (
    <div className="Item-container">
      <div className="Item-info" id={info.id}>
        <Link
          to={{
            pathname: `/items/${info.id}`,
            itemInfo: info,
            categories: categories,
          }}
        >
          <img src={info.picture} alt={info.title} />
        </Link>
        <div className="Item-general-info">
          <p className="Item-price">
            $ {info.price.amount}
            {info.price.decimals ? (
              <span className="Item-price-decimals">{info.price.decimals}</span>
            ) : null}
          </p>
          {info.free_shipping ? (
            <i className="Item-price-free-shipping" />
          ) : null}
          <Link
            className="Item-title"
            to={{
              pathname: `/items/${info.id}`,
              itemInfo: info,
              categories: categories,
            }}
          >
            <p>{info.title}</p>
          </Link>
        </div>
        <div className="Item-location">
          <p>{info.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
