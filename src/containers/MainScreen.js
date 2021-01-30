import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import UserAccountIcon from '../components/Common/Icons/UserProfileIcon';

const MainScreen = ({navigation}) => {
  const {navigate} = useNavigation();

  const headerUserIconPress = () => navigate('Profile');

  useEffect(() => {
    navigation.setParams({
      headerUserIconPress: headerUserIconPress,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content_container}>
        <Text>Main screen</Text>
      </View>
    </SafeAreaView>
  );
};

MainScreen.navigationOptions = ({navigation}) => ({
  headerBackTitle: null,
  title: 'Weather forecast',
  headerLeft: () => (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 40,
        width: 50,
        alignItems: 'center',
        marginLeft: 8,
        flexDirection: 'row',
      }}
      onPress={navigation.getParam('headerUserIconPress')}>
      <UserAccountIcon
        color={'#fff'}
      />
    </TouchableOpacity>
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content_container: {
    flex: 1,
  },
});

export default MainScreen;
