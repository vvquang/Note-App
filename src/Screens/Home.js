import React from 'react';
import { AsyncStorage, Button, Text } from 'react-native';
import styled from 'styled-components';
import I18n from '~/Locales/I18n';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HomeScreen = ({ navigation }) => {
  const showMoreApp = () => {
    navigation.navigate('Dashboard');
  };

  const signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  };

  return (
    <StyledView>
      <Text>{I18n.t('hello')}</Text>
      <Button title='Dashboard' onPress={showMoreApp} />
      <Button title='Actually, sign me out :)' onPress={signOutAsync} />
    </StyledView>
  );
};

export default HomeScreen;
