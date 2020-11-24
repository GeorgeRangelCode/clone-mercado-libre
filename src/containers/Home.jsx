import React, { useContext } from 'react';
import ItemsList from '../components/ItemsList';
import Loading from '../components/Loading';
import NoData from '../components/NoData';
import AppContext from '../context/AppContext';
import '../styles/containers/Home.scss';

const Home = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="Home">
      {!!state.loading && state.loading && <Loading />}

      {!state.loading && !!state.data.items && state.data.items.length > 0 && (
        <ItemsList
          categories={state.data.categories}
          items={state.data.items}
        />
      )}

      {!state.loading &&
        !!state.data.items &&
        state.data.items.length === 0 && (
          <NoData
            message={
              'No encontramos resultados relacionados a tú busqueda. Prueba buscando con otras palabras.'
            }
          />
        )}
    </div>
  );
};

export default Home;
