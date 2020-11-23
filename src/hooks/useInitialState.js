import { useState } from 'react';
import { initialState } from '../iniialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const getItems = async (payload) => {
    setState({
      ...state,
      items: payload,
    });
  };

  const setLoading = (payload) => {
    setState({
      ...state,
      loading: payload,
    });
  };

  const setError = (payload) => {
    setState({
      ...state,
      error: payload,
    });
  };

  return {
    getItems,
    setLoading,
    setError,
    state,
  };
};

export default useInitialState;
