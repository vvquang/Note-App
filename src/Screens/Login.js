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

const SignInScreen = ({ navigation }) => {
  const signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    navigation.navigate('Main');
  };


  return (
    <View style={styles.container}>
      <Button title="Sign in!" onPress={signInAsync} />
    </View>
  );

}

export default SignInScreen