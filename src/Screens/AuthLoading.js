import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
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
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle='default' />
    </View>
  );
};

export default AuthLoadingScreen;
