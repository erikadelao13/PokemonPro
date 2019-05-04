import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppLayout from './src/AppLayout';
import { store, persistor } from './store';
/*import { Button, Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createStore, combineReducers } from 'redux';
import Welcome from './src/screens/MainScreen/Welcome';
import region from './src/screens/Regions/Region'; */

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
/*// A very simple reducer
function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// A very simple store
let store = createStore(combineReducers({ count: counter }));

// A screen!
/*class Welcome extends React.Component {
  static navigationOptions = {
    title: 'Counter!',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{this.props.count}</Text>
        <Button
          title="Increment"
          onPress={() => this.props.dispatch({ type: 'INCREMENT' })}
        />
        <Button
          title="Decrement"
          onPress={() => this.props.dispatch({ type: 'DECREMENT' })}
        />

        <Button
          title="Go to static count screen"
          onPress={() => this.props.navigation.navigate('pokelist')}
        />
      </View>
    );
  }
} */

// Another screen!
/*class pokelist extends React.Component {
  static navigationOptions = {
    title: `Same number, wow!`,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{this.props.count}</Text>
      </View>
    );
  }
}*/
/*
// Connect the screens to Redux
let PokeWelcome = connect(state => ({ count: state.count }))(Welcome);
//let PokeList = connect(state => ({ count: state.count }))(pokelist);
let Region = connect(state => ({ count: state.count }))(region);
//let Teams = connect(state => ({ count: state.count }))(teams);

// Create our stack navigator
let RootStack = createStackNavigator({
  Welcome: PokeWelcome,
  //pokelist: PokeList,
  region: Region,
  //teams: Teams,
});

// And the app container
let Navigation = createAppContainer(RootStack);

// Render the app container component with the provider around it
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); */