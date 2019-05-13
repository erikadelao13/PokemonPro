import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableWithoutFeedback, Alert, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import styles from './Styles';
import { connect } from 'react-redux';
import RenderPokeList from '../../components/Pokemons/RenderPokemon'
import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'react-native-firebase';
import uuid from 'react-native-uuid';

const formatData = (pokemon, numColumns) => {
    const numberOfFullRows = Math.floor(pokemon.length / numColumns);
    let numberOfElementsLastRow = pokemon.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow != numColumns && numberOfElementsLastRow != 0) {
        pokemon.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }
    return pokemon;
};
let item;
const numColumns = 3;
let contador = 0;
//export let region;
class Pokemon extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            loading: false, //vamos a saber cuando la aplicacion quede en proceso de descarga.
            pokemon: [], //lista donde se van a guardar los pokemon
            url: this.props.navigation.state.params.url,
            urlAbilities: 'https://pokeapi.co/api/v2/pokemon/',
            region: this.props.navigation.state.params.name,
            type: [],
            count: 0,
            team:[],
            visibleModal: null,
        }
    }

    componentDidMount(){
        this.getPokemon();
       // this.getAbility(item);
    }

    getPokemon = () => {
        this.setState({ loading: true });
        fetch(this.state.url) //this.state.url es la peticion que recibo de la api
            .then(res => res.json()) //tratamos de transformarlo a json
            .then(res => { //una vez fue transformado a json
                this.setState({ //seteamos el nuevo estado que queremos
                    pokemon: res.results,
                    abilities: res.abilities,
                    url: this.props.navigation.state.params.url,
                    loading: false //se coloca como falso debido a que ya obtuvimos la respusta del servidor
                }   
                )
            }
            );//nos permite hacer la peticion al API
    };

    getDetails = (item) => {
        this.setState({ 
            loading: true,
            urlTypes: 'https://pokeapi.co/api/v2/pokemon/'+item,
         });
        fetch(this.state.urlTypes) //this.state.url es la peticion que recibo de la api
            .then(res => res.json()) //tratamos de transformarlo a json
            .then(res => { //una vez fue transformado a json
                this.setState({ //seteamos el nuevo estado que queremos
                    type: res.types,
                    url: this.props.navigation.state.params.url,
                    loading: false //se coloca como falso debido a que ya obtuvimos la respusta del servidor
                }   
                )
            }
            );//nos permite hacer la peticion al API
    };  

    addPokemons = (item,region) => {
        let generateUuid = uuid.v1();
        let id = generateUuid.split('-')[0];                
        firebase.database().ref(`Pokemons/${this.props.user.uid}/${region}/${id}`).set({
            team: item,
        })
        this.setState({
            team: [], //una vez apretemos el boton de agregar equipo, o sea, agregar a firebase, se va a resetear la lista de team a vacia
        });
    }

    touchPokemon = (item) => {
        if (([...this.state.team].length == 0) || ([...this.state.team].length < 6)) {
           // this.getDetails(item.name);
            this.setState({
                team: [...this.state.team, item],
            });
            Alert.alert('Escogiste a ' + item);
        } else if ([...this.state.team].length >= 6) {
            Alert.alert('You have already chose 6 pokemons');
        } else if([...this.state.team].length < 3){
            Alert.alert('Remeber that you have to choose more than 2 pokemons!');
        };
    };
    

    renderItem = ({ item, index }) => {
        if (item.empty == true) {
            return <View style={styles.item} style={styles.itemInvisible}></View>
        }
        return (
        <RenderPokeList onpress={() => this.props.navigation.navigate('detail', {name: item.name/*, types: item.type*/})} onlongpress={() => this.touchPokemon(item.name)} pokemon={item.name}/>
        );
    };
    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="blue" />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <FlatList //es como un for each
                    data={formatData(this.state.pokemon, numColumns)} //colocamos la lista
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                />
                <TouchableOpacity style={styles.floatingButton} activeOpacity={0.6} onPress={() => {this.addPokemons(this.state.team, this.state.region)}}>
                    <Text style={styles.addIcon}>Create Team!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.floatingButtonTwo} activeOpacity={0.6} onPress={() => this.props.navigation.navigate('teams', {region: this.state.region})}>
                    <Text style={styles.addIcon}>Show Teams!</Text>
                </TouchableOpacity>                  
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
  
  export default connect(mapStateToProps)(Pokemon)  