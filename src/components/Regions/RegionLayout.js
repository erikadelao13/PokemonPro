import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function RegionLayout(props){
  return(
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text 
          style={styles.welcomeText}
        >
          Welcome! {props.user.name}, choose a region and build your own poke team!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  welcome: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  welcomeText: {
    textAlign: 'center',
    color: '#272838', 
    fontFamily: 'GistLight',
    fontSize: 16,
  }
})
export default RegionLayout;