import React, {Fragment} from 'react';
import { Button, View, Text, FlatList } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };

    constructor() {
        super();
        // const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  
        this.state = {
            dataSource:'',
        }
    }

    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            const pokemonApiCall = await fetch('https://facebook.github.io/react-native/movies.json');
            const pokemon = await pokemonApiCall.json();
            this.setState({dataSource: JSON.stringify(pokemon.movies), loading: false});
            alert(this.state.dataSource);
            console.log("fetching data-----------", pokemon.movies);
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }


    render() {
      const {navigate} = this.props.navigation;
      return (
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => {
            return (
                <Text style={{fontSize:22}}>{item.title}</Text>
            )
        }}
              
        />
      );
    }
}
export default HomeScreen;