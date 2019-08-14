import React, {Fragment} from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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
        this._retrieveData();
        // this.getPostsFromApi();
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
            this._storeData()
        } catch (error) {
            console.log(error);
            this._retrieveData();
        }
    }

    _storeData = async () => {
        try {
            await AsyncStorage.setItem('postsData', JSON.stringify(this.state.dataSource));
            console.log('data storedd in cache');
        } catch (error) {
            console.error(error);
        }
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('postsData');
            if (value !== null) {
                this.setState({
                    dataSource: JSON.parse(value),
                    loading: false
                })
                // We have data!!
                // alert(value);
                console.log('fetched Data from cache--->');
            }
        } catch (error) {
            // Error retrieving data
            console.log(error);
        }
    }

    // _onPostPress () {
    //     this.props.navigation.navigate('Profile', {title: "item.title"});
    // }

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