import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const OtherScreen = ({ navigation }) => {
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <Button title="I'm done, sign me out" onPress={signOutAsync} />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default OtherScreen;
