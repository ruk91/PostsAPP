import React, {Fragment} from 'react';
import { 
    View, 
    Text, 
    Dimensions,
    StyleSheet
} from 'react-native';

const window = Dimensions.get('window');

class ContentComponent extends React.Component {
    render () {
        let content = this.props.content;

        return (
            <View style={styles.postContent}>
                <Text style={styles.postTitle}>
                    {content}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    postContent: {
        flex: 1,
        padding:30,
      },
      postTitle:{
        fontSize:26,
        fontFamily: 'Nunito-Regular',
        fontWeight:'600',
      },
})

export default ContentComponent;