import React, {Fragment} from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    ActivityIndicator, 
    TouchableOpacity, 
    ScrollView, 
    RefreshControl, 
    Dimensions,
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const window = Dimensions.get('window');
class HomeScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        
        const {state} = navigation;

        return {
            title: 'Posts',
            headerTintColor: '#FFF',
                titleStyle: {
                    color: '#FFF',
                },
            headerLeft: null,
            headerStyle: { 
                backgroundColor: '#00BFFF', 

                elevation:0,
                borderBottomColor: 'transparent'
            },
            headerTitleStyle:{
                fontFamily:'Nunito-Black',
                fontWeight:'normal',
                fontSize:(window.height)*0.03,
                alignSelf:'center',
                textAlign:'center',
                flex: 1,
            },
        };
        
    };


    constructor() {
        super();
        this.state = {
            loading: true,
            dataSource:'',
        }
    }

    componentDidMount() {
        this._retrieveData();
    }

    async getPostsFromApi() {
        try {
            let response = await fetch(
              'https://jsonplaceholder.typicode.com/posts',
            );
            let responseJson = await response.json();
            console.log('fetched Data from api--->');
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
            console.log('data stored in cache');
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
                console.log('fetched Data from cache--->');
            } else {
                this.getPostsFromApi();
            }
        } catch (error) {
            // Error retrieving data
            console.log(error);
        }
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.getPostsFromApi().then(() => {
          this.setState({refreshing: false});
        });
    }

    _onPressPost = (item) => {
        this.props.navigation.navigate('Profile', {
            userId: item.userId,
            id: item.id,
            title: item.title,
            body: item.body
        });
    }

    render() {
        const { loading } = this.state; 
        // const { navigate } = this.props.navigation;

        if (!loading) {
            return (
                <ScrollView
                    style={{ backgroundColor: '#00BFFF'}}
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
                                        onPress={() => { this._onPressPost(item)}}
                                    >
                                        <View style={styles.postContainer}>
                                            <Text style={styles.postID}>
                                                {item.userId}
                                            </Text>

                                            <Text style={styles.postTitle}>
                                                {item.title}
                                            </Text>
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

const styles = StyleSheet.create({
    postContainer: {
        alignItems:'center', 
        justifyContent:'flex-start', 
        backgroundColor:'rgba(255,255,255,1)', 
        margin:(window.width)*0.03, 
        borderRadius:20,
        flexDirection:'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 2,elevation: 6,
    },
    postID: {
        color:'#000', 
        padding:(window.width*0.06), 
        fontFamily: 'Nunito-Regular',  
        fontSize: (window.width)*0.04
    },
    postTitle: {
        flexShrink: 1,
        color:'#000', 
        padding:(window.width*0.06), 
        fontFamily: 'Nunito-Regular', 
        fontSize: (window.width)*0.04
    }
})
export default HomeScreen;