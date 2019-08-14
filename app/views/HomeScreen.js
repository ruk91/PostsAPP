import React, {Fragment} from 'react';
import { Button, View, Text, FlatList, ActivityIndicator, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';

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
        } catch (error) {
            console.error(error);
        }
    }
    _onPostPress () {
        this.props.navigation.navigate('Profile', {title: "item.title"});
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.getPostsFromApi().then(() => {
          this.setState({refreshing: false});
        });
    }

    render() {
        const { loading } = this.state; 
        const { navigate } = this.props.navigation;

          if (!loading) {
              return (
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }>   
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity
                                        // {...data.item}
                                        // onPress={()=>this._onPostPress(item.title)}
                                        onPress={() => {
                                            /* 1. Navigate to the Details route with params */
                                            this.props.navigation.navigate('Profile', {
                                            id: item.id,
                                            title: item.title,
                                            body: item.body
                                            });
                                        }}
                                    >
                                        <View style={{ backgroundColor: '#E4E4E4', alignItems:'center', justifyContent:'center', borderRadius: 20, padding: 5,  margin:10, minHeight: 40}}>
                                            <Text style={{fontSize:22}}>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    
                                )
                            }}      
                        />
              </ScrollView>
                
              )
          } else {
                return (
                    <ActivityIndicator/>
                )
          }   
    }
}
export default HomeScreen;