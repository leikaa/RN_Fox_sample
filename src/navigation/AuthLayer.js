import {createStackNavigator} from 'react-navigation-stack';

import {THEME} from '../theme';
import AuthorizationScreen from '../containers/AuthorizationScreen';

const AuthLayer = createStackNavigator({
    Login: AuthorizationScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: THEME.MAIN_COLOR,
      },
      headerTintColor: '#fff',
    },
  },
);

export default AuthLayer;
