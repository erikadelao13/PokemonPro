import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './Styles';
import RegionLayout from '../../components/Regions/RegionLayout';
import RenderRegion from '../../components/Regions/RenderRegions';
import { connect } from 'react-redux';
import {StackNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import flatListData from '../../api/RegionData';

class Regions extends Component<Props> {
renderSeparatorView = () => {
    return (
      <View style={{   
          marginLeft: 40,
          marginRight: 40,
          height: 1,
          backgroundColor: "#CEDCCE",
        }} 
      />
    );
  };
renderItem = ({item,index}) => {
    return(
        <RenderRegion image={item.uriImage} region={item.name} onpress={() => this.props.navigation.navigate('pokelist', {url: item.url, name: item.name})}/>
    );
};
  render() {
    return (
        <View style={{flex: 1, backgroundColor: '#F5FCFF', flexDirection: 'column',}}>
            <FlatList
             data={flatListData}
             style={styles.container}
             renderItem={this.renderItem}
             keyExtractor={(item, index) => index.toString()}
             ItemSeparatorComponent={this.renderSeparatorView}/>
            <RegionLayout
            user={this.props.user}
            ></RegionLayout>             
        </View>
    );
  }
}

function mapStateToProps(state){
  return {
    authorize: state.authorize,
    user: state.user,
  }
}

export default connect(mapStateToProps)(Regions) 