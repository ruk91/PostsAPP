import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './app/views/HomeScreen';
import ProfileScreen from './app/views/ProfileScreen';
import ImageScreen from './app/views/ImageScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Image: {screen: ImageScreen}
});

const App = createAppContainer(MainNavigator);

export default App;