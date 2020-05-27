import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '~/Screens/Login';
import Home from '~/Screens/Home';
import AuthLoading from '~/Screens/AuthLoading';
import Other from '~/Screens/Other';

const AuthLoadingScreen = createStackNavigator(
  {
    AuthLoading: {
      screen: AuthLoading,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    // mode: 'modal'
    initialRouteName: 'AuthLoading',
  },
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const MainStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    Other: {
      screen: Other,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Main: MainStackNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default Routes;
