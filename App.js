import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './app/views/HomeScreen';
import ProfileScreen from './app/views/ProfileScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;