import {createStackNavigator} from 'react-navigation-stack';

import {THEME} from '../theme';
import MainScreen from '../containers/MainScreen';
import ProfileScreen from '../containers/ProfileScreen';

const MainLayer = createStackNavigator({
    Main: {
      screen: MainScreen,
      navigationOptions: ({
        headerShown: false,
        headerBackTitle: null,
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({
        headerBackTitle: null,
      }),
    },
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: THEME.MAIN_COLOR,
      },
      headerTintColor: '#fff',
    },
  },
);

export default MainLayer;
