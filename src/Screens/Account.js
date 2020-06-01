import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Accounts = ({ navigation }) => {
  const handleSignOut = async () => {
    // await AsyncStorage.clear();
    navigation.navigate('SettingApp');
  };

  return (
    <StyledView>
      <Text>accounts...</Text>
      <Button title="Dashboard" onPress={handleSignOut} />
    </StyledView>
  );
};


export default Accounts;
