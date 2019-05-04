import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

class GoogleAuth extends Component{ 
  handlePress = () => {
    GoogleSignin.configure({
      webClientId: '64663000518-4edlonjav4oad7i6rkj38rea741k4j7j.apps.googleusercontent.com',
      offlineAccess: false,
    });
    GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true
    })

    GoogleSignin.signIn().then(data => {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        data.idToken,
        data.accessToken
      );

      firebase.auth().signInWithCredential(credential).then(user => {
        this.props.dispatch({
          type: 'SET_USER_INFO',
          payload: {
            name: user.user._user.displayName,
            email: user.user._user.email,
            photo: user.user._user.photoURL,
            uid: user.user._user.uid,
          }
        });
        this.props.dispatch({
          type: 'SET_AUTH',
          payload: {
            authorize: true
          }
        });
      }).catch(error =>{
        console.log(error)
      }).done();
    }).catch(error => {
      console.log(error)
    });
  }

  render(){
    return(
      <View>
        <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.handlePress}/>    
      </View>
    )
  }
}

function mapStateToProps(state){
  return {
    authorize: state.authorize
  }
}

export default connect(mapStateToProps)(GoogleAuth);