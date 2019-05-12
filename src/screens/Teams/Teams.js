import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity, Alert} from 'react-native';
import {StackNavigator, createStackNavigator, createAppContainer, withNavigation} from 'react-navigation';
import { connect } from 'react-redux';
//import {region, id} from '../Pokemon/Pokemon';
import firebase from 'react-native-firebase';
import RenderPokeList from '../../components/Pokemons/RenderPokemon';
import styles from './Styles';
let consult; 
let teamsRef = firebase.database().ref(consult);
const numColumns = 3;
class Teams extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
        //selected: this.props.navigation.state.params.selected,
        region: this.props.navigation.state.params.region,
        teams: []
        }

    }
    //consult = `Pokemons/${this.props.user.uid}`;
    //consult = 'Pokemons/okAzC0UP3VP4BOYpRGVmSfDnNDo1/Kanto/486a2880/team'
    //consult = `Pokemons/${this.props.user.uid}/${region}/${id}`;
    //teamsRef = firebase.database().ref(consult);
    /*componentDidMount(){
      teamsRef.on('value', snapshot => {
        const data = snapshot.toJSON();
        if(data){
          const teamList = [];
          Object.keys(data).map((key) =>{
            let obj = data[key]
            obj['id'] = key
            teamList.push(obj)
          })
          this.setState({
            teams: teamList
          });
        }else{
          this.setState({
            teams: []
          })
        }
      });
    }*/
  /*  teamsRef = firebase.database().ref(consult);
    componentDidMount(){
      teamsRef.on('value', snapshot => {
        let data = snapshot.val();
	console.log("DATA: "+data)	
        let teams = Object.values(data);
	console.log("TEAMS: "+teams[0])
        this.setState({ 
          teams
        });
      });
    } */
   /* componentDidMount(){
      teamsRef.on('value', snapshot => {
        let data = snapshot.val();
        let teams = Object.values(data);
        this.setState({ 
          teams
        });
      });
    }*/
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
  renderItem = ({item,index}) => {
    console.log(this.state.teams);
        console.log("imprimiendo items");
        console.log(item);
        return(
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.team}</Text>
            <Image style={styles.img} source={{ uri: 'http://pokestadium.com/sprites/xy/' + item.team + '.gif' }}></Image>
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