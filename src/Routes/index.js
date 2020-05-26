import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Start from '~/Screens/Start';
import Login from '~/Screens/Login';
import Home from '~/Screens/Home';
import OtherScreen from '~/Screens/OtherScreen';

const AuthLoadingScreen = createStackNavigator(
  {
    Start: {
      screen: Start,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    // mode: 'modal',
    initialRouteName: 'Start',
  },
);

const AuthStack = createStackNavigator(
  {
    // Namespace: {
    //   screen: Namespace,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
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
        header: null,
      },
    },
    OtherScreen: {
      screen: OtherScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const Routes = createAppContainer(
  createStackNavigator(
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
