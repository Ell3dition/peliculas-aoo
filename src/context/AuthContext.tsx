/* eslint-disable react/react-in-jsx-scope */
// definir como luce o que infomracion tendre aqui

import {createContext, useReducer} from 'react';
import {authReducer} from './authReducert';

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

// estado inicial

export const authInitialState: AuthState = {
  isLoggedIn: false,
  favoriteIcon: undefined,
  userName: undefined,
};

// lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logOut: () => void;
  changeIcon: (iconName: string) => void;
  changeName: (userName: string) => void;
}

// Crear el contexto

export const AuthContext = createContext({} as AuthContextProps);

// component proveedor del estado

export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => dispatch({type: 'signIn'});
  const logOut = () => dispatch({type: 'logOut'});
  const changeIcon = (iconName: string) =>
    dispatch({type: 'changeFavIcon', paylod: iconName});
  const changeName = (userName: string) =>
    dispatch({type: 'changeName', paylod: userName});

  return (
    <AuthContext.Provider
      value={{authState, signIn, logOut, changeIcon, changeName}}>
      {children}
    </AuthContext.Provider>
  );
};
