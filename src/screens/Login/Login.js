import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Image, Button} from 'react-native';
import styles from './styles';
import GoogleAuth from './GoogleAuth';

class Login extends Component {
  render() {
    return(
      <View style={styles.container}>
      <Image source={require('../../assets/images/pokemonlogo.png')} style={styles.imageLogo} />
        <GoogleAuth />            
      <Button
       title="let's start"
       onPress={() => this.props.navigation.navigate('Region')} />
      </View>      
    );
  }
}

function mapStateToProps(state){
  return {
    authorize: state.authorize
  }
}

export default connect(mapStateToProps)(Login)


/*import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';
import styles from './Styles';
import {StackNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/pokemonlogo.png')} style={styles.imageLogo} />
        <Button
         title="let's start"
         onPress={() => this.props.navigation.navigate('region')} />
         <Button style={styles.button}
         title="Teams"
         onPress={() => this.props.navigation.navigate('teams')} />
      </View>
    );
  }
}*/