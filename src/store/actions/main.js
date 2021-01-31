import {
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import {SET_WEATHER_DATA} from './const';
import ErrorsHandler from '../../helpers/ErrorsHandler';

const getWeatherForecastByCoords = async (lat, long) => {
  try {
    const FORECAST_API_TOKEN = 'e36dbb64b85904ada69b3f59b09fdbc8';
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${FORECAST_API_TOKEN}`)
      .then(response => response.json())
      .catch(e => {
        console.log('getWeatherForecastByCoords: ', e);
        ErrorsHandler('Не удалось получить погодные данные');
      });
  } catch (e) {
    console.log('getWeatherForecastByCoords: ', e);
    ErrorsHandler('Не удалось получить погодные данные');
  }
};

const getUserLocationWeatherForecast = (setIsLoading, dispatch) => {
  Geolocation.getCurrentPosition(
    async position => {
      const coords = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };

      const forecastData = await getWeatherForecastByCoords(coords.lat, coords.long);
      if (forecastData) {
        // console.log('forecastData', forecastData);
        dispatch({type: SET_WEATHER_DATA, forecastData});
      }
      setIsLoading(false);
    },
    (e) => {
      console.log('getUserLocationWeatherForecast: ', e);
      setIsLoading(false);
      ErrorsHandler('Не удалось определить координаты устройства');
    },
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );
};

export const setCurrentLocationCoords = setIsLoading => (
  async dispatch => {
    if (Platform.OS !== 'ios') {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getUserLocationWeatherForecast(setIsLoading, dispatch);
        } else {
          setIsLoading(false);
          ErrorsHandler('Чтобы получить прогноз погоды в текущем месте, необходим доступ к определению локации устройства', 'Уведомление');
        }
      } catch (e) {
        console.log('setCurrentLocationCoords: ', e);
        setIsLoading(false);
        ErrorsHandler('Произошла непредвиденная ошибка при получении разрешения на определение локации устройства');
      }
    } else {
      getUserLocationWeatherForecast(setIsLoading, dispatch);
    }
  }
);
