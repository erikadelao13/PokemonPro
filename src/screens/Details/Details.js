import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, FlatList, TouchableWithoutFeedback, Alert, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import styles from './Styles';
import { connect } from 'react-redux';
import RenderDetail from '../../components/Details/RenderDetails'
import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'react-native-firebase';
class Details extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            loading: false, //vamos a saber cuando la aplicacion quede en proceso de descarga.
            name: this.props.navigation.state.params.name, //lista donde se van a guardar los pokemon
            types: this.props.navigation.state.params.types,
            url: this.props.navigation.state.params.url,
            region: this.props.navigation.state.params.name,
        }
    }
        renderItem = ({ item, index }) => {
        if (item.empty == true) {
            return <View style={styles.item} style={styles.itemInvisible}></View>
        }
        return (
            <View>
                <Text>{item.types}</Text>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.itemText}>{this.state.name}</Text>
                <Image style={styles.img} source={{ uri: 'http://pokestadium.com/sprites/xy/' + this.state.name+ '.gif' }}></Image>
                <FlatList //es como un for each
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
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
  
  export default connect(mapStateToProps)(Details)  