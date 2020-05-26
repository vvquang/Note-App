import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, Text } from 'react-native';

import { NavigationActions, StackActions } from 'react-navigation';
// import { Spinner } from '../components';

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    flex: 1,
  },
};

const Start = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const redirectTo = (page, params) => {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: page, params })],
      })
    );
  };

  // useEffect(() => {
  //   AsyncStorage.getItem('user', (err, result) => {
  //     if (result) {
  //       setIsLoading(false);
  //       redirectTo('Main');
  //     } else redirectTo('AuthLoading');
  //   });
  // }, []);

  return (
    <View style={styles.containerStyle}>
      {/* <Spinner visible={this.state.isLoading} /> */}

      <Text>{isLoading ? 'Loading' : 'Loaded'}</Text>
    </View>
  );
};

export default Start;
