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
       title="Teams"
       onPress={() => this.props.navigation.navigate('Teams')} />
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

