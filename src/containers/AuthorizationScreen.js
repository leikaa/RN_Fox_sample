import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {useDispatch} from 'react-redux';

import InputField from '../components/AuthorizationScreen/InputField';
import SubmitButton from '../components/Common/CommonButton';
import ErrorsHandler from '../helpers/ErrorsHandler';
import isEmailValid from '../helpers/IsEmailValid';
import {authorizeUser} from '../store/actions/authorization';

const window = Dimensions.get('window');

const AuthorizationScreen = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isMasked, setIsMasked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = () => {
    if (login.length <= 0 && password.length <= 0) {
      return ErrorsHandler('Вам необходимо указать адрес электронной почты и пароль');
    }

    if (login.length <= 0) {
      return ErrorsHandler('Вам необходимо указать адрес электронной почты');
    }

    if (!isEmailValid(login)) {
      return ErrorsHandler('Введен неверный адрес электронной почты');
    }

    if (password.length <= 0) {
      return ErrorsHandler('Вам необходимо указать пароль');
    }

    setIsLoading(true);
    dispatch(authorizeUser(login, password, navigate, setIsLoading));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <InputField
          placeholder={'Email'}
          value={login}
          setValue={setLogin}
          icon={'email'}
          keyboardType={'email-address'}
        />
        <InputField
          placeholder={'Пароль'}
          value={password}
          setValue={setPassword}
          icon={'lock'}
          displayInfoIcon={'true'}
          isMasked={isMasked}
          setMasked={setIsMasked}
        />
      </View>

      <View style={styles.sign_in_btn_container}>
        <SubmitButton
          title={'Авторизоваться'}
          onPress={onSubmitHandler}
          isLoading={isLoading}
          style={styles.sign_in_btn}
        />
      </View>
    </SafeAreaView>
  );
};

AuthorizationScreen.navigationOptions = () => ({
  headerShown: false,
  headerBackTitle: null,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  sign_in_btn_container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
  },
  sign_in_btn: {
    width: window.width - 40,
  },
});

export default AuthorizationScreen;
