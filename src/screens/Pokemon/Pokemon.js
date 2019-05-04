import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableWithoutFeedback, Alert, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import styles from './Styles';
import { connect } from 'react-redux';
import RenderPokeList from '../../components/Pokemons/RenderPokemon'
import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const formatData = (pokemon, numColumns) => {
    const numberOfFullRows = Math.floor(pokemon.length / numColumns);
    let numberOfElementsLastRow = pokemon.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow != numColumns && numberOfElementsLastRow != 0) {
        pokemon.push({ key: 'blank-${numberOfElementsLastRow}', empty: true });
        numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }
    return pokemon;
};
let item;
const numColumns = 3;
class Pokemon extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            loading: false, //vamos a saber cuando la aplicacion quede en proceso de descarga.
            pokemon: [], //lista donde se van a guardar los pokemon
            url: this.props.navigation.state.params.url,
            region: this.props.navigation.state.params.name,
            count: 0,
            teamN: [],
            selected:[],
            visibleModal: null,
        }
        this.resetSelected = this.state.selected;
    }

    renderButton = (text, onPress) => (
        <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
            <Text style={styles.addIcon}>{text}</Text>
        </TouchableOpacity>        
    );

    componentDidMount() { //se va ejecutar inmediatamente despues de que los componentes hayan sido montados
        this.getPokemon();
    };

    touchPokemon = (item) => {
        if (([...this.state.selected].length == 0) || ([...this.state.selected].length < 6)) {
            this.setState({
                selected: [...this.state.selected, item],
            });
            Alert.alert('Escogiste a ' + item);
        } else if ([...this.state.selected].length >= 6) {
            Alert.alert('You have already chose 6 pokemons');
        } else if([...this.state.selected].length < 3){
            Alert.alert('Remeber that you have to choose more than 2 pokemons!');
        };
    };

    getPokemon = () => {
        this.setState({ loading: true });
        fetch(this.state.url) //this.state.url es la peticion que recibo de la api
            .then(res => res.json()) //tratamos de transformarlo a json
            .then(res => { //una vez fue transformado a json
                this.setState({ //seteamos el nuevo estado que queremos
                    pokemon: res.results,
                    url: this.props.navigation.state.params.url,
                    loading: false //se coloca como falso debido a que ya obtuvimos la respusta del servidor
                }
                )
            }
            );//nos permite hacer la peticion al API
    };

    renderItem = ({ item, index }) => {
        if (item.empty == true) {
            return <View style={styles.item} style={styles.itemInvisible}></View>
        }
        return (
            <RenderPokeList onpress={() => this.touchPokemon(item.name)} pokemon={item.name}/>
        );
    };
    render() {
            console.log(this.state.count);
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
                <TouchableOpacity style={styles.floatingButton}>
                    <Text style={styles.addIcon}>Create Team!</Text>
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