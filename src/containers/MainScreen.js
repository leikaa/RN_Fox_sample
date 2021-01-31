import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';
import {MaterialIndicator} from 'react-native-indicators';

import {THEME} from '../theme';
import UserAccountIcon from '../components/Common/Icons/UserProfileIcon';
import {setCurrentLocationCoords} from '../store/actions/main';

const MainScreen = ({navigation}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const forecastData = useSelector(state => state.Main.forecastData);

  const headerUserIconPress = () => navigate('Profile');

  useEffect(() => {
    navigation.setParams({
      headerUserIconPress: headerUserIconPress,
    });

    dispatch(setCurrentLocationCoords(setIsLoading));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content_container}>
        {
          isLoading &&
          <MaterialIndicator color={THEME.MAIN_COLOR}/>
        }
        {
          !isLoading && Object.keys(forecastData).length === 0 &&
          <Text>No data</Text>
        }
        {
          !isLoading && Object.keys(forecastData).length !== 0 &&
          <Text>Main screen</Text>
        }
      </View>
    </SafeAreaView>
  );
};

MainScreen.navigationOptions = ({navigation}) => ({
  headerBackTitle: null,
  title: 'Прогноз погоды',
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
