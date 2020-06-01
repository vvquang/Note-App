import React from 'react';
import {
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import styled from 'styled-components';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

class Report extends React.Component {
  render() {
    return (
      <StyledView>
        <Text>Report</Text>
      </StyledView>
    );
  }
}

export default Report;
