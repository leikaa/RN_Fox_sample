import {
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {PERMISSIONS} from 'react-native-permissions';

import {SET_WEATHER_DATA} from './const';
import ErrorsHandler from '../../helpers/ErrorsHandler';
import HandleIosPermission from '../../helpers/HandleIosPermission';

const FORECAST_API_TOKEN = 'e36dbb64b85904ada69b3f59b09fdbc8';
const FORECAST_API_BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${FORECAST_API_TOKEN}&units=metric&lang=ru`;

const getWeatherForecastByCityName = async (cityName) => {
  try {
    return fetch(`${FORECAST_API_BASE_URL}&q=${cityName}`)
      .then(response => response.json())
      .catch(e => {
        console.log('getWeatherForecastByCityName: ', e);
        ErrorsHandler('Не удалось получить погодные данные по названию города');
      });
  } catch (e) {
    console.log('getWeatherForecastByCityName: ', e);
    ErrorsHandler('Не удалось получить погодные данные по названию города');
  }
};

export const getCityWeatherForecast = (cityToSearch, setIsLoading) => (
  async dispatch => {
    const forecastData = await getWeatherForecastByCityName(cityToSearch);
    if (forecastData && +(forecastData.cod) === 200) {
      dispatch({type: SET_WEATHER_DATA, forecastData});
    } else if (forecastData) {
      ErrorsHandler('Город не найден');
    }
    setIsLoading(false);
  }
);

const getWeatherForecastByCoords = async (lat, long) => {
  try {
    return fetch(`${FORECAST_API_BASE_URL}&lat=${lat}&lon=${long}`)
      .then(response => response.json())
      .catch(e => {
        console.log('getWeatherForecastByCoords: ', e);
        ErrorsHandler('Не удалось получить погодные данные по координатам');
      });
  } catch (e) {
    console.log('getWeatherForecastByCoords: ', e);
    ErrorsHandler('Не удалось получить погодные данные по координатам');
  }
};

const getUserLocationWeatherForecast = (setIsLoading) => (
  dispatch => {
    Geolocation.getCurrentPosition(
      async position => {
        const coords = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };

        const forecastData = await getWeatherForecastByCoords(coords.lat, coords.long);
        if (forecastData && +(forecastData.cod) === 200) {
          dispatch({type: SET_WEATHER_DATA, forecastData});
        } else if (forecastData) {
          ErrorsHandler('Город не найден');
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
  }
);

export const getCoordsWeatherForecast = setIsLoading => (
  async dispatch => {
    if (Platform.OS !== 'ios') {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          dispatch(getUserLocationWeatherForecast(setIsLoading));
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
      const locationWhenInUsePermission = await HandleIosPermission(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      const locationAlwaysPermission = await HandleIosPermission(PERMISSIONS.IOS.LOCATION_ALWAYS);
      if (locationWhenInUsePermission || locationAlwaysPermission) {
        dispatch(getUserLocationWeatherForecast(setIsLoading));
      } else {
        setIsLoading(false);
        ErrorsHandler('Чтобы получить прогноз погоды в текущем месте, необходим доступ к определению локации устройства', 'Уведомление');
      }
    }
  }
);
