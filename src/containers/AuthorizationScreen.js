import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import {THEME} from '../theme';

const AuthorizationScreen = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Authorization screen</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{backgroundColor: THEME.MAIN_COLOR}}>
          <Text onPress={() => navigate('Authorized')}>Sign in</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AuthorizationScreen;
