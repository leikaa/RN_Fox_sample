import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import MailIcon from '../Common/Icons/MailIcon';
import LockIcon from '../Common/Icons/LockIcon';

const InputFieldIcon = ({icon, color}) => {
  const fieldIcon = icon === 'email' ? <MailIcon color={color}/> : <LockIcon color={color}/>;

  return (
    <View style={styles.icon}>
      {fieldIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 20,
    left: 15,
    zIndex: 15,
  },
});

export default InputFieldIcon;
