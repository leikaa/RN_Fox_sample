import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import InfoShowIcon from '../Common/Icons/InfoShowIcon';
import InfoHideIcon from '../Common/Icons/InfoHideIcon';

const InputFieldDisplayInfoIcon = ({isMasked, onPress}) => {
  const displayInfoFieldIcon = isMasked ? <InfoShowIcon onPress={onPress}/> :
    <InfoHideIcon onPress={onPress}/>;

  return (
    <View style={styles.display_info_icon}>
      {displayInfoFieldIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  display_info_icon: {
    position: 'absolute',
    top: 24,
    right: 15,
    zIndex: 15,
  },
});

export default InputFieldDisplayInfoIcon;
