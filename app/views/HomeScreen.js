import React, {Fragment} from 'react';
import { Button, View, Text, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Posts List',
    };

    constructor() {
        super();
        // const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  
        this.state = {
            loading: true,
            dataSource:'',
        }
    }

    componentDidMount() {
        this.getPostsFromApi();
        // try {
        //     let response = await fetch(
        //       'https://jsonplaceholder.typicode.com/posts',
        //     );
        //     let responseJson = await response.json();
        //     this.setState({
        //         dataSource: responseJson,
        //         loading: false
        //     })
        //     // return responseJson.movies;
        // } catch (error) {
        //     console.error(error);
        // }
    }

    async getPostsFromApi() {
        try {
            let response = await fetch(
              'https://jsonplaceholder.typicode.com/posts',
            );
            let responseJson = await response.json();
            this.setState({
                dataSource: responseJson,
                loading: false
            })
            // return responseJson.posts;
        } catch (error) {
            console.error(error);
        }
    }
    onPostPress () {
        this.props.navigation.navigate('Profile', {title: "item.title"});
    }


    render() {
        const { loading } = this.state; 
        const { navigate } = this.props.navigation;

          if (!loading) {
              return (
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                // {...data.item}
                                // onPress={()=>this.onPostPress(item.title)}
                                onPress={() => {
                                    /* 1. Navigate to the Details route with params */
                                    this.props.navigation.navigate('Profile', {
                                      id: item.id,
                                      title: item.title,
                                      body: item.body
                                    });
                                  }}
                            >
                                <Text style={{fontSize:22}}>{item.title}</Text>
                            </TouchableOpacity>
                            
                        )
                    }}      
                />
              )
          } else {
                return (
                    <ActivityIndicator/>
                )
          }   
    }
}
export default HomeScreen;