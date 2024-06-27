import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './Reducer';

const initialState = {
  currentUser: null,
  openLogin: false,
  loading: false,
  alert: { open: false, severity: 'info', message: '' },
  profile: { open: false, file: null, photoURL: '' },
  images: [],
};

const Context = createContext(initialState);

export const useValue = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString) {
      try {
        const currentUser = JSON.parse(currentUserString);
        dispatch({ type: 'UPDATE_USER', payload: currentUser });
      } catch (error) {
        console.error('Failed to parse currentUser from localStorage', error);
      }
    }
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
