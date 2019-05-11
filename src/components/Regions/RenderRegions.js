import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import styles from '../../screens/Regions/Styles';
const RenderRegion = (props) => {
  return(
    <TouchableOpacity style={styles.item} onPress={props.onpress}>
        <View style={styles.viewStyle}>
                <Image source={props.image} style={styles.img}></Image>
                <Text style={styles.itemText}>{props.region}</Text>
        </View>
    </TouchableOpacity>
  );
}

export default RenderRegion;