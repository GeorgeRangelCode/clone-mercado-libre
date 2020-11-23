import { useState } from 'react';
import { initialState } from '../iniialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const setData = async (payload) => {
    setState({
      ...state,
      data: payload,
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
    setData,
    setLoading,
    setError,
    state,
  };
};

export default useInitialState;
