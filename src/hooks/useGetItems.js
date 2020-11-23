import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

const useGetItems = () => {
  let history = useHistory();
  const { getItems, setLoading, setError } = useContext(AppContext);

  const getResults = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
      );
      const result = await response.json();

      if (result.error) {
        setError(true);
        getItems(result.results);
        setLoading(false);
      } else {
        setLoading(false);
        setError(false);
        getItems(result.results);
        history.push(`/items?search=${query}`);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return {
    getResults,
  };
};

export default useGetItems;
