import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {AppNavigation} from '../navigation/AppNavigation';

const AppWithNavigationState = () => (
  <View style={styles.safe_area}>
    <StatusBar barStyle='dark-content'/>
    <AppNavigation/>
  </View>
);

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AppWithNavigationState;
