import React from 'react';
import {
  AsyncStorage, Button, StyleSheet, View,
} from 'react-native';
import styled from 'styled-components';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Login = ({ navigation }) => {
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    navigation.navigate('Main');
  };

  return (
    <StyledView>
      <Button title="Sign in!" onPress={signInAsync} />
    </StyledView>
  );
};

export default Login;
