import React, {Fragment} from 'react';
import { 
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator 
} from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Title goes here'
    };

    constructor() {
        super();
        // const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  
        this.state = {
            loading: true,
            title: 'Title goes here'
        }
    }

    componentDidMount () {
        this._setParamsToState();
    }

    _setParamsToState = () => {
        this.setState({
            loading: false,
            // title: this.props.getParam('title')
        })
    }

    render() {
        const { loading } = this.state; 
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'NO-ID');
        const title = navigation.getParam('title', 'some default value');
        const body = navigation.getParam('body', 'some default value');

        if (!loading) {
            return (
      
                // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                //     <Text>Details Screen</Text>
                //     <Text>id: {JSON.stringify(id)}</Text>
                //     <Text>title: {JSON.stringify(title)}</Text>
                //     <Text>body: {JSON.stringify(body)}</Text>
                // </View>\

                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            {/* <Text style={styles.headerTitle}>
                                {id}.
                            </Text> */}
                            <Text style={styles.headerTitle}>
                                {title}
                            </Text>
                        </View>

                        <View style={styles.postContent}>
                            <Text style={styles.postTitle}>
                                {body}
                            </Text>

                            {/* <Text style={styles.postDescription}>
                                {body}
                            </Text>

                            <Text style={styles.tags}>
                                Lorem, ipsum, dolor, sit, amet, consectetuer, adipiscing, elit. 
                            </Text>

                            <Text style={styles.date}>
                                2017-11-27 13:03:01
                            </Text>

                            <View style={styles.profile}>
                                <Image style={styles.avatar}
                                source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>

                                <Text style={styles.name}>
                                    Johan Doe
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.shareButton}>
                                <Text style={styles.shareButtonText}>Like</Text>  
                            </TouchableOpacity>  */}
                        </View>
                    </View>
                </ScrollView>
            );
        } else {
            return (
                <ActivityIndicator/>
            )
        }
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    header:{
        // flexDirection: 'row',
        padding:30,
        alignItems: 'center',
        backgroundColor: "#00BFFF",
    },
    headerTitle:{
      fontSize:30,
      color:"#FFFFFF",
      marginTop:10,
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    postContent: {
      flex: 1,
      padding:30,
    },
    postTitle:{
      fontSize:26,
      fontWeight:'600',
    },
    postDescription:{
      fontSize:16,
      marginTop:10,
    },
    tags:{
      color: '#00BFFF',
      marginTop:10,
    },
    date:{
      color: '#696969',
      marginTop:10,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 35,
      borderWidth: 4,
      borderColor: "#00BFFF",
    },
    profile:{
      flexDirection: 'row',
      marginTop:20
    },
    name:{
      fontSize:22,
      color:"#00BFFF",
      fontWeight:'600',
      alignSelf:'center',
      marginLeft:10
    }, 
    shareButton: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    shareButtonText:{
      color: "#FFFFFF",
      fontSize:20,
    }
  });

export default ProfileScreen;