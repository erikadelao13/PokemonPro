import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import styles from '../../screens/Pokemon/Styles';
const PokemonList = (props) => {
  return(
    <TouchableOpacity style={styles.item} onPress={props.onpress}>
        <Text style={styles.itemText}>{props.pokemon}</Text>
        <Image style={styles.img} source={{ uri: 'http://pokestadium.com/sprites/xy/' + props.pokemon+ '.gif' }}></Image>
    </TouchableOpacity>
  );
}

export default PokemonList;