import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthLayer from '../navigation/AuthLayer';
import MainLayer from '../navigation/MainLayer';

const AppNavigator = createSwitchNavigator({
  Unauthorized: AuthLayer,
  Authorized: MainLayer,
}, {
  initialRouteName: 'Unauthorized',
  navigationOptions: () => ({
    headerForceInset: {top: 'never'},
  }),
});

export const AppNavigation = createAppContainer(AppNavigator);
