import { StyleSheet } from 'react-native';
 const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
   },
   item: {
    borderRadius:30,
    alignItems: 'center',
    flex: 1,
    margin: 4
   },
   viewStyle: {
    alignItems: 'center'
   },
   itemText: {
    textTransform: 'uppercase',
    fontFamily: 'sans-serif-light',
    alignItems: 'center',
    fontSize: 30,
    color: '#000000'
   },
   img: {
    resizeMode:'contain',
    width: 150,
    height: 140
   },
   itemInvisible: {
   backgroundColor: 'transparent',
   }
 });

 export default styles;