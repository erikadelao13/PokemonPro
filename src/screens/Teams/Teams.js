import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity, Alert} from 'react-native';
import {StackNavigator, createStackNavigator, createAppContainer, withNavigation} from 'react-navigation';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import firebase from 'react-native-firebase';
import RenderPokeList from '../../components/Pokemons/RenderPokemon';
import styles from './Styles';
let consult; 
let teamsRef = firebase.database().ref(consult);
const numColumns = 2;
const numColumns2 = 4;
class Teams extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
        //selected: this.props.navigation.state.params.selected,
        region: this.props.navigation.state.params.region,
        teams: [],
        visibleModal: null,
        }

    }
    componentWillMount() {
      firebase.database().ref(`Pokemons/${this.props.user.uid}/${this.state.region}`).on('value', snapshot => {
            let data = snapshot.val();
            let itemList = Object.values(data);
            let teamList = [];
            itemList.map((obj) => {
              teamList.push({
                team: obj.team
              })
            })
            this.setState({ 
              teams: teamList
            });
          });
      this.setState({
        loading: false
      })
    }
    renderItem2 = ({ item, index }) => {
      return (
        <View>
          {(item.team).map(pokemon => <View style={styles.item}><Text style={styles.itemText}>{pokemon}</Text><Image style={styles.img} source={{ uri: 'http://pokestadium.com/sprites/xy/' + pokemon+ '.gif' }}></Image></View>)}
        </View> 
      );
    };
    _renderButton = (text, onPress) => (
      <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
          <Text style={styles.addIcon}>{text}</Text>
      </TouchableOpacity>
    );
    _renderModalContent = () => (
        <View style={styles.modalContent}>
            <FlatList //es como un for each
                data={this.state.teams} //colocamos la lista
                renderItem={this.renderItem2}
                keyExtractor={(item, index) => index.toString()}
                numColumns={numColumns2}
            />        
            {this._renderButton('Close', () => this.setState({ visibleModal: null }))}                      
        </View>
    );       
  renderItem = ({item,index}) => {
    return(
      <TouchableOpacity style={styles.item} onPress={() => this.setState({ visibleModal: 1 })}>
        {(item.team).map(pokemon => <Text style={styles.itemText}>{pokemon}</Text>)}         
      </TouchableOpacity>      
    );
  };  
  render() {
    return (
        <View style={styles.container}>
            <FlatList //es como un for each
            data={this.state.teams} //colocamos la lista
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            /> 
          <Modal isVisible={this.state.visibleModal === 1}>
            {this._renderModalContent()}
          </Modal>                      
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