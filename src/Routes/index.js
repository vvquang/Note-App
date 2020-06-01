import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoadingStack from './AuthLoading.stack';
import AuthStack from './Auth.stack';
import MainStack from './Main.stack';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingStack,
      Main: MainStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default Routes;
