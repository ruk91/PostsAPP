import React, {Fragment} from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Dimensions,
    FlatList
} from 'react-native';

import MAIcon from 'react-native-vector-icons/Ionicons';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import TitleComponent from '../components/TitleComponent';
import ContentComponent from '../components/ContentComponent';
const window = Dimensions.get('window'); 

class ProfileScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {state} = navigation;

    return {
        gesturesEnabled: false,
        title: 'Profile',
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
            onPress={ () => navigation.navigate('Home')}
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
            imageloading: true,
            title: this.props.navigation.state.params.title,
            body: this.props.navigation.state.params.body,
            userId: this.props.navigation.state.params.userId,
            dataSource: ''
        }
    }

    componentDidMount () {
      this.getImagesFromApi();
      this._setParamsToState();
    }

    async getImagesFromApi() {
      try {
          let response = await fetch(
            'https://jsonplaceholder.typicode.com/photos?album=1',
          );
          let responseJson = await response.json();
          console.log('fetched Data from api--->');
          this.setState({
              dataSource: responseJson,
              imageloading: false
          })
      } catch (error) {
          console.log(error);
      }
  }

    _setParamsToState = () => {
        this.setState({
            loading: false,
        })
    }

    _onPressImage = (item) => {
      this.props.navigation.navigate('Image', {
        albumId: item.albumId,
        id: item.id,
        title: item.title,
        url: item.url
      });
    }

    render() {
        const { loading } = this.state; 

        if (!loading) {
            return (
              <View style={styles.container}>
              
                <TitleComponent
                  title={this.state.title}
                />

                <ScrollView>
                
                  <ContentComponent
                    content={this.state.body}
                  />

                  <View style={styles.photosCard}>
                    <Text style={styles.cardTittle}>Album</Text>

                      <View style={styles.photosContainer}>
                        <FlatList
                          data={this.state.dataSource}
                          renderItem={({ item }) => {
                            return (
                              <TouchableOpacity onPress={() => { this._onPressImage(item)}}>
                                {/* <Image style={styles.photo} source={{uri: item.thumbnailUrl}} /> */}
                                <Image 
                                  source={{ uri: item.thumbnailUrl }} 
                                  indicator={Progress.Circle} 
                                  indicatorProps={{
                                      size: 80,
                                      borderWidth: 0,
                                      color: 'rgba(0, 191, 255, 1)',
                                      unfilledColor: 'rgba(200, 200, 200, 0.2)'
                                  }}
                                  style={styles.photo}
                                />
                              </TouchableOpacity>
                            )
                          }}   
                          numColumns={3}   
                      />
                      
                    </View>
                  </View>

                </ScrollView>
              </View>  
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
  photosContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
  },
  photosCard:{
    marginTop:10,
    justifyContent: 'center',
    margin: (window.width)*0.03
  },
  photo:{
    width:(window.width)*.3,
    height:(window.width)*.3,
    margin:(window.width)*.005,
    // marginRight:5,
  },
  cardTittle:{
    color:"#000",
    fontFamily: 'Nunito-Black',
    fontSize:22,
    marginBottom:5,
  },
});

export default ProfileScreen;