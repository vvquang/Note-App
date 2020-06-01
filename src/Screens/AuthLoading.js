import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import styled from 'styled-components';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AuthLoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');

      // This will switch to the Main screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      navigation.navigate(userToken ? 'Main' : 'Auth');
    };

    bootstrapAsync();
  }, []);

  return (
    <StyledView>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </StyledView>
  );
};

export default AuthLoadingScreen;
