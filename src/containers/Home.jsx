import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import ItemsList from '../components/ItemsList';
import Loading from '../components/Loading';
import NoData from '../components/NoData';
import AppContext from '../context/AppContext';
import '../styles/containers/Home.scss';

const Home = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <Helmet>
        <title>Challenge Clone Mercado Libre - Articulos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@georgedevcode" />
        <meta name="twitter:creator" content="@georgedevcode" />
        <meta name="twitter:title" content="Challenge Clone Mercado Libre" />
        <meta
          name="twitter:description"
          content="Challenge Clone Mercado Libre - Articulos"
        />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/848195619156086785/00fw0Hke_400x400.jpg"
        />
        <meta property="og:title" content="Challenge Clone Mercado Libre" />
        <meta
          property="og:description"
          content="Challenge Clone Mercado Libre"
        />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_images/848195619156086785/00fw0Hke_400x400.jpg"
        />
        <meta
          property="og:url"
          content="https://clone-mercado-libre-git-main.georgerangelcode.vercel.app/"
        />
        <meta property="og:site_name" content="Challenge Clone Mercado Libre" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="Home">
        {!!state.loading && state.loading && <Loading />}

        {!state.loading &&
          !!state.data.items &&
          state.data.items.length > 0 && (
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
    </>
  );
};

export default Home;
