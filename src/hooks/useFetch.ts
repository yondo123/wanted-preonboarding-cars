import { useEffect, useReducer } from 'react';
import { Api } from '../types';

const reducer = (state: any, action: { type: string; data?: object; error?: object }) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'SUCCESS':
      return { isLoading: false, data: action.data, error: null };
    case 'FAIL':
      return { isLoading: false, data: null, error: action.error };
    default:
      return new Error(`not exist actionType : ${action.type}`);
  }
};

const useFetch = (apiCallback: any) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    data: Object,
    error: null,
  });

  useEffect(() => {
    dispatch({ type: 'LOADING' });
    apiCallback()
      .then((response: { data: Api }) => {
        dispatch({ type: 'SUCCESS', data: response.data.payload });
      })
      .catch((error: object) => {
        dispatch({ type: 'FAIL', error });
      });
  }, []);

  return state;
};

export default useFetch;
