import React, {Fragment} from 'react';
import { 
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ActivityIndicator,
    Dimensions
} from 'react-native';
const window = Dimensions.get('window'); 

import MAIcon from 'react-native-vector-icons/Ionicons';
// import CustomImage from '../components/CustomImage';

class ImageScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {state} = navigation;

    return {
        gesturesEnabled: false,
        title: 'Image View',
        headerTintColor: '#FFF',
          titleStyle: {
            color: '#FFF',  
          },
        headerStyle: { 
            backgroundColor: '#00BFFF', 
            height: (window.height)*.1,
            elevation:0,
            borderBottomColor: 'transparent'
        },
        headerTitleStyle:{
            fontSize:(window.height)*0.03,
            fontFamily:'Nunito-Black',
            fontWeight:'normal',
            alignSelf:'center',
            textAlign:'center',
            flex: 1
        },
        headerLeft:
        <MAIcon
            style={{paddingLeft: (window.width)*0.05 }}
            onPress={ () => navigation.navigate('Profile')}
            name= 'md-arrow-round-back'
            size={ (window.width)*0.06 }
            color="#FFF"
        />   ,
         headerRight: <View/>   
    };
};

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            title: this.props.navigation.state.params.title,
            url: this.props.navigation.state.params.url,
        }
    }

    componentDidMount() {
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
       
        if (!loading) {
            return (
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>
                            {this.state.title}
                        </Text>
                    </View>
                    
                    <View style={styles.container}>
                        <Image style={styles.photo} source={{uri: this.state.url}} />
                    </View>
                    {/* <CustomImage
                        url={url}
                    /> */}
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        flexDirection: 'row',
        padding:30,
        alignItems: 'center',
        backgroundColor: "#00BFFF",
    },
    headerTitle:{
        fontSize:30,
        fontFamily: 'Nunito-Bold',
        color:"#000",
        marginTop:10,
    },
    photo:{
        marginTop: (window.width)* 0.05,
        alignSelf: 'center',
        width:(window.width)*.9,
        height:(window.width)*.9,
        margin:(window.width)*.005,
        // marginRight:5,
    },
})

export default ImageScreen;