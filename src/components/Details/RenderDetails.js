import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import styles from '../../screens/Pokemon/Styles';
const RenderDetail = (props) => {
  return(
    <View>
        <Text style={styles.itemText}>{props.pokemon}</Text>
        <Image style={styles.img} source={{ uri: 'http://pokestadium.com/sprites/xy/' + props.pokemon+ '.gif' }}></Image>
    </View>
  );
}

export default RenderDetail;