import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import {
  faHome,
  faMoneyCheckAlt,
  faPlusCircle,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

import Home from '~/Screens/Home';
import Account from '~/Screens/Account';
import Report from '~/Screens/Report';
import More from '~/Screens/More';
import Create from '~/Screens/Create';
import Category from '~/Screens/Category';

const CreateStack = createStackNavigator(
  {
    Create: {
      screen: Create,
      navigationOptions: {
        headerTitle: 'Create',
      },
    },
    Category: {
      screen: Category,
      navigationOptions: {
        headerTitle: 'Category',
      },
    },
  },
  {
    initialRouteName: 'Create',
  },
);

const MainStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
      },
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarLabel: 'Account',
      },
    },
    Create: {
      screen: CreateStack,
      navigationOptions: {
        tabBarLabel: 'Create',
      },
    },
    Report: {
      screen: Report,
      navigationOptions: {
        tabBarLabel: 'Report',
      },
    },
    More: {
      screen: More,
      navigationOptions: {
        tabBarLabel: 'More',
      },
    },
  },
  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     tabBarButtonComponent: (props) => (
  //       <TabBarButton
  //         routeName={navigation.state.routeName}
  //         {...props}
  //       />
  //     ),
  //   }),
  //   initialRouteName: 'Home',
  // },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === 'Home') {
          iconName = faHome;
        } else if (routeName === 'Account') {
          iconName = faMoneyCheckAlt;
        } else if (routeName === 'Create') {
          iconName = faPlusCircle;
        } else if (routeName === 'Report') {
          iconName = faFileAlt;
        } else if (routeName === 'More') {
          iconName = faEllipsisH;
        }

        return <FontAwesomeIcon icon={iconName} size={25} color={tintColor} />;
      },
    }),

    tabBarOptions: {
      activeTintColor: '#005cc5',
      activeBackgroundColor: '#fff',
      keyboardHidesTabBar: false,
      tabStyle: {
        backgroundColor: '#fff',
      },
      labelStyle: {
        fontSize: 12,
      },
    },

    navigationOptions: {
      lazy: true,
    },
  },
);

export default MainStack;
