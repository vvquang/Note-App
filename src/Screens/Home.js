import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class HomeScreen extends React.Component {
  _showMoreApp = () => {
    this.props.navigation.navigate('OtherScreen');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoading');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title='Show me more of the app' onPress={this._showMoreApp} />
        <Button title='Actually, sign me out :)' onPress={this._signOutAsync} />
      </View>
    );
  }
}
