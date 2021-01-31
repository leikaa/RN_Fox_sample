import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';
import {MaterialIndicator} from 'react-native-indicators';

import {THEME} from '../theme';
import UserAccountIcon from '../components/Common/Icons/UserProfileIcon';
import {setCurrentLocationCoords} from '../store/actions/main';

const window = Dimensions.get('window');

const MainScreen = ({navigation}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const forecastData = useSelector(state => state.Main.forecastData);
  const forecastDateTime = useSelector(state => state.Main.forecastDateTime);

  const headerUserIconPress = () => navigate('Profile');

  const getWeatherDescription = (weather) => weather.map(item => item.description).join(', ');

  const getWeatherIcons = (weather) => weather.map((item, index) => (
    <Image
      key={index.toString()}
      style={styles.weather_temp_section_icon}
      source={{uri: `https://openweathermap.org/img/w/${item.icon}.png`}}
      resizeMode='cover'
    />
  ));

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
          <View style={styles.weather_container}>
            <Text style={styles.weather_date_time}>{forecastDateTime}</Text>
            <Text style={styles.weather_location_name}>{forecastData.name}, {forecastData.sys.country}</Text>
            <View style={styles.weather_temp_section}>
              {
                getWeatherIcons(forecastData.weather)
              }
              <Text style={styles.weather_temp_section_deg}>{Math.round(forecastData.main.temp)} {'\u00b0'}C</Text>
            </View>
            <Text>Ощущается
              как {Math.round(forecastData.main.feels_like)} {'\u00b0'}C, {getWeatherDescription(forecastData.weather)}.</Text>
          </View>
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
      style={styles.header_user_icon}
      onPress={navigation.getParam('headerUserIconPress')}>
      <UserAccountIcon
        color={'#fff'}
      />
    </TouchableOpacity>
  ),
});

const styles = StyleSheet.create({
  header_user_icon: {
    flex: 1,
    height: 40,
    width: 50,
    alignItems: 'center',
    marginLeft: 8,
    flexDirection: 'row',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content_container: {
    flex: 1,
  },

  weather_container: {
    flex: 1,
    width: window.width - 40,
    alignSelf: 'center',
    marginVertical: 20,
  },
  weather_date_time: {
    fontSize: 18,
  },
  weather_location_name: {
    fontSize: 24,
    fontWeight: '700',
  },
  weather_temp_section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  weather_temp_section_icon: {
    height: 30,
    width: 30,
  },
  weather_temp_section_deg: {
    marginLeft: 15,
    fontSize: 32,
  },
});

export default MainScreen;
