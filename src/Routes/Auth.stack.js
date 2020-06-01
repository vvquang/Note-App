import { createStackNavigator } from 'react-navigation-stack';
import Login from '~/Screens/Login';

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

export default AuthStack;
