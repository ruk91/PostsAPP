import React, {Fragment} from 'react';
import { 
    View, 
    Text, 
    Dimensions,
    StyleSheet
} from 'react-native';

const window = Dimensions.get('window');

class TitleComponent extends React.Component {
    render () {
        let title = this.props.title;

        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    {title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
        marginTop:5,
    }
})

export default TitleComponent;