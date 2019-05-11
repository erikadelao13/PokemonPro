import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
   container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column'
   },
  itemText: {
        textTransform: 'uppercase',
        fontFamily: 'sans-serif-light',
        fontSize: 15,
        color: '#000000'
    },
   img: {
        resizeMode:'contain',
        width: 100,
        height: 130
   },
 });
 export default styles;