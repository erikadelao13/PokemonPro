import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../screens/Login/Login';

const AppNavigator = createStackNavigator(
  {
    Login
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);