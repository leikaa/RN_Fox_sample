export const initialState = {
  email: '',
};

export function Profile(state = initialState, payload) {
  switch (payload.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        email: payload.email,
      };
    case 'CLEAR_ALL_DATA':
      return {
        ...state,
        email: '',
      };

    default:
      return state;
  }
}
