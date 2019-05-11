import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppLayout from './src/AppLayout';
import { store, persistor } from './store';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
        >
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
