import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn' | 'logOut'}
  | {type: 'changeFavIcon'; paylod: string}
  | {type: 'changeName'; paylod: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        isLoggedIn: true,
        favoriteIcon: '',
        userName: 'marcos',
      };
    case 'logOut':
      return {
        isLoggedIn: false,
        favoriteIcon: undefined,
        userName: undefined,
      };

    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.paylod,
      };

    case 'changeName':
      return {
        ...state,
        userName: action.paylod,
      };

    default:
      return state;
  }
};
