import React from 'react';
import '../styles/components/Breadcrumb.scss';

const Breadcrumb = ({ categories }) => {
  return (
    <ul className="Breadcrumb-container">
      {categories
        ? categories.map((category, index) => (
            <li className="Breadcrumb" key={index}>
              {category}
              {index !== categories.length - 1 ? <i /> : null}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Breadcrumb;
