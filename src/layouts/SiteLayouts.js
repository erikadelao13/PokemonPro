import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer,} from 'react-navigation';
import Regions from '../screens/Regions/Region';
import Logout from '../screens/Login/Logout';
import PokeList from '../screens/Pokemon/Pokemon'
class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {}
            <Image
              source={require('../assets/icons/iconmenu.png')}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }
const StackNavigationHome = createStackNavigator({
      Regions: {
        screen: Regions,
        navigationOptions: ({ navigation }) => ({
            title: 'Regions',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: '#F5FCFF',
            },
            headerTintColor: '#272838',
          }),
      },
      pokelist:{
        screen: PokeList,
        navigationOptions: ({ navigation }) => ({
            title: 'Pokemon',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: '#F5FCFF',
            },
            headerTintColor: '#272838',
          }),        
      },
});
  
  const AppNavigator = createDrawerNavigator(
    {
      Home: {
        screen: StackNavigationHome,
        navigationOptions: {
            drawerLabel: 'Home',
        }
      },
      Logout: {
        screen: Logout,
        navigationOptions: {
            drawerLabel: 'Log out',
        }
      }
    },
  )
  export default createAppContainer(AppNavigator);
  
