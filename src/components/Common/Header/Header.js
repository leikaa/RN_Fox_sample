import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import {THEME} from '../../../theme';
import UserAccountIcon from '../Icons/UserProfileIcon';

const Header = ({title}) => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.icon_profile}>
        <TouchableOpacity
          onPress={() => navigate('Profile')}
        >
          <UserAccountIcon
            color={'#fff'}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.MAIN_COLOR,
  },
  icon_profile: {
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginLeft: 40,
  },
});

export default Header;
