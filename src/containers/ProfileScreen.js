import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import {THEME} from '../theme';
import ArrowBackIcon from '../components/Common/Icons/ArrowBackIcon';

const ProfileScreen = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{backgroundColor: THEME.MAIN_COLOR}}>
          <Text onPress={() => navigate('Login')}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

ProfileScreen.navigationOptions = () => ({
  headerBackTitle: null,
  title: 'Profile',
  headerBackImage: () => (
    <ArrowBackIcon
      color={'#fff'}
      width={14}
      height={24}
    />
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ProfileScreen;
