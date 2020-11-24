import React, { useContext } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Loading from '../components/Loading';
import NoData from '../components/NoData';
import useGetItem from '../hooks/useGetItem';
import AppContext from '../context/AppContext';
import '../styles/containers/Detail.scss';

const Detail = ({ match }) => {
  const { state } = useContext(AppContext);
  const id = match.params.id;
  const { item, error } = useGetItem({ id });

  return (
    <div className="Home">
      <div className="ItemsList-container">
        <Breadcrumb categories={state.data.categories} />
      </div>
      {error.error ? (
        <NoData message={error.text} />
      ) : item.id ? (
        <div className="Item-detail-container">
          <div className="Item-detail-first-row">
            <div className="Item-detail-img-container">
              <img src={item.picture} alt={item.title} />
            </div>
            <div className="Item-detail-info">
              <p className="Item-detail-condition-sold">
                {`${item.condition === 'new' ? 'Nuevo' : 'Usado'} - ${
                  item.sold_quantity
                } vendidos`}
              </p>
              <h5 className="Item-detail-title">{item.title}</h5>
              <h3 className="Item-detail-price">
                $ {Intl.NumberFormat('de-DE').format(item.price.amount)}
              </h3>
              <button className="Item-detail-buy">Comprar</button>
            </div>
          </div>
          <div className="Item-detail-description">
            <h5 className="Item-detail-description-title">
              Descripción del producto
            </h5>
            <p className="Item-detail-description-text">{item.description}</p>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Detail;
