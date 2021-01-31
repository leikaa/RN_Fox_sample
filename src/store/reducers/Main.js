import moment from 'moment';
import 'moment/locale/ru';

export const initialState = {
  forecastData: {},
  forecastDateTime: '',
};

export function Main(state = initialState, payload) {
  switch (payload.type) {
    case 'SET_WEATHER_DATA':
      moment.locale('ru');

      return {
        ...state,
        forecastData: payload.forecastData,
        forecastDateTime: moment(new Date()).format('h:mm a, MMM DD'),
      };
    case 'CLEAR_ALL_DATA':
      return {
        ...state,
        forecastData: {},
        forecastDateTime: '',
      };

    default:
      return state;
  }
}
