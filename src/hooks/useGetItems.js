import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

const useGetItems = () => {
  let history = useHistory();
  const { setData, setLoading, setError } = useContext(AppContext);

  const getResults = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api-clone-mercado-libre.vercel.app/api/items?q=${query}`
      );
      const data = await response.json();
      if (data.error) {
        setError(true);
        setLoading(false);
        setData(data);
      } else {
        setLoading(false);
        setError(false);
        setData(data);
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
