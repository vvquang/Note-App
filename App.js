import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '~/Redux/Store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Hello dev</Text>
      </View>
    </Provider>
  );
}
