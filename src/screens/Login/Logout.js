import React, { Component } from 'react';
import { connect } from 'react-redux';

class Logout extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'DESTROY_SESSION',
      payload: {}
    })
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
