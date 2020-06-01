import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const More = ({ navigation }) => (
  <StyledView>
    <Text>More...</Text>
  </StyledView>
);

export default More;
