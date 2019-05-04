import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column'
   },
   imageLogo: {
        resizeMode:'contain',
        width: 300,
        height: 320
   },
   button: {
        margin: 5,
   }
 });
 export default styles;