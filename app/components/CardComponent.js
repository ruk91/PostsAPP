import React, {Fragment} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet
} from 'react-native';

const window = Dimensions.get('window');

class CardComponent extends React.Component {
    render () {
        let postID = this.props.postID;
        let postTitle = this.props.postTitle;

        return (
            <TouchableOpacity onPress= {this.props.onPress}>
                <View style={styles.postContainer}>
                    <Text style={styles.postID}>
                        {postID}
                    </Text>

                    <Text style={styles.postTitle}>
                        {postTitle}
                    </Text>
                </View>
            </TouchableOpacity>
        )
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

export default CardComponent;