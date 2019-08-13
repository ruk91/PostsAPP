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
            dataSource: ['Android','iOS', 'Java','Php', 'Hadoop',  
            'Sap', 'Python','Ajax', 'C++',  
            'Ruby', 'Rails','.Net', 'Perl'],  
        }
    }
    render() {
      const {navigate} = this.props.navigation;
      return (
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => {
            return (
                <Text style={{fontSize:22}}>{item}</Text>
            )
        }}
              
        />
      );
    }
}
export default HomeScreen;