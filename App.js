import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '~/Redux/Store';
import Routes from '~/Routes';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
