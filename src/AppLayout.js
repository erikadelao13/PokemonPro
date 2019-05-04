import React, {Component} from 'react';
import { connect } from 'react-redux';
import SiteLayout from './layouts/SiteLayouts'
import LoginLayout from './layouts/LoginLayout'

class AppLayout extends Component{
  render(){
    if (this.props.authorize) {
      return(<SiteLayout />);
    }else{
      return(<LoginLayout />);
    }
  }
}

function mapStateToProps(state){
  return {
    authorize: state.authorize
  }
}

export default connect(mapStateToProps)(AppLayout);