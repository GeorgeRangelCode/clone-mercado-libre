import { useState, useEffect } from 'react';

const useGetItem = ({ id }) => {
  const [item, setItem] = useState({});
  const [error, setError] = useState({ error: false, text: '' });

  useEffect(() => {
    fetch(`https://api-clone-mercado-libre.vercel.app/api/items/${id}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          let text;
          switch (response.status) {
            case 404:
              text = 'El artículo que buscas no existe.';
              break;
            case 500:
              text =
                'No se ha encontrado el artículo que estas buscando. Intente más tarde';
              break;
            default:
              text = 'Algo salió mal. Intente más tarde';
              break;
          }
          setError({ error: true, text: text });
        } else {
          setItem(response.item);
        }
      })
      .catch((error) => {
        console.error(error);
        setError({
          error: true,
          text: 'Algo salió mal. Intente más tarde',
        });
      });
  }, [id]);

  return {
    item,
    error,
  };
};

export default useGetItem;
