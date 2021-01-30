import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import InputField from '../components/AuthorizationScreen/InputField';
import SubmitButton from '../components/Common/CommonButton';

const window = Dimensions.get('window');

const AuthorizationScreen = () => {
  const {navigate} = useNavigation();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isMasked, setIsMasked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate('Main');
    }, 2000);
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
