import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';

import {THEME} from '../../theme';

const CommonButton = ({onPress, style, isLoading, title}) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={onPress}
  >
    {
      isLoading ?
        <MaterialIndicator color='#fff'/>
        :
        <Text style={styles.button_title}>{title.toUpperCase()}</Text>
    }
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.MAIN_COLOR,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 150,
  },
  button_title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default CommonButton;
