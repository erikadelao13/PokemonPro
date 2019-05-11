import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';

class Logout extends Component {
 async componentDidMount() {
   try{
      await firebase.auth().signOut();
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.props.dispatch({
        type: 'DESTROY_SESSION',
        payload: {}
      });
      }catch(error){
        console.log(error);
      }
  }

  render() {
    return(null);
  }

}

function mapStateToProps(state){
  return {
    authorize: state.authorize
  }
}

export default connect(mapStateToProps)(Logout)
