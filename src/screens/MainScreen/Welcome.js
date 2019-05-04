import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';
import styles from './Styles';
import { connect } from 'react-redux';
import {StackNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { db } from '../../lib/db';

GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/contacts.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '64663000518-4edlonjav4oad7i6rkj38rea741k4j7j.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
type Props = {};
class GoogleAuth extends Component<Props> {
    onLoginOrRegister = async () => {
      GoogleSignin.configure({});
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
        /*await GoogleSignin.hasPlayServices();
        await GoogleSignin.signIn()
          .then((data) => {
            // Create a new Firebase credential with the token
            const credential = db.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
            // Login with the credential
            return db.auth().signInWithCredential(credential);
          })
          .then((user) => {
            console.log('User successfully signed in', user)
            // If you need to do anything with the user, do it here
            // The user will be logged in automatically by the
            // `onAuthStateChanged` listener we set up in App.js earlier
          })
          .catch((error) => {
            const { code, message } = error;
            console.error('User signin error', err);            
            // For details of error codes, see the docs
            // The message contains the default Firebase string
            // representation of the error
          }); */
      }
     
    render() {
    return (
        
      <View style={styles.container}>
        <Image source={require('../../assets/images/pokemonlogo.png')} style={styles.imageLogo} />
        <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.onLoginOrRegister}/>              
        <Button
         title="let's start"
         onPress={() => this.props.navigation.navigate('region')} />
      </View>
               /*<Button style={styles.button}
         title="Teams"
         onPress={() => this.props.navigation.navigate('teams')} /> */
    );
  }
}
function mapStateToProps(state){
  return {
    authorize: state.authorize
  }
}
export default connect(mapStateToProps)(GoogleAuth);
