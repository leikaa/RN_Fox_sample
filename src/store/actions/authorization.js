import {RootData} from '../../entity/rootData';
import ErrorsHandler from '../../helpers/ErrorsHandler';
import {userInfo} from './profile';

export const authorizeUser = (login, password, navigate, setIsLoading) => (
  dispatch => {
    if (RootData.login === login && RootData.password === password) {
      // timeout for server response delay imitation (auth check)
      return setTimeout(() => {
        dispatch(userInfo(login, navigate, setIsLoading));
      }, 1500);
    }

    return ErrorsHandler('Введен неверный адрес электронной почты или пароль');
  }
);
