export const initialState = {
  forecastData: {},
};

export function Main(state = initialState, payload) {
  switch (payload.type) {
    case 'SET_WEATHER_DATA':
      return {
        ...state,
        forecastData: payload.forecastData,
      };

    default:
      return state;
  }
}
