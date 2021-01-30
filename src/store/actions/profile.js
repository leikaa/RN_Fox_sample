import {
  SET_USER_DATA,
  CLEAR_ALL_DATA,
} from './const';

export const userInfo = (login, navigate, setIsLoading) => (
  dispatch => {
    dispatch({type: SET_USER_DATA, email: login});
    setIsLoading(false);
    navigate('Authorized');
  }
);

export const clearAllData = () => (
  dispatch => dispatch({type: CLEAR_ALL_DATA})
);
