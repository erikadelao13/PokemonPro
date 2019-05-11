import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity, Alert} from 'react-native';
import styles from '../Pokemon/Styles';
import {StackNavigator, createStackNavigator, createAppContainer, withNavigation} from 'react-navigation';
import { connect } from 'react-redux';
import {region, id} from '../Pokemon/Pokemon';
import firebase from 'react-native-firebase';
let consult;
let teamsRef = firebase.database().ref(consult);
const numColumns = 3;
class Teams extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
        //selected: this.props.navigation.state.params.selected,
        teams: []
        }

    }
    consult = `Pokemons/${this.props.user.uid}/${region}/${id}/`;
    //consult = 'Pokemons/okAzC0UP3VP4BOYpRGVmSfDnNDo1/Kanto/486a2880/team'
    teamsRef = firebase.database().ref(consult);
    componentDidMount(){
      teamsRef.on('value', snapshot => {
        let data = snapshot.val();
        let teams = Object.values(data);
        this.setState({ 
          teams
        });
      });
    }
  renderItem = ({item,index}) => {
        return(
          <View>
            <Text>{this.state.teams[index]}</Text>
            <Image style={styles.img} source={{ uri: 'http://pokestadium.com/sprites/xy/' + this.state.teams[index] + '.gif' }}></Image>
          </View>
            );
  };
  render() {
      console.log(this.state.teams);
    return (
        <View style={styles.container}>
            <FlatList //es como un for each
            data={this.state.teams} //colocamos la lista
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            />
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
  
  export default connect(mapStateToProps)(Teams)  