import { createStackNavigator } from 'react-navigation-stack';
import AuthLoading from '~/Screens/AuthLoading';

const AuthLoadingStack = createStackNavigator(
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

export default AuthLoadingStack;
